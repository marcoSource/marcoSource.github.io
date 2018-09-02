function Box(){

  this.renderBox = function(x, y, w, h){
    noFill();
    stroke(255,0,0);
    rect(x,y,w,h);
  }

  this.collideBox = function(dino, cactus){
    if(dino.getPos().x >= cactus.getPos().x && dino.getPos().x <= cactus.getPos().x + cactus.getWidth() && dino.getPos().y >= cactus.getPos().y && dino.getPos().y <= cactus.getPos().y + cactus.getHeight()){
      return true;
    } else {
      return false;
    }
  }
}
