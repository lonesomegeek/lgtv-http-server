var lgtv = require("../lgtv");
var express = require('express');
var router = express.Router();
var request = require('request');
var CONFIG = require('../config')

var changeVolume = function(volume, res) {
  lgtv.connect(CONFIG.lgtvip, function(err, response){
    if (!err) {
      lgtv.set_volume(volume, function(err, response){
        if (!err) {
          res.send('success')
          return
        } else {
	  res.send('failure')
	}
      });
    }
  });
};

router.get('/:volume', function (req, res) {
  var volume = Number(req.params.volume);
  if (volume > 99) {
    res.send('failue')
  } else {
    changeVolume(volume, res);
  }
});


module.exports = router;
