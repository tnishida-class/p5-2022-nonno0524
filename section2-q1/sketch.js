// 小手調べ
function setup(){
  createCanvas(300,300);
  for(let i=0; i<10; i++){
    let x=(i+1)*10
    noFill(255);
    if(i>4){
      stroke(255,0,0);
    }
    else{
      stroke(0,0,255);
    }
    ellipse(60,60,x);
    }
  }
    // BLANK[1]