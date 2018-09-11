let snake;
let res = 20;
let food;
let w;
let h;
let canvas;

//Game variables
let score = 0;
let hiscore = 0;
let start = false;

//gui
let scoreText;

function windowResized(){
  resizeCanvas(windowWidth, windowHeight);
}

function setup() {
  //SetCanvas
  canvas = createCanvas(windowWidth, windowHeight);
  canvas.position(0, 0);
  canvas.style('z-index', '-1');

  //Game settings
  frameRate(10);
  w = floor(width/res);
  h = floor(height/res);
  pickLocation();
  
  //Init
  snake = new Snake();
  scoreText = new MSText("ola", 100, 100);
}

function pickLocation() {
  let x = floor(random(w));
  let y = floor(random(h));
  food = createVector(x, y);
}

function draw() {
  scale(res);
  background(51);
  this.setSpeedByTailCount();

  scoreText.show();

  snake.show();

  if(start){
    if (snake.eat(food)) {
      pickLocation();
      score++;
    }
    snake.death();
    snake.update();
  }
   
  noStroke();
  fill(255, 0, 100);
  rect(food.x, food.y, 1, 1);
}

function keyPressed() {
  switch(keyCode){
    case UP_ARROW:
      snake.setDir(0, -1);
      //socket.emit("UP_ARROW", {newX : snake.x, newY: snake.y});
    break;
    case DOWN_ARROW:
      snake.setDir(0, 1);
      //socket.emit("DOWN_ARROW", {newX : snake.x, newY: snake.y});
    break;
    case LEFT_ARROW:
      snake.setDir(-1, 0);
      //socket.emit("RIGHT_ARROW", {newX : snake.x, newY: snake.y});
    break;
    case RIGHT_ARROW:
      snake.setDir(1, 0);
      //socket.emit("LEFT_ARROW", {newX : snake.x, newY: snake.y});
    break;
    case 32:
      start = true;
    break;
  }
}

function setSpeedByTailCount(){
  let currentCount = snake.getBodyCount();
  if(currentCount > 10){
    frameRate(15);
  } else if(currentCount > 20){
    frameRate(20);
  }
  frameRate(10);
}

function setHiscore(finalScore){
  if(finalScore > hiscore){
    hiscore = finalScore;
  }
}
