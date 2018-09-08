var express = require('express');
var app = express();
var server = require('http').createServer(app);
var io = require('socket.io')(server);

app.use(express.static(__dirname + '/client'));
app.get('/', function(req, res,next) {
    res.sendFile(__dirname + '/index.html');
});

server.listen(3000);
console.log('Server started');

var SOCKET_LIST = {};
var PLAYER_LIST = {};

var Player = function(id){
  var self = {
    x: 0,
    y: 0,
    id: id
  }
  return self;
};

io.sockets.on('connection', function(socket){
  socket.id = Math.random();
  SOCKET_LIST[socket.id] = socket;

  var player = Player(socket.id);
  PLAYER_LIST[socket.id] = player;

  socket.on('disconnect', function(){
    delete SOCKET_LIST[socket.id];
    delete PLAYER_LIST[socket.id];
  });

  socket.on('UP_ARROW', function(data){
    player.x = data.x;
    player.y = data.y;
  });

  socket.on('DOWN_ARROW', function(data){
    player.x = data.x;
    player.y = data.y;
  });
});

setInterval(function(){
  var pack = [];

  for(var i in PLAYER_LIST){
    var player = PLAYER_LIST[i];
    pack.push({
      x: player.x,
      y: player.y
    });
  }
  for(var i in SOCKET_LIST){
    var socket = SOCKET_LIST[i];
    socket.emit('newPlayer', pack);
  }
}, 1000/25);
