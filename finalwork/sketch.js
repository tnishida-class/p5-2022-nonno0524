// 最終課題を制作しよう

let x, y, cx, cy, vx, vy, t1, t2, t3, blocks1, blocks2;

function setup(){
  createCanvas(windowWidth, windowHeight);
  x = width/2-100;
  y = height-60;
  vx = random(-7,7);
  vy = 4;
  cx = width/2;
  cy = height/2 + 40;
  t1 = "You Dropped Out";
  t2 = "Press R to Readmit";
  t3 = "Entrance Exam";
  blocks1 =[]
  blocks2 = []
  for(let i = 0; i < 5; i++){
    blocks1.push(true);
  }
  for(let i = 0; i < 160; i++){
    blocks2.push(true);
  }
}

function draw(){
  background(160, 192, 255);
  fill(255);
  rect(x, y, 200, 10);
  ellipse(cx, cy, 20);
  cx += vx;
  cy += vy;
  if((cx < 10) || (cx > width - 20)){ vx = -1 * vx; }
  if(cy < 10){ vy = -1 * vy; }
  if(cy > y - 10 && cy < y + 10 && cx > x && cx < x + 200){
    vy = -1.05*vy;
    vx = 1.05*vx;
  }
  cx = constrain(cx, 10, width - 10);
  cy = constrain(cy, 10, height + 11);
  fill(0);
  text("緑色のブロックは新たな知見だよ！", width-300, height-50);
  text("たくさん集めて卒業しよう！", width-300, height-30);
  Block1();
  Block2();
  GAMEOVER();
}

function mouseMoved(){
  x = constrain(mouseX - 100, 0, width - 200);
  y = height-60;
}

function Block1(){
  for(let i = 0; i < blocks1.length; i++){
    if(blocks1[i] === true){
    fill(255);
    rect(i*300+40, height/2 - 20, 250, 20);
    textSize(12);
    fill(255,0,0);
    text(t3, i*300 + 165 - textWidth(t3)/2, height/2 - 6);
      if(cy < height/2+10 && cy > height/2-30 && cx > i*300+40 && cx < i*300 + 290){
        vy = -1*vy
        blocks1[i] = false;
        if(((cx > i*300+40) && (cy < height/2) && (cy > height/2)) || ((cx < i*300+40) && (cy < height/2) && (cy > height/2))){
          vx = -1*vx;
          blocks1[i] = false;
        }
      }
    }
  }
}//一番下のブロック

function Block2(){
  for(let i = 0; i < blocks2.length; i++){
    let rx = 67*(i%20)+100;
    let ry = 40*floor(i/20)+20;
    if(blocks2[i] === true){
      fill(150,255,156);
      rect(rx, ry, 40, 20);
      if((cy < ry + 30) && cy > ry - 10 && (cx > rx)  && (cx < rx + 40)){
        vy = -1*vy;
        blocks2[i] = false
      }
    }
  }
}//二番目以降のブロック

function GAMEOVER(){
  if(cy > height + 10){
    background(160, 192, 255);
    vx = 0;
    vy = 0;
    textSize(40);
    fill(0);
    text(t1, width/2 - textWidth(t1)/2, height/2);
    fill(255,0,0);
    textSize(20);
    text(t2, width/2 - textWidth(t2)/2, height/2 + 50);
    if(keyIsDown("R".charCodeAt(0))){
      setup();
    }
  }//ゲームオーバーの画面
}

function windowResized(){
  resizeCanvas(windowWidth, windowHeight);
}