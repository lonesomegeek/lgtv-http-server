lgtv = require("lgtv");
var express = require('express');
var router = express.Router();
var request = require('request');
var CONFIG = require('../config')

router.get('/', function (req, res) {
  res.send(
	'Usage: <br>' +
	'/tv <br>' +
	'/input/{HDMI_1} <br>' +
	'/app/{netflix} <br>' +
	'/apps <br>' +
	'/mute/{true} <br>' +
	'/togglemute <br>' +
	'/volume/{8} <br>' +
	'/alert/{textToShow} <br>' +
	'/off <br>' +
	'/on <br>' +
	'/youtube <br>' +
	'/browser/{url} <br>' +
	'/play <br>' +
	'/pause <br>' +
	'/stop <br>' +
	'/mediastop <br>' +
	'/mediaplay <br>' +
	'/mediapause <br>' +
	'/channeldown <br>' +
	'/channelup <br>'
	)
});

module.exports = router;
