function setup() {
  createCanvas(128,128);
}

function draw() {
  background(0);
  strokeWeight(4);
  fill(178, 100, 162);
  triangle(12,120,80,120,120,48);
  fill(94, 185, 84);
  triangle(0,108,155,108,65,0);
  fill(255);
  textSize(32);
  textFont("serif");
  text("91", 68, 100);
}
