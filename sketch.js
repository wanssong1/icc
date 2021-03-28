let sz=[];
let N,i;

function setup() {
  createCanvas(windowWidth, windowHeight);
  background(0);
  frameRate(5);
}

function draw() {
  strokeWeight(1);
  stroke(87); 
  noFill();
  
  let dfx=random(0,width);
  let dfy=random(0,height);
  let dfsz=random(100,250);
  let dfgap=random(5,200);
  
  ellipse(dfx,dfy,dfsz,dfsz);
  ellipse(dfx,dfy,dfsz+dfgap,dfsz+dfgap);
  
  noStroke();
  fill(0,20);
  rect(0,0,width,height);
  
  if (mouseIsPressed){ 
    N=random(1,3);
    sz=new float(N+3) ;
    
    sz[0]=random(10,300);
    
    for (i=0; i<N+2;i=i+1){
      noStroke();
      fill(0,10);
      rect(0,0,width,height);
      
      noFill();
      stroke(209);
      strokeWeight(2);
      
      ellipse(mouseX,mouseY,sz[i],sz[i]);
      sz[i+1]=random(sz[0],width/2);
    }   
  } 
}

function keyPressed(){
  if (key==TAB){  
    noLoop();
  }
  
  else if (key=='q'){    
    loop();
  }
}