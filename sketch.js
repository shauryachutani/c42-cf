var player,maze,healthbar,bulletgroup,ebulletgroup,health=100,gamestate="play",enemyhp=100;
var bulletcount=50,enemy2hp=100;
var foodcount=0;
var fgroup;


function setup() {
createCanvas(displayWidth,displayHeight-80);
maze=new Maze();
player=new Player();
enemy1=new Enemy(100,200);
enemy2=new Enemy(800,200)
bulletgroup=new Group();
ebulletgroup=new Group();
ebulletgroup2=new Group();
fgroup=new Group();
//to create all the foods
allFood();

}
function draw() {
background(0); 

if(gamestate  === "play"){
enemy1.bounce();
enemy2.bounce();
player.run();

maze.mazecollide(player.player);
maze.mazecollide(bulletgroup);
maze.mazecollide(ebulletgroup);
maze.mazecollide(ebulletgroup2);

rules();
Score();
}else if(gamestate==="end"){
 
enemy1.enemy.velocityX=0;
enemy1.enemy.velocityY=0;
enemy2.enemy.velocityX=0;
enemy2.enemy.velocityY=0;

}

instructionAndInfo();
drawSprites();


//to display you win and you lose
if(gamestate==="end"){
  textSize(30);
  fill("lime");
  if (foodcount>150){
  text("Victory",600,400)
  }
  else{
  text("BETTER LUCK NEXT TIME",600,400)
  }
} 

}


function rules(){

//to increase the health with food
if(foodcount>0&&health>0&&health<100&&keyDown("d")){
  health=health+5;
  foodcount=foodcount-1;
}

//to create bullet depending on which enemy is near
if(keyWentDown("s")&&gamestate==="play"&& bulletcount>0){
  if(abs(enemy1.enemy.x-player.player.x)<abs(enemy2.enemy.x-player.player.x)){
   createbullet(enemy1.enemy); 
  }
   else{
    createbullet(enemy2.enemy); 
  }
   bulletcount=bulletcount-1;
  }


  //to decrease the enemy health when bullet touches enemy1
  if(bulletgroup.isTouching(enemy1.enemy)){
    enemyhp=enemyhp-10;
  }
  if(enemyhp===0){
    enemy1.enemy.destroy();
  }
  //to decrease the enemy health when bullet touches enemy2
  if(bulletgroup.isTouching(enemy2.enemy)){
    enemy2hp=enemy2hp-10;
  }
  if(enemy2hp===0){
    enemy2.enemy.destroy();
  }

  if(enemyhp<50&&player.player.y>310&&enemyhp>0){
    enemyhp=enemyhp+1;
  }
  //to make the enemies shoot when the player is near the enemies
  if(abs(player.player.x-enemy1.enemy.x)<150 && abs(player.player.y-enemy1.enemy.y)<150&&enemyhp>0){
   createenemybullet(); 
  }
  if(abs(player.player.x-enemy2.enemy.x)<150 && abs(player.player.y-enemy2.enemy.y)<150&&enemy2hp>0){
    createenemybullet2(); 
   }

   //to decrease the player health when touched by ebulletgroup
  if(ebulletgroup.isTouching(player.player)&&health>0){
    health=health-10;
  } 
  if(ebulletgroup2.isTouching(player.player)&&health>0){
  health=health-10;
  }
  
//to create the END state - when Player health is 0 or is touched by the enemies or if the foodcount>150
 if(health===0 || enemy1.enemy.isTouching(player.player)|| enemy2.enemy.isTouching(player.player) || foodcount>150){
 player.player.destroy();
  gamestate="end";
  
 } 

 //to increase the bullet count if food is more than 30,on keyDown of "f"
 if(foodcount>=30&&keyDown("f")){
bulletcount=bulletcount+5;
foodcount=foodcount-10
 }
if(player.player.y>310&&enemyhp<50&&enemyhp>0){
  enemyhp=enemyhp+1
}
}

function sheild(){
  if(ebulletgroup.isTouching(player.player)||ebulletgroup2.isTouching(player.player)&&keyDown("w")){
    var sheild=createSprite(player.player.x+10,player.player.y,5,25);
    if(ebulletgroup2||ebulletgroup.isTouching(sheild)){
      health=health-2;
      
    }
  }

}