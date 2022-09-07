var boat, boat_moving
var sea, seaImg

function preload(){
boat_moving = loadAnimation("ship-1.png","ship-2.png","ship-3.png","ship-4.png")
seaImg = loadImage("sea.png");
}

function setup(){
  createCanvas(400,400);
  //crear barco y oceano
  sea = createSprite(200,200,20,20)
sea.addImage(seaImg)
sea.scale = (0.3)

  ship = createSprite(100,150,50,50);
  ship.addAnimation("moving",boat_moving)
ship.scale = (0.3)





}

function draw() {
  background("blue");
 drawSprites();
 if (sea.x <0) {
   sea.x=sea.width/2;
 }
}