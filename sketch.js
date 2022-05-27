var PLAY = 1;
var END = 0;
var gameState = PLAY

var bedroomImg, babyFrame, boyFrame, youngBoyFrame, adultFrame, oldFrame
var baby, boy, youngBoy, adult, old
// var clue, player(get image) 

var gameOver, restart;

function preload(){
 bedroomImg = loadImage("Level 1/Image/Bedroom Image.jpg");
 babyFrame = loadImage("Level 1/Frame/Baby Image Framed.JPG");
 boyFrame = loadImage("Level 1/Frame/Toddler Image Full body Frammed.JPG");
 youngBoyFrame = loadImage("Level 1/Frame/Young Boy Full Body IMage Frammed.JPG");
 adultFrame = loadImage("Level 1/Frame/adult Image framed.JPG");
 oldFrame = loadImage("Level 1/Frame/Grandfather Image Framed.JPG");
}

function setup() {
  createCanvas(windowWidth,windowHeight);
  
  //Creating and adding images
  baby = createSprite(50,50,300,400);
  baby.addImage(babyFrame);
  baby.scale = 0.2;

  boy = createSprite(100, 50,300,450);
  boy.addImage(boyFrame);
  boy.scale = 0.2;

  youngBoy = createSprite(150,50,290,500);
  youngBoy.addImage(youngBoyFrame);
  youngBoy.scale = 0.2;
  
  adult = createSprite(200,50,290,550);
  adult.addImage(adultFrame);
  adult.scale = 0.2;

  old = createSprite(250,50,290,600);
  old.addImage(oldFrame);
  old.scale = 0.2;

  
  // gameOver = createSprite(300,100);
  // gameOver.addImage(gameOverImg);
  
  // restart = createSprite(300,140);
  // restart.addImage(restartImg);
  
  // gameOver.scale = 0.5;
  // restart.scale = 0.5;

  // gameOver.visible = false;
  // restart.visible = false;
  
}

function draw() {
  //trex.debug = true;
  background(bedroomImg);
 
  
  // if (gameState===PLAY){
  //   score = score + Math.round(getFrameRate()/60);
  //   ground.velocityX = -(6 + 3*score/100);
  
  //   if(keyDown("space") && trex.y >= 159) {
  //     trex.velocityY = -12;
  //   }
  
  //   trex.velocityY = trex.velocityY + 0.8
  
  //   if (ground.x < 0){
  //     ground.x = ground.width/2;
  //   }
  
  //   trex.collide(invisibleGround);
  
  //   if(obstaclesGroup.isTouching(trex)){
  //       gameState = END;
  //   }
  // }
  // else if (gameState === END) {
  //   gameOver.visible = true;
  //   restart.visible = true;
    
  //   //set velcity of each game object to 0
  //   ground.velocityX = 0;
  //   trex.velocityY = 0;
    
  //   //change the trex animation
  //   trex.changeAnimation("collided",trex_collided);
    
  //   //set lifetime of the game objects so that they are never destroyed
  
    
  //   if(mousePressedOver(restart)) {
  //     reset();
  //   }
  // }
  
  
  drawSprites();
}

// function reset(){
//   gameState = PLAY;
//   gameOver.visible = false;
//   restart.visible = false;
  
//   obstaclesGroup.destroyEach();
//   cloudsGroup.destroyEach();
  
//   trex.changeAnimation("running",trex_running);
  
// }