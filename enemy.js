class Enemy{
  constructor(x,y) {
    this.enemy= createSprite(x, y, 25, 25);
    this.enemy.shapeColor="lime"
    this.enemy.velocityX=3;
    this.enemy.velocityY=3;
    
  } 

  bounce(){
    
      this.enemy.bounceOff(maze.wall);
   
      this.enemy.bounceOff(maze.wall2);
    
      this.enemy.bounceOff(maze.wall3);
    
      this.enemy.bounceOff(maze.wall4);
    
      this.enemy.bounceOff(maze.wall5);
    
      this.enemy.bounceOff(maze.wall6);
    
      this.enemy.bounceOff(maze.wall7);
    
      this.enemy.bounceOff(maze.wall8);
    
      this.enemy.bounceOff(maze.wall9);
    
      this.enemy.bounceOff(maze.wall10);
    
      this.enemy.bounceOff(maze.wall11);
    
      this.enemy.bounceOff(maze.wall12);
    
      this.enemy.bounceOff(maze.wall13);
    
      this.enemy.bounceOff(maze.wall14);
    
      this.enemy.bounceOff(maze.wall15);
    
      this.enemy.bounceOff(maze.wall16);
    
      this.enemy.bounceOff(maze.wall17);
    
      this.enemy.bounceOff(maze.wall18);
    
      this.enemy.bounceOff(maze.wall19);
   
      this.enemy.bounceOff(maze.wall20);
    
      this.enemy.bounceOff(maze.wall21);
    
      this.enemy.bounceOff(maze.wall22);
    
      this.enemy.bounceOff(maze.wall23);
    
      this.enemy.bounceOff(maze.wall24);
   
      this.enemy.bounceOff(maze.wall25);
    
      this.enemy.bounceOff(maze.wall26);
    
      this.enemy.bounceOff(maze.wall27);
   
  }
}