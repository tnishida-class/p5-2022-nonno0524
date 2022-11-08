// 最終課題を制作しよう

let x, y, cx, cy, vx, vy;

function setup(){
  createCanvas(windowWidth, windowHeight);
  x = width/2-100;
  y = height-30;
  cx = width/2;
  cy = height/2;
  vx = 1
  vy = 2
}

function draw(){
  background(160, 192, 255);
  rect(x, y, 200, 10);
  ellipse(cx, cy, 20);
  cx += vx
  cy += vy
}

  function mouseMoved(){
  x = mouseX-100;
  y = height-30;
}

function windowResized(){
  resizeCanvas(windowWidth, windowHeight);
}
