class Snake {

  constructor(){
    this.x = floor(w/2);
    this.y = floor(h/2);
    this.body = [];
    this.body[0] = createVector(this.x, this.y);
    this.xDir = 0;
    this.yDir = 0;
    this.len = 1;
  }

  update(){
    for (let i = 0; i < this.body.length - 1; i++) {
      this.body[i] = this.body[i + 1];
    }
    if (this.len >= 1) {
      this.body[this.len - 1] = createVector(this.x, this.y);
    }
    this.x += this.xDir;
    this.y += this.yDir; 
  }

  show(){
    for(let i = 0; i < this.body.length; i++){
      noStroke();
      fill(255);
      rect(this.body[i].x, this.body[i].y, 1, 1);
    }
    fill(255);
    rect(this.x, this.y, 1, 1);
  }

  death(){
    for (let i = 0; i < this.body.length; i++) {
      let pos = this.body[i];
      let d = dist(this.x, this.y, pos.x, pos.y);
      if (d < 1 || this.x > w || this.x < 0 || this.y > h || this.y < 0) {
        this.len = 0;
        this.body = [];
        setHiscore(score);
        score = 0;
        start = false;
        this.returnPos();
      }
    }
  }

  eat(pos){
    let d = dist(this.x, this.y, pos.x, pos.y);
    if (d < 1) {
      this.len++;
      return true;
    } else {
      return false;
    }
  }

  setDir(x, y){
    this.xDir = x;
    this.yDir = y;
  }

  returnPos(){
    this.x = floor(w/2);
    this.y = floor(h/2);
  }

  getBodyCount(){
    return this.len;
  }
}
