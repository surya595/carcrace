 var canvas,database  ,gameState,playerCount,form
   
   var game,player
   
function setup(){
canvas=createCanvas(400,400);
database=firebase.database();
game=new Game();
game.getState();
game.start();
}
function draw(){
 background(255);
}