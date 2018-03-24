var lgtv = require("lgtv");
var express = require('express');
var router = express.Router();
var request = require('request');
var CONFIG = require('../config')

var changeApp = function(appid, res) {
  lgtv.connect(CONFIG.lgtvip, function(err, response){
    if (!err) {
      lgtv.start_app(appid, function(err, response){
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

router.get('/:appid', function (req, res) {
  var appid = req.params.appid;
  changeApp(appid, res);
});

module.exports = router;
