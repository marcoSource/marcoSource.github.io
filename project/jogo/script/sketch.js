var players = [];

function setup(){
  var cnv = createCanvas(500, 500);
  cnv.position(width/2, height/2);
}

function draw(){
  background(0);
  if(this.players.length > -1){
    for(var i = 0; i < this.players.length; i++){
      var player = this.players[i];
      player.render();
      player.update();
      setDataToHTML();
    }
  }
}

function setDataToHTML(){
  for(var i = 0; i < this.players.length; i++){
    var player = this.players[i];
    document.getElementById('x').innerHTML = "X: " + player.getX();
    document.getElementById('y').innerHTML = "Y: " + player.getY();
    document.getElementById('name').innerHTML = "Name: " + player.getName();
    document.getElementById('id').innerHTML = "ID: " + player.getID();
  }
}

function addPlayer(name){
  this.players.push(new Player(random(10, 100), random(10, 100), document.getElementById('nameIn').value));
}
