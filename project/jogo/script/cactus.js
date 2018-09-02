var w;
var h;
var pos;
var vel;
var img;
var renderBox;

function Cactus(posX, posY) {
    this.w = 30;
    this.h = 40;
    this.pos = new PVector(posX, posY);
    this.vel = new PVector(-10, 0);
    this.texture = loadImage("cactu.png");
    this.renderBox = new Box();

  this.render = function() {
    fill(187);
    image(this.img, this.pos.x, this.pos.y, 30, 40);
  }

  this.moveLeft = function() {
    this.pos.x += this.vel.x;
  }

  this.isOut = function() {
    if (this.pos.x + this.w < 0) {
      return true;
    } else {
      return false;
    }
  }

  this.getPos = function() {
    return this.pos;
  }

  this.getWidth = function() {
    return this.w;
  }

  this.getHeight  = function() {
    return this.h;
  }
}
