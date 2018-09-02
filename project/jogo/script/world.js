var dino;
var cactus = [];
var time = 100;
var timer;
var _box;

function World() {
  this.dino = new Dino(10, height - 70);
  this._box = new Box();

  this.render = function() {
    for (var cactu in this.cactus) {
      cactu.render();
      if (this._box.collideBox(this.dino, this.cactu)) {
        fill(0);
        text("You Lose!!!", width/2, height/2);
      }
    }
  }

  this.update = function() {
    if (this.timer < this.time) {
      this.timer++;
    } else if (this.timer >= this.time) {
      this.timer = 0;
      this.cactus.add(new Cactus(width + 20, height - 70));
    }
    for (var cactu in this.cactus) {
      cactu.moveLeft();
    }
    for (var i = this.cactus.size() - 1; i >= 0; i--) {
      var temp = this.cactus.get(i);
      if (temp.isOut()
        || this._box.collideBox(this.dino, this.temp)) {
        this.cactus.remove(temp);
        this.lose = true;
      }
    }
    applyGravity();
  }

  this.applyGravity = function() {
    if (this.dino.getPos().y < height - 70) {
      this.dino.getPos().y++;
    }
  }

  this.getDino = function(){
    return this.dino;
  }
}
