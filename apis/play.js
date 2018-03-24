lgtv = require("lgtv");
var express = require('express');
var router = express.Router();
var request = require('request');
var wol = require('node-wol');
var CONFIG = require('../config')

var play = function(res) {
        lgtv.connect(CONFIG.lgtvip, function(err, response){
          if (!err) {
            lgtv.input_play(function(err, response){
              if (!err) {
	          res.send('success: ' + JSON.stringify(response))
	          return
	        } else {
		  res.send('failure: ' + JSON.stringify(response))
		}
            });
          }
        });
};

router.get('/', function (req, res) {
  play(res)
});

module.exports = router;
