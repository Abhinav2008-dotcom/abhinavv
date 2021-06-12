function level1(){
        
    if(bg.y>355){
        bg.y=250
    }

    spawngorilla();
    spawnrhinoceros();
    spawncrocodile();
    spawnfood();

       if(gorillaGroup.isTouching(dyso)){
        gorillaGroup.destroyEach();
         dyso.x=534;
         dyso.y=559;
          }
    
        if(crocodileGroup.isTouching(dyso)){
            crocodileGroup.destroyEach();
        }
        if(rhinocerosGroup.isTouching(dyso)){
            rhinocerosGroup.destroyEach();
            score=score-1;
        }
        if(foodGroup.isTouching(dyso)){
            score=score+3;
            foodGroup.destroyEach();
        }
  
     bg.visible=true;
    dyso.visible=true;
}

function spawngorilla(){
    if(frameCount%60===0){
     gorilla=createSprite(Math.round(random(10,700)),0,20,20);
     gorilla.velocityY=1;
     gorilla.addImage("Gorilla",gorillaimg);
     gorilla.scale=0.5;
     gorilla.lifetime=500;
     gorillaGroup.add(gorilla);
    } 
 }
 
 function spawnrhinoceros(){
     if(frameCount%60===0){
     rhinoceros=createSprite(Math.round(random(10,700)),0,20,20);
     rhinoceros.velocityY=1;
     rhinoceros.addImage("Rhinoceros",rhinocerosimg);
     rhinoceros.scale=0.5;
     rhinoceros.lifetime=500;
     rhinocerosGroup.add(rhinoceros);     
     }
 }
 
 function spawncrocodile(){
     if(frameCount%60===0){
      crocodile=createSprite(Math.round(random(10,700)),0,20,20);
      crocodile.velocityY=1;
      crocodile.addImage("Crocodile",crocodileimg);
      crocodile.scale=0.3;
      crocodile.lifetime=500;    
      crocodileGroup.add(crocodile);
     } 
  }

  function spawnfood(){
    if(frameCount%60===0){
     food=createSprite(Math.round(random(10,700)),0,20,20);
     food.velocityY=1;
     food.addImage("Food",foodimg);
     food.scale=0.3;
     food.lifetime=600;  
     foodGroup.add(food);
    } 
 }