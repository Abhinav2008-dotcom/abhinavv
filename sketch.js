var dyso,king;
var gorilla,rhino,crocodile,Fly,Attack,bear,snake,panther,eagle,wolf,lion;
var sceptre,scoreHeart,food,fastrun,shield,heal;
var bg2,bg3;
var bg,bgimg,dysoimg,gorillaimg,rhinocerosimg,crocodileimg,flyimg,attackimg,sceptreimg,scoreheartimg,kingimg;
var foodimg,bearimg,snakeimg,pantherimg,eagleimg,wolfimg,lionimg,fastrunimg,shieldimg,healimg;
var homescreen,homescreenImg;
var gameState=0;
var gorillaGroup,rhinocerosGroup,crocodileGroup,foodGroup,heartGroup,lionGroup,eagleGroup,pantherGroup;
var wolfGroup,snakeGroup,bearGroup;
var edges;
var score=0;

function  preload() {
    bgimg=loadAnimation("images/bg.jpg");
    bg2=loadAnimation("images/second background.jpg");
    bg3=loadAnimation("images/third background.jpg");
    dysoimg=loadImage("images/Clear dyso.png");
    gorillaimg=loadImage("images/Clear gorilla.png"); 
    rhinocerosimg=loadImage("images/Clear rhino.png");
    crocodileimg=loadImage("images/Clear crocodile.png");
    bearimg=loadImage("images/Clear bear.png");
    snakeimg=loadImage("images/Clear snake.png");
    pantherimg=loadImage("images/Clear panther.png");
    eagleimg=loadImage("images/Clear eagle.png");
    wolfimg=loadImage("images/Clear wolf.png");
    lionimg=loadImage("images/Lion.png");
    foodimg=loadImage("images/Tiger food.png");
    attackimg=loadImage("images/Attack.png");
    flyimg=loadImage("images/Wings.png");
    fastrunimg=loadImage("images/Fast run.png");
    shieldimg=loadImage("images/Immunity perk.png");
    healimg=loadImage("images/heal perk.png");
    sceptreimg=loadImage("images/The Sceptre.png");
    scoreheartimg=loadImage("images/Score Heart.png");
    kingimg=loadImage("images/Evil king.png");
    homescreenImg=loadImage("images/Home page img.jpg"); 
}

function setup(){
    createCanvas(1000,600);

    bg=createSprite(500,250);
    bg.addAnimation("background",bgimg);
    bg.scale=0.3;
    bg.visible=false;
    bg.velocityY=1;

    dyso=createSprite(534,559,20,20);
    dyso.addImage("Dyso",dysoimg);
    dyso.scale=0.7;
    dyso.setCollider("rectangle",0,0,60,200);
    dyso.visible=false;
    dyso.debug=true;

    gorillaGroup= new Group();
    rhinocerosGroup=new Group();
    crocodileGroup=new Group();
    lionGroup=new Group();
    eagleGroup=new Group();
    pantherGroup=new Group();
    wolfGroup=new Group();
    snakeGroup=new Group();
    bearGroup=new Group();
    foodGroup=new Group();
    heartGroup=new Group();

    for(var i=1;i<=4;i++){
    scoreHeart=createSprite((20+i+15)*i,21,10,10);
    scoreHeart.addImage("Lives",scoreheartimg);
    scoreHeart.scale=0.21;
    heartGroup.add(scoreHeart);
    }
    console.log(heartGroup);
   
    button1 = createButton('Start');
    button1.position(474,369);
    button1.style('background', 'yellow'); 

    homescreen=createSprite(500,300,displayWidth,displayHeight);
    homescreen.addImage("home screen",homescreenImg);
    homescreen.scale=1.2;

    button1.mousePressed(()=>{
        button1.hide();
        gameState=1;
        homescreen.visible=false;
    })
}

function draw(){   
    background(0);

    if(gameState===1){
        level1();   
    }

    if(score>=5){
        gameState=2;
    }

    if(gameState==2){
        score=0;
        level2();
    }

    if(keyDown("LEFT_ARROW")){
        dyso.x-=5;
       }
     if (keyDown("RIGHT_ARROW")){
        dyso.x+=5;
       }
     if (keyDown("UP_ARROW")){
        dyso.y-=5;
       }
     if (keyDown("DOWN_ARROW")){
        dyso.y+=5;
       } 

    edges= createEdgeSprites();
    dyso.bounceOff(edges);
  
    drawSprites();

    if(gameState!==0){
   textSize(20);
   strokeWeight(3)
   stroke("black");
   fill("red");
   text("SCORE: "+score,858,32);
    }
}


function spawnheal(){
    if(frameCount===2700){
    heal=createSprite(Math.round(random(10,700)),0,20,20);
    heal.velocityY=1
    heal.addImage("Heal",healimg);
    heal.lifetime=2700;
    heal.scale=0.1
    }
}

function spawnshield(){
    if(frameCount===4200){
    shield=createSprite(Math.round(random(10,700)),0,20,20);
    shield.velocityY=1;
    shield.addImage("Immune",shieldimg);
    shield.lifetime=4200;
    shield.scale=0.1;
    }
}

function spawnattack(){
    if(frameCount===5700){
    Attack=createSprite(Math.round(random(10,700)),0,20,20);
    Attack.velocityY=1;
    Attack.addImage("Attack",attackimg);
    Attack.lifetime=5700;
    Attack.scale=0.1;
    }
}

function spawnfly(){
    if(frameCount===7200){
    Fly=createSprite(Math.round(random(10,700)),0,20,20);
    Fly.velocityY=1;
    Fly.addImage("Fly",flyimg);
    Fly.lifetime=7200;
    Fly.scale=0.1;
    }
}

function spawnwolf(){
    if(frameCount===100){
    wolf=createSprite(Math.round(random(10,700)),0,20,20);
    wolf.velocityY=1;
    wolf.addImage("Wolf",wolfimg);
    wolf.scale=0.3;
    }
}

function spawnsnake(){
    if(frameCount===100){
    snake=createSprite(Math.round(random(10,700)),0,20,20);
    snake.velocityY=1;
    snake.addImage("Snake",snakeimg);
    snake.scale=0.3;
    }
}

function spawnbear(){
    if(frameCount===100){
    bear=createSprite(Math.round(random(10,700)),0,20,20);
    bear.velocityY=1;
    bear.addImage("Bear",bearimg);
    bear.scale=0.3;
    }
}
