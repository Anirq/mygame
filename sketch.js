var raghu,raghu_animation
var brick,castle
var ground,invisibleGround


function preload(){
  raghu_animation = loadAnimation("images/raghu1.png","images/raghu2.png","images/raghu3.png")
  castle = loadImage("images/castle.png")

}

function setup() {  
  createCanvas(1200,800);
  brick = createSprite(0,0,1200,800)
  brick.addImage("castle",castle)
  brick.scale = 2
  raghu = createSprite(400, 200, 50, 50);
  raghu.addAnimation("running",raghu_animation)

  ground = createSprite(500,322,800,20)
  //ground.visible = false
  ground.velocityX = -6
  ground.x = ground.width/2
}


function draw() {
   background(0)
  if(keyDown("space")){
    raghu.velocityY = -10
  }
  
  raghu.velocityY=raghu.velocityY + 0.8
  
  if(ground.x < 0){
    ground.x = ground.width/2
  }
  
  raghu.collide(ground) 
  drawSprites();
}