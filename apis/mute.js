var lgtv = require("lgtv");
var express = require('express');
var router = express.Router();
var request = require('request');
var CONFIG = require('../config')

var changeMute = function(value, res) {
  var isTrueSet = (value === 'true' || value === '1');
  lgtv.connect(CONFIG.lgtvip, function(err, response){
    if (!err) {
      lgtv.set_mute(isTrueSet, function(err, response){
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

router.get('/:value', function (req, res) {
  var value = req.params.value;
  changeMute(value, res);
});

module.exports = router;
