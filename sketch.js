var black,white,green,purple,blue,yellow;

function setup() {
  createCanvas(600,400);

  white=createSprite(300, 200, 60, 100);
  black=createSprite(200, 300, 80, 50);
  purple=createSprite(100,100,100,60);
  blue=createSprite(100,300,50,40);
  green=createSprite(500,100,50,40);
  yellow=createSprite(500,300,90,50);

  black.shapeColor="black";
  white.shapeColor="white";
  purple.shapeColor="purple";
  blue.shapeColor="blue";
  green.shapeColor="green";
  yellow.shapeColor="yellow";

  black.debug=true;
  white.debug=true;
  purple.debug=true;
  blue.debug=true;
  green.debug=true;
  yellow.debug=true;
 
}

function draw() {
  background("lightblue");

  black.y=mouseY
  black.x=mouseX;
 
  if(Itouch(black,yellow)){
    black.shapeColor="red";
    purple.shapeColor="red";
  }
  else{
    black.shapeColor="black";
    purple.shapeColor="purple";
  }

  drawSprites();
}

function Itouch(a,b){
  if(a.x-b.x<a.width/2+b.width/2 &&
    b.x-a.x<a.width/2+b.width/2
    && a.y-b.y<a.height/2+b.height/2 &&
    b.y-a.y<a.height/2+b.height/2){
    return true;
  }
  else{
    return false;
  }
}




