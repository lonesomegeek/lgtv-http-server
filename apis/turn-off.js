var lgtv = require("lgtv");
var express = require('express');
var router = express.Router();
var request = require('request');
var CONFIG = require('../config')

var turnOff = function(res) {
  lgtv.connect(CONFIG.lgtvip, function(err, response){
    lgtv.turn_off(function(err, response){
      if (!err) {
	          res.send('success')
	          return
	        } else {
		  res.send('failure')
		}
    });
  });
};

router.get('/', function (req, res) {
  turnOff(res)
});

module.exports = router;
