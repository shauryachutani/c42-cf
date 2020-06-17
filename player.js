class Player{
    constructor(){
this.player= createSprite(380, 200, 20, 20);  

this.player.shapeColor="orange"
}
     run(){
        if(keyDown("right")){
           this.player.x=this.player.x+10;
          }
          if(keyDown("left")){
            this.player.x=this.player.x-10;
          }
          if(keyDown("up")){
           this.player.y=this.player.y-10;
          }
          if(keyDown("down")){ 
            this.player.y=this.player.y+10;
          }
          
          if(this.player.x>=displayWidth){
            this.player.x=0;
          }
          if(this.player.x<=0){
            this.player.x=displayWidth
          }
    }
}