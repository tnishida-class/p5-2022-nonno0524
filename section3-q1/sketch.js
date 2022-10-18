// 練習問題「心臓の鼓動のように大きくなったり小さくなったりする円」
let x;
let y;
let z;

function setup(){
  createCanvas(windowWidth, windowHeight);
  x=width/2
  y=height/2
  z=height
}

function windowResized(){
  resizedCanvas(windowWidth,windowHeight);
}

function draw(){
  background(160, 192, 255);
  // BLANK[1]
  ellipse(x, y, z);
  z+=2
  if(z>height){
    z=-1*z
  }
    }
