// 最終課題を制作しよう

let x, y, cx, cy, vx, vy;

function setup(){
  createCanvas(windowWidth, windowHeight);
  x = width/2-100;
  y = height-30;
  vx = 2
  vy = 3;
  cx = width/2
  cy = height/2

}
  
function draw(){
  background(160, 192, 255);
  text("大学に入っていろいろなものを手に入れよう！", width/2 - 100, height/2);
  rect(x, y, 200, 10);
  ellipse(cx, cy, 20);
  cx += vx;
  cy += vy;
  if(cx < 10 || cx > width - 20){ vx = -1 * vx; }
  if(cy < 10){ vy = -1 * vy; }
  if(cy > y - 10 && cx > x && cx < x + 200){vy = -1.05*vy}
  if(cy > height + 10){
    vx = 0
    vy = 0
    text("You dropped out.", width/2 - 20, height/2)
    text("Press R to readmit", width/2 - 20, height/2 + 20)
    if(keyIsDown("R".charCodeAt(0))){
      vx = 2;
      vy = 2;
      cx = width/2
      cy = height/2
    }
  }
}

  function mouseMoved(){
  x = mouseX-100;
  y = height-30;
}

function windowResized(){
  resizeCanvas(windowWidth, windowHeight);
}
