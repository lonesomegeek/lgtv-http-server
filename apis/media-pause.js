lgtv = require("lgtv");
var express = require('express');
var router = express.Router();
var request = require('request');
var wol = require('node-wol');
var CONFIG = require('../config')

var mediaPause = function(res) {
        lgtv.connect(CONFIG.lgtvip, function(err, response){
          if (!err) {
            lgtv.input_media_pause(function(err, response){
              if (!err) {
	        res.send('failue: ' + JSON.stringify(response))
                return
              } else {
		res.send('success: ' + JSON.stringify(response))
	      }
            });
          }
        });
};

router.get('/', function (req, res) {
  mediaPause(res)
});

module.exports = router;
