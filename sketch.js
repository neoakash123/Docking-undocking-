var spacecraft1img,spacecraft2img,spacecraft3img,spacecraft4img;
var bgimg;
var issImg;
var spacecraft;
var issCraft;
var hasdock=false;


function setup() {
  createCanvas(600,350);
spacecraft = createSprite(285, 240);
spacecraft.addImage(spacecraft1img);
spacecraft.scale = 0.15

issCraft = createSprite(330,130);
issCraft.addImage(issImg);
issCraft.scale = 0.50

}
function preload(){
spacecraft1img = loadImage('spacecraft1.png');
spacecraft2img = loadImage('spacecraft2.png');
spacecraft3img = loadImage('spacecraft3.png');
spacecraft4img = loadImage('spacecraft4.png');

bgimg = loadImage('spacebg.jpg');

issImg = loadImage('iss.png');
}

function draw() {
 background(bgimg);
 if(!hasdock){
   spacecraft.x = spacecraft.x+random(-1,1);
 
   if(keyDown("UP")){
    spacecraft.y-=1;
   }

   if(keyDown("LEFT")){
     spacecraft.x-=1;
     spacecraft.addImage(spacecraft3img);
   }

   if(keyDown("RIGHT")){
     spacecraft.x+=1;
     spacecraft.addImage(spacecraft4img);
   }

   if(keyDown("DOWN")){
     spacecraft.y+=1;
   }
}
 
if(spacecraft.y <= (issCraft.y+60) && spacecraft.x <= (issCraft.x-10)){
  hasdock = true;
  fill("yellow");
  textSize(15);
  text("Docked succesfully",200,250);

}


  drawSprites();
}