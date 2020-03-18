class Game {
    constructor(){
  
    }
  
    getState(){
      var gameStateRef  = database.ref('gameState');
      gameStateRef.on("value",function(data){
         gameState = data.val();
      })
  
    }
  
    update(state){
      database.ref('/').update({
        gameState: state
      });
    }
  
    async start(){
      if(gameState === 0){
        player = new Player();
        var playerCountRef = await database.ref('playerCount').once("value");
        if(playerCountRef.exists()){
          playerCount = playerCountRef.val();
          player.getCount();
        }
        form = new Form()
        form.display();
      }
  
      boy1 = createSprite(100,200);
      boy1.addImage("boy1",boy1_img);
      boy2 = createSprite(300,200);
      boy2.addImage("boy2",boy2_img);
      boy3 = createSprite(500,200);
      boy3.addImage("boy3",boy3_img);
      boy4 = createSprite(700,200);
      boy4.addImage("boy4",boy4_img);
      boys = [boy1, boy2, boy3, boy4];
    }
  
    play(){
      form.hide();
      
      Player.getPlayerInfo();
      player.getPlayersAtEnd();
      
      if(allPlayers !== undefined){
        background(rgb(198,135,103));
        image(ground, -displayWidth*2,0,displayWidth*5, displayHeight);
        
        //var display_position = 100;
        
        //index of the array
        var index = 0;
  
        //x and y position of the cars
        var x  ;
        var y = -125;
  
        for(var plr in allPlayers){
          //add 1 to the index for every loop
          index = index + 1 ;
  
          //position the cars a little away from each other in x direction
          y = y + 180;
          //use data form the database to display the cars in y direction
          x = displayWidth - allPlayers[plr].distance;
          boys[index-1].y = y;
          boys[index-1].x = x;
  
          if (index === player.index){
           stroke(10);
           fill("red");
            ellipse(x,y,60,60);
            boys[index - 1].shapeColor = "red";
            camera.position.y = displayHeight/2;
            camera.position.x = boys[index-1].x;
  
          }
         
          //textSize(15);
          //text(allPlayers[plr].name + ": " + allPlayers[plr].distance, 120,display_position)
        }
  
      }
  
      if(keyIsDown(LEFT_ARROW) && player.index !== null){
        player.distance +=10
        player.update();
  
      
      }
  
      if(player.distance > 3860){
        gameState = 2;
        player.rank=player.rank+1;
        Player.updatePLayersAtEnd(player.rank);
      }
     
      drawSprites();
    }
  
    end(){
      console.log("Game Ended");
      console.log(player.rank);
    }
  }
  