var groundHeight;
var started = false;
var debug = true;
var world;
var lose;


function setup(){
  createCanvas(600, 200);
  this.world = new World();
  this.groundHeight = height - 70;
}

function draw(){
  background(255);
  this.startGame();
  this.world.getDino().render();
  if (this.started && !this.lose()) {
    this.world.render();
    this.world.update();
  }
  if (this.lose) {
    fill(0);
    text("YOU LOSE!!!!!!", width/2, height/2);
  }
}

function keyPressed() {
  if (key == ' ') {
    this.world.getDino().jump();
  }
  if (key == 'd') {
    this.debug = true;
  }
  if (key =='r') {
    this.lose = false;
  }
}

function lose() {
  return lose;
}

function startGame() {
  var startPoint = 100;
  if (this.world.getDino().getPos().x < startPoint) {
    this.world.getDino().getPos().x += 2;
  } else {
    this.started = true;
  }
}
