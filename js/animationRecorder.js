"use strict";

var AnimationRecorder = (function() {
	var publicAPI = {},
	motion = [],
	motionTarget,
	recordIntv,
	playIntv,
	playIdx = 0,
	intervalDuration = 50;

	publicAPI.setTarget = function (obj) {
		motionTarget = obj;
	};

	publicAPI.record = function() {
		recordIntv = setInterval(recordMotion, intervalDuration);
	};

	publicAPI.stopRecording = function() {
		clearInterval(recordIntv);
	};

	publicAPI.playRecording = function() {
		playIntv = setInterval(playMotion, intervalDuration);
	};

	publicAPI.stopPlayback = function() {
		clearInterval(playIntv);
	};

	// private methods

	function recordMotion () {
		motion.push(motionTarget.transform().localMatrix);
	}

	function playMotion () {
		motionTarget.transform(motion[playIdx]);
		playIdx ++;
		if (playIdx > motion.length) {
			clearInterval(playIntv);
			playIdx = 0;
		}
	}

	return publicAPI;
})();