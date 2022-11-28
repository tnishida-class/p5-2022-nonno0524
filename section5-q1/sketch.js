// 練習問題：吹き出し
// 吹き出しの位置、背景色 etc. を関数 balloon の引数で指定できるようにしてみよう
// 吹き出しにしっぽを付けてみよう
function setup(){
  createCanvas(400, 400);
  background(255);
  balloon("I love Winnie the Pooh.", 128, 200, 128, width/2, height/2, 370, 250);
}

function balloon(t, c1, c2, c3, x, y, xt, yt){
  let w = textWidth(t);
  let h = textAscent() + textDescent();
  let p = 5;
  fill(c1,c2,c3)
  rect(x, y, w + p * 2, h + p * 2);
  fill(0);
  text(t, x + p, y + p * 4);
  fill(c1,c2,c3)
  triangle(x + w, y + h + p * 2, x + w + p * 2, y + h + p * 2, xt, yt)
  strokeWeight(1.1)
  stroke(c1,c2,c3)
  line(x + w + p * 2 - 1, y + h + p * 2, x + w + 2, y + h + p * 2)
}
