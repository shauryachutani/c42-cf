class Maze{
constructor(){
 this.wall=createSprite(displayWidth/2,100,displayWidth,10)   
 this.wall2=createSprite(displayWidth/2,displayHeight,displayWidth,10)
 this.wall3=createSprite(50,displayHeight-220,10,250)
 this.wall4=createSprite(50,220,10,250);

 this.wall5=createSprite(30,420,50,10)
 this.wall6=createSprite(30,350,50,10)
 this.wall7=createSprite(displayWidth-50,displayHeight-220,10,250)
 this.wall8=createSprite(displayWidth-50,220,10,250)
 this.wall9=createSprite(displayWidth-30,420,50,10)
 this.wall10=createSprite(displayWidth-30,350,50,10)
 this.wall11=createSprite(180,200-75,270,50)
 this.wall12=createSprite(290,300-50,50,200)
 this.wall13=createSprite(200,375-50,200,50)
 
 this.wall14=createSprite(100,425-50,50,150)
 this.wall15=createSprite(299,425,430,50)
 this.wall16=createSprite(499,315,50,270)
 this.wall17=createSprite(550,200,140,50)
 this.wall18=createSprite(630,310,50,270)
 this.wall19=createSprite(870,445,329,50)
 this.wall20=createSprite(1100,300,50,330)
 this.wall21=createSprite(1200,300,200,50)
 this.wall22=createSprite(1190,150,230,50)
 this.wall23=createSprite(1190-365.5,545,50,150)
 this.wall24=createSprite(1000,600,400,50)
 this.wall25=createSprite(600,565,470,50)
 this.wall26=createSprite(350,600,50,120)
 this.wall27=createSprite(180,660,399,50)
}

mazecollide(ggroup){
    ggroup.collide(this.wall);
    ggroup.collide(this.wall2);
    ggroup.collide(this.wall3);
    ggroup.collide(this.wall4);
    ggroup.collide(this.wall5);
    ggroup.collide(this.wall6);
    ggroup.collide(this.wall7);
    ggroup.collide(this.wall8);
    ggroup.collide(this.wall9);
    ggroup.collide(this.wall10);
    ggroup.collide(this.wall11);
    ggroup.collide(this.wall12);
    ggroup.collide(this.wall13);
    ggroup.collide(this.wall14);
    ggroup.collide(this.wall15);
    ggroup.collide(this.wall16);
    ggroup.collide(this.wall17);
    ggroup.collide(this.wall18);
    ggroup.collide(this.wall19);
    ggroup.collide(this.wall20);
    ggroup.collide(this.wall21);
    ggroup.collide(this.wall22);
    ggroup.collide(this.wall23);
    ggroup.collide(this.wall24);
    ggroup.collide(this.wall25);
    ggroup.collide(this.wall26);
    ggroup.collide(this.wall27);
   

}



}