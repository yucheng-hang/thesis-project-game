class Player extends Phaser.GameObjects.Sprite{
    constructor(config){

      super(config.scene, config.x, config.y-16, config.key)
  
      
      config.scene.physics.world.enable(this);
      config.scene.add.existing(this);


      this.dialog = config.dialog;
      this.scene = config.scene;

    }
  
    readDialog(key) {
      // Read through dialogs in order, until stop property is detected
      const blurb = this.dialog[key];
      this.scene.showSubtitle(blurb);
    }
    
    readRandom() {
        // Randomly select a dialog key, and read it.
      }
    update(){
  
      
    }
  }