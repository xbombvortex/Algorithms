function bouceOff(a,b){

    if(a.x-b.x<a.width/2+b.width/2&&
    b.x-a.x<a.width/2+b.width/2){
    
    a.shapeColor="RED";
    b.shapeColor="RED";
    
    a.velocityX=a.velocityX*(-1);
    b.velocityX=b.velocityX*(-1);
    }
    if(a.y-b.y<a.height/2+b.height/2&&
        b.y-a.y<a.height/2+b.height/2) {
    a.shapeColor="BLUE";
    b.shapeColor="BLUE";
    a.velocityY=a.velocityY*(-1);
    b.velocityY=b.velocityY*(-1);
    }
    }