var pos;
var vel;
var img;
var renderBox;

function Dino(posX, posY) {
    this.pos = createVector(posX, posY);
    this.vel = createVector(0, -10);
    this.texture = loadImage("dino.png");
    this.renderBox = new Box();

  this.render = function() {
    fill(187);
    image(this.img, this.pos.x, this.pos.y, 50, 50);
  }

  this.jump = function() {
    this.pos.y += this.vel.y;
  }

  this.getPos = function() {
    return this.pos;
  }
}
