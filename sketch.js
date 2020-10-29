
var monkeyImg , monkey_running
var banana ,bananaImage, obstacleImage
var FoodGroup, obstacleGroup
var score;
var bananaGroup, ground;
var survivalTime = 0;

function preload(){
  
  
  monkey_running =            loadAnimation("sprite_0.png","sprite_1.png","sprite_2.png","sprite_3.png","sprite_4.png","sprite_5.png","sprite_6.png","sprite_7.png","sprite_8.png")
  
  bananaImage = loadImage("banana.png");
  obstacleImage = loadImage("obstacle.png");
  
  monkeyImg = loadImage("sprite_0.png")
}



function setup() {
  createCanvas(400,400);
  monkey = createSprite(80,315,20,20);
  monkey.addImage(monkeyImg);

  monkey.scale = 0.1;
  
  ground = createSprite(400,350,900,10);
  ground.velocityX = -4;
  
  bananaGroup = new Group();
  obstacleGroup = new Group();
  
}


function draw() {
  monkey.collide(ground);
  background("White");
  stroke("White");
  textSize(20);
  fill("White");
  text("Score: " + score,500,50);
  
  stroke("Black");
  textSize(20);
  fill("Black");
  survivalTime = Math.ceil(frameCount/frameRate());
  text("Survival Time: " + survivalTime,100,50);
  if(keyDown("space") && monkey.y >= 314.3) {
    monkey.velocityY = -5;
  }
  if(ground.x < 0) {
    ground.x = ground.width/2;
  }
  
  monkey.velocityY = monkey.velocityY + 0.5;
  
  food();
  obstacles();
  drawSprites();
}
        
        
function food() {

  if(frameCount % 80 === 0) {
    banana = createSprite(200,Math.round(random(120,200)),20,20);
    banana.addImage(bananaImage);
    banana.scale = 0.1;
    bananaGroup.add(banana);
    banana.lifeTime = 200;
    banana.velocityX = -5;
  }
}       

function obstacles() {
  if(frameCount % 300 === 0) {
    obstacle = createSprite(200,Math.round(random(120,200)),20,20);
    obstacle.addImage(obstacleImage);
    obstacle.scale = 0.1;
    obstacle.lifeTime = 200;
    obstacle.velocityX = -5;
    obstacleGroup.add(obstacle);
  }
}  






