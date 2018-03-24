var lgtv = require("lgtv");
var express = require('express');
var router = express.Router();
var request = require('request');
var wol = require('node-wol');
var CONFIG = require('../config')

var turnOn = function(res) {
  wol.wake(CONFIG.lgtvmac, function(error) {
    if (!error) {
	          res.send('success')
	          return
	        } else {
		  res.send('failure')
		}
  });

};

router.get('/', function (req, res) {
  turnOn(res)
});

module.exports = router;
