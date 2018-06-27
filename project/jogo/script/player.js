function Player(x, y, name){
  this.x = x;
  this.y = y;
  this.name = name;
  this.id = Math.floor(100000000 + Math.random() * 900000000);

  this.render = function(){
    fill(0);
    stroke(244);
    rect(this.x, this.y, 100, 100);
  }

  this.update = function(){
    this.move();
  }

  this.move = function(){
    if(keyIsDown(LEFT_ARROW)){
      this.x--;
    }
    if(keyIsDown(RIGHT_ARROW)){
      this.x++;
    }
    if(keyIsDown(UP_ARROW)){
      this.y--;
    }
    if(keyIsDown(DOWN_ARROW)){
      this.y++;
    }
  }

  this.getX = function(){
    return this.x;
  }

  this.getY = function(){
    return this.y;
  }

  this.getName = function(){
    return this.name;
  }

  this.getID = function(){
    return this.id;
  }



}
