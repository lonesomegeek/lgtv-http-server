lgtv = require("lgtv");
var express = require('express');
var router = express.Router();
var request = require('request');
var wol = require('node-wol');
var CONFIG = require('../config')

var mediaStop = function(res) {
        console.log("Found TV at address running example.");
        lgtv.connect(CONFIG.lgtvip, function(err, response){
          if (!err) {
            lgtv.input_media_stop(function(err, response){
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
  mediaStop(res)
});

module.exports = router;
