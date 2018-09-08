var snk;
var scl = 20;
var food;
var score = 0;
//var playText;
var canvas;
var start = false;
var cc;
var scoreText;

function windowResized(){
  resizeCanvas(windowWidth, windowHeight);
}

function setup() {
  canvas = createCanvas(windowWidth, windowHeight);
  canvas.position(0, 0);
  canvas.style('z-index', '-1');
  snk = new Snake(0, 0);
  frameRate(10);
  pickLocation();
  this.generateRandomColor();
  scoreText = createElement('h1', '');
  scoreText.style('color', '#ffffff');
  scoreText.style('margin-right', '200px');
}

function pickLocation() {
  var cols = floor(width/scl);
  var rows = floor(height/scl);
  food = createVector(floor(random(cols)), floor(random(rows)));
  food.mult(scl);
}

function draw() {
  background(cc);
  scoreText.html('Score: ' + score);
  this.setSpeedByTailCount();
  if(!start){
  } else {
    if (snk.eat(food)) {
      pickLocation();
      increaseScoreWhenEat();
      this.generateRandomColor();
    }
    snk.death();
    snk.update();
    snk.show();
    fill(255, 0, 100);
    rect(food.x, food.y, scl, scl);
  }
}

function keyPressed() {
  if (keyCode === UP_ARROW) {
    snk.dir(0, -1);
    socket.emit("UP_ARROW", {newX : snk.x, newY: snk.y});
  } else if (keyCode === DOWN_ARROW) {
    snk.dir(0, 1);
    socket.emit("DOWN_ARROW", {newX : snk.x, newY: snk.y});
  } else if (keyCode === RIGHT_ARROW) {
    snk.dir(1, 0);
    socket.emit("RIGHT_ARROW", {newX : snk.x, newY: snk.y});
  } else if (keyCode === LEFT_ARROW) {
    snk.dir(-1, 0);
    socket.emit("LEFT_ARROW", {newX : snk.x, newY: snk.y});
  } else if(keyCode === 32) {
    start = true;
  }
}

function increaseScoreWhenEat(){
  score++;
}

function generateRandomColor(){
  var c = color(random(0, 255),random(0, 255),random(0,255));
  this.cc = c;
  return c;
}

function setSpeedByTailCount(){
  if(snk != null){
    var currentCount = snk.getTailCount();
  } else {
    return;
  }
  if(currentCount > 10){
    frameRate(15);
  } else if(currentCount > 20){
    frameRate(20);
  }
  frameRate(10);
}
