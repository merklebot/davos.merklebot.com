import random

import requests
from external_communications.videoserver import send_command_to_videoserver, get_spot_face_on_camera_coords, \
    notify_start_line, notify_stop_line
from external_communications.tickets import get_tickets_by_customer, spend_ticket

from spot.spot_controller import SpotController
from utils.calibration import centralize, coord_nodes, calibration_movement
from utils.robonomics import RobonimicsHelper
from utils.recorder import DataRecorder
from utils.ipfs_pubsub import PubsubHelper
from settings.settings import SPOT_USERNAME, SPOT_PASSWORD, SPOT_IP, MOVEMENT_SESSION_DURATION_TIME, USE_ROBONOMICS, \
    ADMIN_ACCOUNTS, TELEGRAM_BOT_TOKEN, TELEGRAM_BOT_USER_ID

import time, json
from datetime import datetime

import datadog
from utils.logger import logger
import traceback

def robonomics_subscriber_process(robot_state, tasks_queue):
    datadog_options = {
        'statsd_host': '172.17.0.1',
        'statsd_port': 8125,
        'statsd_namespace': 'strelka',
        'statsd_constant_tags': [
            'vendor:boston-dynamics',
            'cps:spot',
            'loc:merklebot-sf',
            'operator:m2m-economy',
            'product:spot-demo',
        ],
    }
    datadog.initialize(**datadog_options)
    datadog.statsd.event("Startup", "Spot demo starts at {} UTC".format(datetime.utcnow()))

    robonomics_helper = RobonimicsHelper(robot_state, tasks_queue)
    robonomics_helper.start_subscriber()


def ipfs_pubsub_subscriber_process(robot_state, tasks_queue):
    pubsub_helper = PubsubHelper(robot_state, tasks_queue)
    pubsub_helper.start_subscriber()


def spot_logic_process(actions_queue, drawing_queue, robot_state):
    def execute_drawing_command(task, transaction):
        admin_action = task.get('admin_action', False)
        segments_task = task['segments']

        calibrate = False
        if len(segments_task) == 0:
            if admin_action:
                # calibrate robot
                calibrate = True
            else:
                return

        logger.info("Got task: {}".format(segments_task))
        data_recorder = None
        if not admin_action:
            data_recorder = DataRecorder(transaction, random_folder_name=(task.get("task_source")=="ipfs_pubsub"))
            data_recorder.start_data_recording()

        # notify videoserver to clear canvas
        send_command_to_videoserver("clear_canvas")

        all_segments = []
        for segment in segments_task:
            all_segments += segment
        logger.info(f"Got segments :{all_segments}")

        robot_state['state'] = "executing"

        logger.info("Starting spot controller")

        with datadog.statsd.timed('launch.timer'):
            with SpotController(SPOT_USERNAME, SPOT_PASSWORD, SPOT_IP, coord_nodes) as sc:
                logger.info("Starting movement...")

                if calibrate:
                    calibration_movement(sc, get_spot_face_on_camera_coords)
                else:
                    for i, segments in enumerate(segments_task):
                        logger.info("Drawing segment")
                        time.sleep(0.1)

                        xx, yy = centralize([segment[0] for segment in segments], [segment[1] for segment in segments],
                                            all_segments)
                        sc.move_to_draw(start_drawing_trigger_handler=notify_start_line,
                                        end_drawing_trigger_handler=notify_stop_line,
                                        xx=xx, yy=yy)
                        time.sleep(0.1)

                logger.info("Movement finished")
                # print("Ready to turn off")
                # sc.power_off_sit_down()
        robot_state['state'] = "saving_data"
        logger.info("Robot powered off and sit down")
        time.sleep(1)
        if not admin_action:
            data_recorder.stop_data_recording()
            data_recorder.start_data_uploading(from_ipfs_pubsub=(task.get("task_source")=="ipfs_pubsub"))
            robot_state['last_session_id'] = transaction['session_id']
        robot_state['state'] = "idle"

    def execute_inspection_command(task, transaction):

        robot_state['state'] = 'waiting_movement_command (left: {}s)'.format(MOVEMENT_SESSION_DURATION_TIME)
        session_start_time = time.time()
        data_recorder = DataRecorder(transaction, record_video=False)
        data_recorder.start_data_recording()
        with SpotController(SPOT_USERNAME, SPOT_PASSWORD, SPOT_IP, coord_nodes) as sc:
            logger.info("Starting movement...")

            while True:
                current_time = time.time()
                current_duration = current_time - session_start_time
                robot_state['state'] = 'waiting_movement_command (left: {}s)'.format(
                    MOVEMENT_SESSION_DURATION_TIME - current_duration)

                if current_duration < MOVEMENT_SESSION_DURATION_TIME:
                    try:
                        action = actions_queue.get(block=False)
                        if action['action'] == 'move':
                            vel = action['value']
                            sc.move_by_velocity_control(v_x=vel['x'], v_y=vel['y'], v_rot=vel['r'])
                        elif action['action'] == 'pose':
                            pos_name = action['value']
                            if pos_name == 'stance':
                                sc.make_stance(0.3, 0.3)
                            elif pos_name == 'stance_0':
                                sc.make_stance(0.2, 0.2)
                            elif pos_name == 'seat':
                                sc.stand_at_height(-0.6)
                            elif pos_name == 'stand':
                                sc.stand_at_height(0)
                            elif pos_name == 'bow_b':
                                sc.dust_off([0, 0.3], [0, -0.6], [0, 0])

                            elif pos_name == 'bow':
                                sc.bow(0.6)
                                sc.bow(0)
                            elif pos_name == 'dust_off':
                                rolls = []
                                yaws = []
                                pitches = []
                                for _ in range(10):
                                    rolls.append(random.uniform(-1, 1))
                                    yaws.append(random.uniform(-0.1, 0.1))
                                    pitches.append(random.uniform(-0.1, 0.1))

                                rolls.append(0)
                                yaws.append(0)
                                pitches.append(0)

                                sc.dust_off(yaws, pitches, rolls)

                    except:
                        action = None
                    if not action:
                        continue
                else:
                    robot_state['state'] = "saving_data"
                    break
        data_recorder.stop_data_recording()
        data_recorder.start_data_uploading()
        robot_state['last_session_id'] = transaction['session_id']
        robot_state['state'] = "idle"

    def execute_task():
        try:
            task = drawing_queue.get()
            transaction = task.get('transaction', {})
            logger.info("executing task {}".format(task))
            payment_mode = task.get('payment_mode')

            address = transaction.get('sender') if transaction else None

            if payment_mode == 'ticket':
                customer_tickets = get_tickets_by_customer(address=address)
                available_tickets = [ticket for ticket in customer_tickets if ticket['spent'] == False]
                if len(available_tickets) == 0:
                    logger.info("No available tickets for", address)
                    return
                else:
                    spend_ticket(available_tickets[0]['id'])

            robot_state['current_user'] = address

            if task['task_type'] == 'drawing':
                execute_drawing_command(task, transaction)
            elif task['task_type'] == 'inspection':
                if transaction['sender'] in ADMIN_ACCOUNTS:
                    execute_inspection_command(task, transaction)
            robot_state['current_user'] = None
        except Exception as e:
            logger.error(traceback.format_exc())

    while True:
        execute_task()
