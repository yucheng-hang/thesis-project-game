class playGame extends Phaser.Scene {
  constructor() {
    super("PlayGame");
  }
  create() {

    // create an tiled sprite with the size of our game screen
    this.sky = this.add.tileSprite(0, 0, game.config.width, game.config.height, "sky");
    // Set its pivot to the top left corner
    this.sky.setOrigin(0, 0);
    // fixe it so it won't move when the camera moves.
    // Instead we are moving its texture on the update
    this.sky.setScrollFactor(0);

    this.mountain_1 = this.add.tileSprite(0, 0, game.config.width, game.config.height, "mountain_1");
    this.mountain_1.setOrigin(0, 0);
    this.mountain_1.setScrollFactor(0);

    this.mountain_2 = this.add.tileSprite(0, 0, game.config.width, game.config.height, "mountain_2");
    this.mountain_2.setOrigin(0, 0);
    this.mountain_2.setScrollFactor(0);

    this.ground = this.add.tileSprite(0, 0, game.config.width, game.config.height, "ground");
    this.ground.setOrigin(0, 0);
    this.ground.setScrollFactor(0);

    this.foreground = this.add.tileSprite(0, 0, game.config.width, game.config.height, "foreground");
    this.foreground.setOrigin(0, 0);
    this.foreground.setScrollFactor(0);

    //add npc
    this.npc1 = this.add.image(800, 700, "npc1").setScale(0.7).setInteractive({useHandCursor: true});
    this.text1 = this.add.text(800, 800, 'Allan looks sad, would you help him?', { font: '30px Comfortaa', fill: '#000' });
    this.button1 = this.add.text(800, 850,"Yes", { font: '30px Comfortaa', fill: '#000' }).setInteractive({useHandCursor: true});
    this.button2 = this.add.text(900, 850,"No", { font: '30px Comfortaa', fill: '#000' }).setInteractive({useHandCursor: true});;
    this.text2 = this.add.text(800, 800, 'Simple kindness can be a huge help!', { font: '30px Comfortaa', fill: '#000' });
    
    this.text1.alpha = 0;
    this.button1.alpha = 0;
    this.button2.alpha = 0;
    this.text2.alpha = 0;


    this.text1.setScrollFactor(0);
    this.button1.setScrollFactor(0);
    this.button2.setScrollFactor(0);
    this.text2.setScrollFactor(0);
    
    var npc1 = this.npc1;
    var text1 = this.text1;
    var text2 = this.text1;
    var button1 = this.button1;
    var button2 = this.button2;

    npc1.on('pointerdown', function () {
      // console.log('clicked');
      text1.alpha = 1;  
      button1.alpha = 1;
      button2.alpha = 1;
      setTimeout(function(){ button1.alpha = 0, button2.alpha = 0, text1.alpha = 0}, 4000);
     });

    /**
     * I *think* this needs to be an arrow function, otherwise
     * "this" is referring to the pointerdown event.
     */
    button1.on('pointerdown', (pointer) => {
      // console.log('clicked');
      // location.href="dialogue.html";
      this.scene.start('DialogueScene');
     });

  
     
    button2.on('pointerdown', function () {
      // console.log('clicked');
      text2.alpha = 1;
      text1.alpha = 0;
      button1.alpha = 0;
      button2.alpha = 0;
      // setTimeout(function(){ text2.alpha = 0}, 4000);
      
     });


    

    // add player
    this.player = this.add.sprite(200, game.config.height /1.4, "player");
    // create an animation for the player
    this.anims.create({
      key: "walk",
      frames: [
        { key: 'player1'},
        { key: 'player2'},
        { key: 'player3'},
        { key: 'player4'},
        { key: 'player5'},
    ],
      frameRate: 10,
      repeat: -1
    });
    this.player.play("walk");

    
    // allow key inputs to control the player
    this.cursors = this.input.keyboard.createCursorKeys();


    // set workd bounds to allow camera to follow the player
    this.myCam = this.cameras.main;
    this.myCam.setBounds(0, 0, 4200, game.config.height);

    // making the camera follow the player
    this.myCam.startFollow(this.player);

  }

  


  update() {

    // move the player when the arrow keys are pressed
    if (this.cursors.left.isDown && this.player.x > 0) {
      this.player.x -= 15;
      this.player.scaleX = -1;

    } else if (this.cursors.right.isDown && this.player.x < 4200 ) {
      this.player.x += 15;
      this.player.scaleX = 1;

    }

    // scroll the texture of the tilesprites proportionally to the camera scroll
    this.sky.tilePositionX = this.myCam.scrollX * .3;
    this.mountain_1.tilePositionX = this.myCam.scrollX  * .3;
    this.mountain_2.tilePositionX = this.myCam.scrollX * .5;
    this.ground.tilePositionX = this.myCam.scrollX;
    this.foreground.tilePositionX = this.myCam.scrollX * 1.5;


  }
}
