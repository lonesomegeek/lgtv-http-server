lgtv = require("lgtv");
var express = require('express');
var router = express.Router();
var request = require('request');
var wol = require('node-wol');
var CONFIG = require('../config')

var openBrowser = function(url, res) {
        console.log("Found TV at address running example.");
        lgtv.connect(CONFIG.lgtvip, function(err, response){
          if (!err) {
            lgtv.open_browser_at(url, function(err, response){
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

router.get('/:url', function (req, res) {
  var utl = req.params.url;
  openBrowser(url, res)
});

module.exports = router;
