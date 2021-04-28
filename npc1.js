class Npc extends Phaser.GameObjects.Sprite{
    constructor(scene){
  
      var x = scene.player.x;
      var y = scene.player.y - 16;
  
      super(scene, x, y, "npc1");
  
      // add to scene
      scene.add.existing(this);


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