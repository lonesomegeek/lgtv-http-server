var lgtv = require("lgtv");
var express = require('express');
var router = express.Router();
var request = require('request');
var CONFIG = require('../config')

var changeInput = function(input, res) {
  lgtv.connect(CONFIG.lgtvip, function(err, response){
    if (!err) {
      lgtv.set_input(input, function(err, response){
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

router.get('/:input', function (req, res) {
  var input = req.params.input;
  changeInput(input, res);
});

module.exports = router;
