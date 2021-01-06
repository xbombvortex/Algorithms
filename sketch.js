var movingRect,fixedRect;

var s1,s2,s3,s4;

function setup() {
createCanvas(1850,900);
 
movingRect=createSprite(200,200,100,100);
movingRect.shapeColor="BLUE";

s1=createSprite(Math.round(random(100,1200)),450,50,50);
s2=createSprite(Math.round(random(200,1300)),450,50,50);
s3=createSprite(Math.round(random(300,1400)),450,50,50);
s4=createSprite(Math.round(random(400,1500)),450,50,50);

s1.velocityX=5;
s1.velocityY=5;
s2.velocityX=5;
s2.velocityY=5;
s3.velocityX=5;
s3.velocityY=5;
s4.velocityX=5;
s4.velocityY=5;

}

function draw() {
background("BLACK");  

movingRect.x=World.mouseX;
movingRect.y=World.mouseY;


bouceOff(movingRect,s1)
bouceOff(movingRect,s2)
bouceOff(movingRect,s3)
bouceOff(movingRect,s4)









drawSprites();
}



