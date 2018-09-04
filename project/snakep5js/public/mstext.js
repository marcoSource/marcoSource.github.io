function MSText(x, y){
  this.x = x;
  this.y = y;
  this.defaultSize = 16;
  this.defaultColor = color(255, 255, 255);
  this.alpha = 0;
  this.defaultColor = color(255, 255, 255, this.apha);

  this.show = function(str){
    fill(this.defaultColor, this.alpha);
    textSize(this.defaultSize);
    text(str, this.x, this.y)
  }

  this.setTextSize = function(size){
    this.defaultSize = size;
  }

  this.blink = function(b){
    if(b){
      if(this.alpha > 0){
        this.alpha -= .5;
      } if(this.alpha == 0){
        this.alpha = 255;
      }
    }
  }
}
