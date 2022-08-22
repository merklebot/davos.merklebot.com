import time

from spot.spot_controller import SpotController
import json
import os

from settings.settings import CALIBRATIONS_DIR

coord_nodes = json.load(open("{}/calibration_data_final.json".format(CALIBRATIONS_DIR))) if os.path.exists("{}/calibration_data_final.json".format(CALIBRATIONS_DIR)) else {
    "x": [0, 0, 400, 400],
    "y": [0, 300, 0, 300],
    "yaw": [-0.4, -0.4, 0.4, 0.4],
    "pitch": [-0.4, 0.4, -0.4, 0.4],
    "max_width": 400,
    "max_height": 300
}

with SpotController("admin", "2zqa8dgw7lor", "192.168.50.3", coord_nodes) as sc:

    sc.make_stance(0.2, 0.2)
    time.sleep(5)
    sc.make_stance(0.2, 0)
    time.sleep(5)
    sc.make_stance(0, 0.2)
    time.sleep(5)
    sc.make_stance(0, 0.3)
    time.sleep(5)
    sc.make_stance(0.3, 0)
    time.sleep(5)
    sc.make_stance(0, 0)

    # yaws = [(-1) ** (j % 2) * i / 10 for j in range(8) for i in range(-5, 6, 1)]
    # pitches = [i / 10 for i in range(-5, 3, 1) for j in range(11)]
    # rolls = [0] * len(yaws)
    # sc.move_head_in_points(yaws[:2], pitches[:2], rolls[:2])