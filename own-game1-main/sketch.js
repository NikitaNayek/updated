var car ;

function preload(){

  cari=loadImage("image1.png");
  track=loadImage("track2.png");
}

function setup(){
createCanvas(1200,900);

  car= createSprite(100,800,100,20);
  car.addImage("pc",cari);
  car.scale=0.5;

  ground=createSprite(60,600,1200,50);
  ground.x=ground.width/2;
  ground.addImage("track",track);
  ground.velocityX=-5;
  ground.depth=car.depth;
  ground.scale=2.5;
  car.depth+=1;


}

function draw(){

  background(255);
  if(ground.x<0){
    ground.x=ground.width/2;
  }

  drawSprites();
}