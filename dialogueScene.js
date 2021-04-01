
class dialogueScene extends Phaser.Scene{
    constructor(){
      super("DialogueScene");
    }
    preload(){
        
      
    }
    create(){
        this.mountain_1 = this.add.tileSprite(0, 0, game.config.width, game.config.height, "mountain_1");
        this.mountain_1.setOrigin(0, 0);
        this.mountain_1.setScrollFactor(0);

        console.log("Dialog Scene Created!")

        // this.scene.start("DialogueScene");
    }
}
    // this.scene.add('DialogueScene', dialogueScene, true);



// var dialogueScene = new Phaser.Class({

//     Extends: Phaser.Scene,

//     initialize:

//     function dialogueScene ()
//     {
//         Phaser.Scene.call(this, { key: 'dialogueScene', active: true });
//     },

//     preload: function ()
//     {
        
//     },

//     create: function ()
//     {
        
//     },

//     update: function ()
//     {
       
//     }

// });