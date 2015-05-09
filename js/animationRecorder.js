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
		console.log("starting recording");
		recordIntv = setInterval(recordMotion, intervalDuration);
	};

	publicAPI.stopRecording = function() {
		console.log("stopping recording");
		clearInterval(recordIntv);
	};

	publicAPI.playRecording = function() {
		console.log("playing recording");
		// playIdx = 0;
		playIntv = setInterval(playMotion, intervalDuration);
	};

	publicAPI.stopPlayback = function() {
		console.log("stopping playback");
		clearInterval(playIntv);
	};

	// private methods

	function recordMotion () {
		console.log("adding motion point");
		motion.push(motionTarget.transform().localMatrix);
		console.log (motion[motion.length-1]);
	}

	function playMotion () {
		console.log("playMotion: " + motion[playIdx]);
		motionTarget.transform(motion[playIdx]);
		playIdx ++;
		if (playIdx > motion.length) {
			clearInterval(playIntv);
			playIdx = 0;
		}
	}

	return publicAPI;
})();