lgtv = require("lgtv");
var express = require('express');
var router = express.Router();
var request = require('request');
var CONFIG = require('../config')

router.get('/', function (req, res) {
  res.send(
	'Usage: <br>' +
	'/description <br>' +
	'/tv <br>' +
	'/tinput/HDMI_1 <br>' +
	'/volume <br>' +
	'/alert/textToShow <br>' +
	'/off <br>' +
	'/on <br>' +
	'/youtube <br>' +
	'/browser <br>' +
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
