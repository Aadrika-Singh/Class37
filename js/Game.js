class Game {
  constructor() {}
  
  getState() {
    var gameStateRef = database.ref("gameState");
    gameStateRef.on("value", function(data) {
      gameState = data.val();
    });
  }
 
  update(state) {
    database.ref("/").update({
      gameState: state
    });
  }

  startGame() {
    player = new Player();
    playerCount = player.getCount();
    form = new Form();
    form.display();
    car1 = createSprite(width/2-130,height-100);
    car1.addImage("Car1",car1_img);
    car1.scale = 0.08;
    car2 = createSprite(width/2+100, height-100);
    car2.addImage("Car2",car2_img);
    car2.scale = 0.08;
    cars = [car1,car2];
  }

  handleElements() {
    form.hide();
    form.titleImg.position(40,50);
    form.titleImg.class("GameTitleAfterEffect");    
  }

  play() {
    this.handleElements();
    Player.getPlayersInfo();
    if(allPlayers !== undefined) {
      image (track,0,-height*5,width,height*6);
      drawSprites();
    }
  }
 
}
