var lgtv = require("lgtv");
var express = require('express');
var router = express.Router();
var request = require('request');
var CONFIG = require('../config')

var popAlert = function(alert, res) {
  lgtv.connect(CONFIG.lgtvip, function(err, response){
    if (!err) {
      lgtv.show_float(alert, function(err, response){
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

router.get('/:alert', function (req, res) {
  var alert = req.params.alert;
  popAlert(alert, res);
});

module.exports = router;
