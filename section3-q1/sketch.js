// 練習問題「心臓の鼓動のように大きくなったり小さくなったりする円」
let x;
let y;
let count;
let cycle;

function setup(){
  createCanvas(windowWidth, windowHeight);
  x=width/2
  y=height/2
  count=0;
  cycle=100;
}

function windowResized(){
  resizedCanvas(windowWidth,windowHeight);
}

function draw(){
  background(160, 192, 255);
  count=(count+2)%cycle;
  console.log(count);
  // BLANK[1]
  let size=count+100;
  ellipse(x, y, size);
  if(keyIsDown(ENTER)){
    count=(count+5)%cycle;
  }
}
