function level2(){
    console.log("level 2");

    bg.addAnimation("level 2",bg2); 
    bg.changeAnimation("level 2",bg2); 
    bg.scale=1.7;
    bg.debug=true;

    if(bg.y>355){
        bg.y=250
    }
  
   spawnrunFast();
   spawnlion();
   spawneagle();
   spawnpanther();
      
    gorillaGroup.destroyEach();
    rhinocerosGroup.destroyEach();
    crocodileGroup.destroyEach();
}

function spawneagle(){
    if(frameCount%60===0){
    eagle=createSprite(Math.round(random(10,700)),0,20,20);
    eagle.velocityY=1;
    eagle.addImage("Eagle",eagleimg);
    eagle.scale=0.3;
    }
}

function spawnlion(){
    if(frameCount%60===0){
    lion=createSprite(Math.round(random(10,700)),0,20,20);
    lion.velocityY=1;
    lion.addImage("Lion",lionimg);
    lion.scale=0.3;
    lion.lifetime=600
    }
}

function spawnpanther(){
    if(frameCount%60===0){
    panther=createSprite(Math.round(random(10,700)),0,20,20);
    panther.velocityY=1;
    panther.addImage("Panther",pantherimg);
    panther.scale=0.3;
    }
}

function spawnrunFast(){
    if(frameCount===1200){
    fastrun=createSprite(Math.round(random(10,700)),0,20,20);
    fastrun.velocityY=1;
    fastrun.addImage("Run",fastrunimg);
    fastrun.lifetime=1200;
    fastrun.scale=0.3
    }
}
