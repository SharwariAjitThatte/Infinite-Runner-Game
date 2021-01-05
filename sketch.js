var back,backImage;
var player,playerImage;
var obstacleImage,obstacle;
var cloudsImage,clouds;
var ground;
var stone,stoneImage;
var score = 0;
var cloudsGroup,obstaclesGroup;

function preload(){
  
  backImage = loadImage("ground.png");
  playerImage = loadImage("player.png");
  obstacleImage = loadImage("obstacle.jpg");
  cloudsImage = loadImage("clouds.jpg");
  stoneImage = loadImage("stone.png");
   
}

function setup(){
  
  createCanvas(400,400);
  
  back = createSprite(200,440,30,30);
  back.addImage("mobile",backImage);
  back.velocityX = -4;
  
  player = createSprite(50,325,30,30);
  player.addImage("pen",playerImage);
  player.scale = 0.4;
   
  ground = createSprite(200,375,400,10);
  ground.visible = false;
  
  cloudsGroup = new Group();
  obstaclesGroup = new Group();
    
}

function draw(){
  
  background("lightblue");
  
 if( back.x < 0 ){
  back.x = back.width / 2;
 }

if(keyDown("space") && player.y >= 100 ){  
  player.velocityY = -15;
 }
  
  player.velocityY = player.velocityY + 0.8;
 
  player.collide(ground);
     
  fill("black");
  textSize(20);
  text("score:" + score,300,100,30,30);
  
  score = score + Math.round(getFrameRate()/60);
  
  back.velocityX = -(4 + 3* score / 100);
  
if(player.isTouching(obstcaclesGroup)){
  
  textMode(CENTER);
  text("PRESS R to RESTART",200,20030,30)
}
  
  
  
  spawnClouds();
  spawnObstacles();
  
  drawSprites();
}

function spawnObstacles(){
  
  if(frameCount % 100 === 0){
    
    obstacle = createSprite(200,320,20,20);
    obstacle.x = Math.round(random(400,450));
    obstacle.addImage("laptop",obstacleImage);
    obstacle.scale = 0.15;
    obstacle.velocityX = -4;
    obstacle.lifetime = 150;
    
    obstacle.velocityX = -(4 + 3* score / 100);
    
    obstaclesGroup.add(obstacle);
    
  }   
}

function spawnClouds(){
  
  if(frameCount % 70 === 0){
    
   clouds = createSprite(400,100,20,20);
   clouds.y = Math.round(random(10,60));
   clouds.velocityX = -4;   
   clouds.addImage("mobile",cloudsImage);
   clouds.scale = 0.08;
   clouds.lifetime = 150
    
   clouds.velocityX = -(4 + 3* score / 100);
    
    cloudsGroup.add(clouds);
  }  
}
