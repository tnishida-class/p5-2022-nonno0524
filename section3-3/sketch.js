// テキスト「キーボード操作に反応する」
let x, y, vx, vy;
const g=10;
const vyMax=15

function setup(){
  createCanvas(windowWidth, windowHeight);
  x = 0;
  y = height;
}

function draw(){
  background(160, 192, 255);
  ellipse(x, y, 50);
  vy+=g;
  y+=vy;
  vy=constrain(vy,-vyMax,vyMax);
  if(y>height){
    y=height
  }
  if(keyIsDown(LEFT_ARROW)){ x -= 5; }
  if(keyIsDown(RIGHT_ARROW)){ x += 5; }
  if(keyIsDown(UP_ARROW)){ y -= 5; }
  if(keyIsDown(DOWN_ARROW)){ y += 5; }
  if(keyIsDown("A".charCodeAt(0))){ x-= 10; }
  if(keyIsDown(" ".charCodeAt(0))){ y-=15;}
  //if(keyIsDown("W".charCodeAt(0))){y-=10}
  if(keyIsDown("D".charCodeAt(0))){x+=10}
  //dif(keyIsDown("S".charCodeAt(0))){y+=10}
}

function keyPressed(){
  if(keyIsDown("R".charCodeAt(0))){
    x = 0;
    y = height;
    vy=0;
  }
  //if(key==" "){y-=15}
}

// イベントハンドラを使用するパターン
//function keyPressed(){
  //if(keyCode == LEFT_ARROW){ x -= 5; }
   //else if(keyCode == RIGHT_ARROW){ x+= 5; }
   //else if(keyCode == DOWN_ARROW){ y += 5; }
   //else if(keyCode == UP_ARROW){ y -= 5; }
   //else if(key == "A"){ x += 10; }
//w }

function windowResized(){
  resizeCanvas(windowWidth, windowHeight);
}
