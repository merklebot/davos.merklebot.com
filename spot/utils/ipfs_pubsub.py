import os
import traceback

import requests
from settings.settings import INTERACTION_MODE, IPFS_COMMAND_GATEWAY
from utils.logger import logger
import time
import ipfs_api
import json


class PubsubHelper:
    def __init__(self, robot_state, task_queue):
        self.robot_state = robot_state
        self.task_queue = task_queue

    def ipfs_pubsub_callback(self, message):
        """Execution sequence.

        1. Start robot state recording,
        2. Move the robot,
        3. Stop recording,
        4. Launch after session procedures in background.
        """

        # sender, recipient, command_params_32_bytes = data
        # session_id = get_account_nonce(sender)
        # command_params_ipfs_hash = robonomicsinterface.ipfs_32_bytes_to_qm_hash(command_params_32_bytes)
        # task = requests.get(f'{IPFS_COMMAND_GATEWAY}/{command_params_ipfs_hash}').json()
        # task['transaction'] = {'tx_id': launch_event_id, 'sender': sender, 'recipient': recipient, 'session_id': session_id}
        #
        # if INTERACTION_MODE == 'drawing':
        ipfs_hash = json.loads(message["data"])["objective"]
        task = requests.get(f'{IPFS_COMMAND_GATEWAY}/{ipfs_hash}').json()
        task["task_source"] = "ipfs_pubsub"

        self.task_queue.put(task)
        #     # self.execute_drawing_command(address=sender)
        # elif INTERACTION_MODE == 'movement':
        #     pass

        logger.info("IPFS Session complete")

    def start_subscriber(self):
        while True:
            try:
                logger.info("IPFS pubsub subscriber starting...")
                ipfs_api.pubsub_subscribe("test_for_spot", self.ipfs_pubsub_callback)
            except:
                traceback.print_exc()
                logger.error("Error while connecting to ipfs pubsub, restart subscriber...")
            time.sleep(5)
