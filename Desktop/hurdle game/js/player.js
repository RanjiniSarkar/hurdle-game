class Player {
    constructor(){
      this.index = null;
      this.distance = 0;
      this.name = null;
      this.rank=null;
      this.gravity=0.7;
      this.lift=-12;
      this.velocity=0;
    }
  
    getCount(){
      var playerCountRef = database.ref('playerCount');
      playerCountRef.on("value",(data)=>{
        playerCount = data.val();
      })
    }
  
    updateCount(count){
      database.ref('/').update({
        playerCount: count
      });
    }
  
    update(){
      var playerIndex = "players/player" + this.index;
      database.ref(playerIndex).set({
        name:this.name,
        distance:this.distance,
        gravity:this.gravity,
        lift:this.lift,
        velocity:this.velocity
    
      })
    }
    up () {
      this.velocity += this.lift;
    }
  
    static getPlayerInfo(){
      var playerInfoRef = database.ref('players');
      playerInfoRef.on("value",(data)=>{
        allPlayers = data.val();
      })
    }
    getPlayersAtEnd(){
      database.ref('PlayersAtEnd').on("value",(data)=>{
        this.rank=data.val();
      })
  
    }
    static updatePlayersAtEnd(rank){
      database.ref('/').update({
        PlayersAtEnd:rank
      })
  
      
  
    }
  }
  