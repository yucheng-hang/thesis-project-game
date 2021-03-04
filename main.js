var game;
window.onload = function(){
  let gameConfig = {
    type: Phaser.CANVAS,
    width: 1366,
    height: 1024,
    pixelArt: true,
    physics: {
      default: "arcade",
      arcade: {
          gravity: {
            y: 0
          }
      }
    },
    scene: [preloadGame, playGame, dialogueScene]
  }
  game = new Phaser.Game(gameConfig);
}
