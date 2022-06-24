from external_communications.videoserver import send_command_to_videoserver, get_spot_face_on_camera_coords, \
    notify_start_line, notify_stop_line
from external_communications.tickets import get_tickets_by_customer, spend_ticket

from spot.spot_controller import SpotController
from utils.calibration import centralize, coord_nodes, calibration_movement
from utils.robonomics import RobonimicsHelper
from utils.recorder import DataRecorder
from settings.settings import SPOT_USERNAME, SPOT_PASSWORD, SPOT_IP, MOVEMENT_SESSION_DURATION_TIME, USE_ROBONOMICS, ADMIN_ACCOUNTS

import time, json


def robonomics_subscriber_process(robot_state):
    robonomics_helper = RobonimicsHelper(robot_state)
    robonomics_helper.start_subscriber()


def spot_logic_process(movement_queue, drawing_queue, robot_state):
    def execute_drawing_command():
        task = drawing_queue.get()
        segments_task = task['segments']
        payment_mode = task['payment_mode']
        tx_id = task['tx_id']
        transaction = None
        for i in range(15):
            for tx in robot_state['transactions']:
                if tx['tx_id']==tx_id:
                    transaction = tx
                    break
            if not transaction:
                time.sleep(1)
            else:
                break
        else:
            return

        address = transaction['sender']

        if payment_mode == 'ticket':
            customer_tickets = get_tickets_by_customer(address=address)
            available_tickets = [ticket for ticket in customer_tickets if ticket['spent'] == False]
            if len(available_tickets) == 0:
                print("No available tickets for", address)
                return
            else:
                spend_ticket(available_tickets[0]['id'])

        calibrate = False
        if len(segments_task) == 0:
            if address in ADMIN_ACCOUNTS:
                # calibrate robot
                calibrate = True
            else:
                return

        print("Got task", segments_task)

        data_recorder = DataRecorder(transaction)
        data_recorder.start_data_recording()


        # notify videoserver to clear canvas
        send_command_to_videoserver("clear_canvas")

        all_segments = []
        for segment in segments_task:
            all_segments += segment
        print("Got segments", all_segments)

        robot_state['state'] = "executing"

        print("Starting spot controller")
        with SpotController(SPOT_USERNAME, SPOT_PASSWORD, SPOT_IP, coord_nodes) as sc:
        # sc = SpotController(SPOT_USERNAME, SPOT_PASSWORD, SPOT_IP, coord_nodes)
        #
        # print("Spot controller started")
        # sc.lease_control()
        # print("Lease control got")
        # sc.power_on_stand_up()
        # print("Robot powered and stand up")

            print("Starting movement...")

            if calibrate:
                calibration_movement(sc, get_spot_face_on_camera_coords)
            else:
                for i, segments in enumerate(segments_task):
                    print("Drawing segment")
                    time.sleep(0.1)

                    xx, yy = centralize([segment[0] for segment in segments], [segment[1] for segment in segments],
                                        all_segments)
                    sc.move_to_draw(start_drawing_trigger_handler=notify_start_line,
                                    end_drawing_trigger_handler=notify_stop_line,
                                    xx=xx, yy=yy)
                    time.sleep(0.1)

            print("Movement finished")
            # print("Ready to turn off")
            # sc.power_off_sit_down()
        robot_state['state'] = "saving_data"
        print("Robot powered off and sit down")
        time.sleep(1)
        data_recorder.stop_data_recording()
        data_recorder.start_data_uploading()


        robot_state['last_session_id'] = transaction['session_id']
        robot_state['state'] = "idle"

    def start_movement_session():
        print("Starting movement session")

        print("Starting spot controller")
        sc = SpotController(SPOT_USERNAME, SPOT_PASSWORD, SPOT_IP, coord_nodes)

        print("Spot controller started")
        sc.lease_control()
        print("Lease control got")
        sc.power_on_stand_up()
        print("Robot powered and stand up")

        robot_state['state'] = 'waiting_movement_command (left: {}s)'.format(MOVEMENT_SESSION_DURATION_TIME)
        session_start_time = time.time()

        while True:
            current_time = time.time()
            current_duration = current_time - session_start_time
            robot_state['state'] = 'waiting_movement_command (left: {}s)'.format(
                MOVEMENT_SESSION_DURATION_TIME - current_duration)

            if current_duration < MOVEMENT_SESSION_DURATION_TIME:
                try:
                    aim_robot_point = movement_queue.get(block=False)
                except:
                    aim_robot_point = None
                if not aim_robot_point:
                    continue

                robot_state['state'] = 'executing_movement_command'
                sc.move_to_goal(aim_robot_point[0], aim_robot_point[1])

            else:
                # go to 0,0
                sc.move_to_goal(0, 0)
                sc.power_off_sit_down()
                robot_state['state'] = "saving_data"
                print("Robot powered off and sit down")
                time.sleep(1)
                break

    while True:
        execute_drawing_command()
