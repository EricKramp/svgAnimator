"use strict";

var AnimationRecorder = (function() {
	var publicAPI = {},
	motion = [],
	motionTarget,
	interval;

	publicAPI.record = function(obj) {
		console.log("starting recording");
		motionTarget = obj;
		interval = setInterval(recordMotion, 50);
	};

	publicAPI.stopRecording = function() {
		console.log("stopping recording");
		clearInterval(interval);
	};

	// private methods

	function recordMotion () {
		console.log("adding motion point");
		// motion.push(motionTarget.transform);
	}

	return publicAPI;
})();