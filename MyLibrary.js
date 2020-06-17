//Function to create each Food
function createFood(x,y){
    var f = createSprite(x,y,20,20);
    f.shapeColor="pink";
    fgroup.add(f);
}

//Function to create all the food
function allFood(){
//vertical lines of food
for (var i=165; i<630; i=i+25){
  createFood(65,i);
}
for (var i=165; i<300; i=i+25){
  createFood(255,i);
}
for (var i=120; i<370; i=i+25){
  createFood(330,i);
}
for (var i=190; i<400; i=i+25){
  createFood(460,i);
}
for (var i=240; i<460; i=i+25){
  createFood(540,i);
}
for (var i=240; i<460; i=i+25){
  createFood(590,i);
}
for (var i=190; i<470; i=i+25){
  createFood(670,i);
}
for (var i=120; i<470; i=i+25){
  createFood(1060,i);
}
for (var i=180; i<420; i=i+25){
  createFood(830,i);
}
for (var i=180; i<420; i=i+25){
  createFood(860,i);
}
for (var i=485; i<580; i=i+25){
  createFood(860,i);
}
for (var i=190; i<280; i=i+25){
  createFood(1140,i);
}
for (var i=340; i<470; i=i+25){
  createFood(1140,i);
}
for (var i=120; i<700; i=i+25){
  createFood(1370,i);
  
}
//horizontal lines of food
for (var i=355; i<1060; i=i+25){
  createFood(i,120);
}
for (var i=135; i<440; i=i+25){
  createFood(i,390);
}
for (var i=90; i<650; i=i+25){
  createFood(i,470);
}
for (var i=335; i<800; i=i+25){
  createFood(i,525);
}
for (var i=385; i<800; i=i+25){
  createFood(i,605);
}
for (var i=385; i<1200; i=i+25){
  createFood(i,635);
}
}

//to score
function Score(){
  for (var i = 0; i<fgroup.maxDepth(); i++){
      var f1 = fgroup.get(i);
      if(f1!=null && f1.isTouching(player.player)){
        foodcount=foodcount+1;
        f1.destroy();
      }
    }
}


//to create the player's bullets
function createbullet(eny){
  var bullet=createSprite(player.player.x,player.player.y,15,6)
  if(eny.x>player.player.x){
    if(eny.y>player.player.y){
    bullet.velocityX=5;
    bullet.velocityY=5;
    }
    if(eny.y<player.player.y){
      bullet.velocityX=5;
      bullet.velocityY=-5;
      }
  }
  if(eny.x<player.player.x){
    if(eny.y>player.player.y){
    bullet.velocityX=-5;
    bullet.velocityY=5;
    }
    if(eny.y<player.player.y){
      bullet.velocityX=-5;
      bullet.velocityY=-5;
      }
  }
  bullet.shapeColor="red";
  bullet.lifetime = 70;
  bulletgroup.add(bullet);
} 


//to create the enemybullet1
function createenemybullet(){
  if(frameCount%5===0){
  var ebullet1=createSprite(enemy1.enemy.x,enemy1.enemy.y,15,6)
  if(enemy1.enemy.x>player.player.x){
    if(enemy1.enemy.y>player.player.y){
    ebullet1.velocityX=-5;
    ebullet1.velocityY=-5;
    }
    if(enemy1.enemy.y<player.player.y){
      ebullet1.velocityX=-5;
      ebullet1.velocityY=5;
      }
  }
  if(enemy1.enemy.x<player.player.x){
    if(enemy1.enemy.y>player.player.y){
    ebullet1.velocityX=5;
    ebullet1.velocityY=-5;
    }
    if(enemy1.enemy.y<player.player.y){
      ebullet1.velocityX=5;
      ebullet1.velocityY=5;
      }
  }
  ebullet1.shapeColor="blue";
  ebullet1.lifetime = 70;
  ebulletgroup.add(ebullet1);
  }
}

//to create the enemybullet2
function createenemybullet2(){
  if(frameCount%5===0){
    var ebullet2=createSprite(enemy2.enemy.x,enemy2.enemy.y,15,6)
    if(enemy2.enemy.x>player.player.x){
      if(enemy2.enemy.y>player.player.y){
      ebullet2.velocityX=-5;
      ebullet2.velocityY=-5;
      }
      if(enemy2.enemy.y<player.player.y){
        ebullet2.velocityX=-5;
        ebullet2.velocityY=5;
        }
    }
    if(enemy2.enemy.x<player.player.x){
      if(enemy2.enemy.y>player.player.y){
      ebullet2.velocityX=5;
      ebullet2.velocityY=-5;
      }
      if(enemy2.enemy.y<player.player.y){
        ebullet2.velocityX=5;
        ebullet2.velocityY=5;
        }
    }
    ebullet2.shapeColor="blue";
    ebullet2.lifetime = 70;
    ebulletgroup2.add(ebullet2);
  }
  
 }

 function instructionAndInfo(){
  foodisplay=createSprite(50,40,20,20)
  foodisplay.shapeColor="pink"
  stroke("lime")
  line(0,80,displayWidth,80); 
  fill("lime");
  textSize(25)
  text("Foodcount :"+foodcount,75,50);
  text("HP:"+health+"%",275,50);
  text("Bullets remaining:"+bulletcount,425,50)
  fill("lime");
  textSize(18)
  text("Instruction: Press s to shoot the enemy",700,20) 
  text("Make the foodcount 150+ to win",800,40)
  text("Use the food to increase health by pressing d",800,60)
  text("Use the food to increase bullet count by pressing f if foodcount>30",800,80)
  text("Enemy's HP:"+enemyhp+"%",80,200)
  text("Enemy's HP"+enemy2hp+"%",900,200);
 }

    