class preloadGame extends Phaser.Scene{
    constructor(){
      super("PreloadGame");
    }
    preload(){
      // load the background
      this.load.image("sky", "assets/bg_sky.png");
      this.load.image("mountain_1", "assets/bg_mountain_1.png");
      this.load.image("mountain_2", "assets/bg_mountain_2.png");
      this.load.image("ground", "assets/bg_ground.png");
      this.load.image("foreground", "assets/bg_foreground.png");
      
      
      // load spritesheet
      // this.load.spritesheet("player", "assets/sprite-main.png",{
      //   frameWidth: 106,
      //   frameHeight: 212
      // });

      //load the JSON file
      this.game.load.json("dialogue", "dialogue.json")
      
      //load the character
      this.load.image("player1", "assets/player_1.png")
      this.load.image("player2", "assets/player_2.png")
      this.load.image("player3", "assets/player_3.png")
      this.load.image("player4", "assets/player_4.png")
      this.load.image("player5", "assets/player_5.png")

      //load the npcs
      this.load.image("npc1","assets/npc_1.png")
    }
    create(){
      this.scene.start("PlayGame");
    }
}
