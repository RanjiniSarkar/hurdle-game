var canvas, backgroundImage;

var gameState = 0;
var playerCount;
var allPlayers;
var distance = 0;
var database;

var form, player, game;

var  boys,  boy1,  boy2,  boy3, boy4;

var track, boy1_img, boy2_img, boy3_img, boy4_img;
var hurdle1, hurdle2, hurdle3, hurdle4, hurdle5, hurdle6, hurdle7, hurdle8, hurdle_img, hurdles;
function preload(){
  ground = loadImage("../images/hurdle track1.jpg");
  boy1_img = loadImage("../images/boy1_burned.png");
  boy2_img = loadImage("../images/boy2_burned.png");
  boy3_img = loadImage("../images/boy3_burned.png");
  boy4_img = loadImage("../images/boy4_burned.png");
  hurdle_img = loadImage("../images/hurdle.png");
  
}

function setup(){
  canvas = createCanvas(displayWidth - 30, displayHeight-20);
  database = firebase.database();
  
  game = new Game();
  game.getState();
  game.start();
  hurdle1=createSprite(-100,130,20,20)
  hurdle1.addImage("hurdle",hurdle_img)
  hurdle2=createSprite(-100,310,20,20)
  hurdle2.addImage("hurdle",hurdle_img)
  hurdle3=createSprite(-100,480,20,20)
  hurdle3.addImage("hurdle",hurdle_img)
  hurdle4=createSprite(-100,650,20,20)
  hurdle4.addImage("hurdle",hurdle_img)
  hurdle5=createSprite(hurdle1.x-1200,130,130,20,20)
  hurdle5.addImage("hurdle",hurdle_img)
  hurdle6=createSprite(hurdle2.x-1200,310,20,20)
  hurdle6.addImage("hurdle",hurdle_img)
  hurdle7=createSprite(hurdle3.x-1200,480,20,20)
  hurdle7.addImage("hurdle",hurdle_img)
  hurdle8=createSprite(hurdle4.x-1200,650,20,20)
  hurdle8.addImage("hurdle",hurdle_img)
}
function draw(){
  hurdle1.display();
  hurdle2.display();
  hurdle3.display();
  hurdle4.display();
  hurdle5.display();
  hurdle6.display();
  hurdle7.display();
  hurdle8.display();


  if(playerCount === 4){
    game.update(1);
  }
  if(gameState === 1){
    clear();
    game.play();
  }
  if(gameState === 2){
    game.end();
  }
  
  
}

