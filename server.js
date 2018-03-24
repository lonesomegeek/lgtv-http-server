var express = require('express')
var app = express()
var bodyParser = require('body-parser');
var fs = require('fs');

try {
  var CONFIG = require('./config')
} catch (e) {
  fs.writeFile("config.json", '{"lgtvip" : "0.0.0.0", "lgtvmac" : "00:00:00:00:00:00"}', function(err) {
    if(err) {
      return console.log(err);
    }
    console.log("Config file created");
  });
} finally {
  console.log(CONFIG);
}

app.use(bodyParser.json()); // for parsing application/json
app.use(bodyParser.urlencoded({ extended: true })); // for parsing application/x-www-form-urlencoded

app.use(express.static('public'))

app.get('/', function(req, res, next) {
  res.type('html').sendFile(__dirname + '/index.html');
});

app.use('/apps', require('./apis/apps'));
app.use('/description', require('./apis/description'));
app.use('/tv', require('./apis/input-tv'));
app.use('/input', require('./apis/change-input'));
app.use('/app', require('./apis/change-app'));
app.use('/volume', require('./apis/change-volume'));
app.use('/alert', require('./apis/alert'));
app.use('/off', require('./apis/turn-off'));
app.use('/on', require('./apis/turn-on'));
app.use('/youtube', require('./apis/open-youtube'));
app.use('/browser', require('./apis/open-browser'));
app.use('/play', require('./apis/play'));
app.use('/pause', require('./apis/pause'));
app.use('/stop', require('./apis/stop'));
app.use('/mediastop', require('./apis/media-stop'));
app.use('/mediaplay', require('./apis/media-play'));
app.use('/mediapause', require('./apis/media-pause'));
app.use('/channeldown', require('./apis/channel-down'));
app.use('/channelup', require('./apis/channel-up'));
app.use('/mute', require('./apis/mute'));
app.use('/status', require('./apis/status'));
app.use('/volumedown', require('./apis/volume-down'));
app.use('/volumeup', require('./apis/volume-up'));

app.listen(5555, function () {
  console.log('LGTV http server is up in http://localhost:5555')
})
