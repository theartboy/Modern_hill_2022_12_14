let b1;
let p;
let mx;
function setup() {
  createCanvas(400, 400);
  b1 = new Box(0,200,800,200,0);
  p = new Player(200,180,20,20,0,0);
  mx = 0;

}

function draw() {
  background(220);
  b1.update();
  b1.display();
  p.update();
  p.display();
  fill(0);
  // rect(100,100,100,100);
  text("mx "+mx,200,20);
}
function touchStarted(){
  p.jump();
  mx = mouseX;
  return false;
}
class Player{
  constructor(sx,sy,sw,sh,vx,vy){
    this.x = sx;
    this.y = sy;
    this.w = sw;
    this.h = sh;
    this.vx = vx
    this.vy = vy;
    this.gravity = 0.3;
    this.jumpForce = -10;
    this.isOnGround = true;
  }
  update(){
    this.x += this.vx;
    // if(!this.isOnGround){
      this.vy += this.gravity;
      this.y = max(0,min(this.y+this.vy,180))
    // }
    if(this.y==180){this.isOnGround = true;}
  }
  jump(){
    if(this.isOnGround){
      this.vy=this.jumpForce;
      this.isOnGround = false;
    }
    
  }
  display(){
    fill(255,255,0);
    rect(this.x,this.y,this.w,this.h);
  }
  
}
class Box{
  constructor(sx,sy,sw,sh,vx){
    this.x = sx;
    this.y = sy;
    this.w = sw;
    this.h = sh;
    this.vx = vx
  }
  update(){
    this.x += this.vx;
  }
  display(){
    fill(255,0,0);
    rect(this.x,this.y,this.w,this.h);
  }
  
}