var socket = io();

function setup(){
  createCanvas(500, 500);
}

function draw(){
  this.socket.on('newPositions', function(data){
    background(0);
    for(var i = 0; i < data.length; i++){
      fill(255);
      stroke(255, 0 ,0);
      rect(data[i].x, data[i].y, 100, 100);
    }
  });
}
