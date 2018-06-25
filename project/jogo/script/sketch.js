function setup(){
  createCanvas(1000, 1000);
}

function draw(){
  background(255, 0, 0);
  fill(0, 255, 0);
  stroke(0, 0, 255);
  ellipse(mouseX, mouseY, 10, 10);
  console.log(''+ mouseX + ' ' +  mouseY);
}
