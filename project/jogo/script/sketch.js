var player;

function setup(){
  createCanvas(500, 500);
  this.player = new Player(100, 100, "joel");
}

function draw(){
  background(0);
  this.player.render();
  this.player.update();
  setDataToHTML();
}

function setDataToHTML(){
  document.getElementById('x').innerHTML = "X: " + this.player.getX();
  document.getElementById('y').innerHTML = "Y: " + this.player.getY();
  document.getElementById('name').innerHTML = "Name: " + this.player.getName();
  document.getElementById('id').innerHTML = "ID: " + this.player.getID();
}
