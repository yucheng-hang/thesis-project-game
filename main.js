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
    // @url: https://photonstorm.github.io/phaser3-docs/Phaser.Scale.ScaleManager.html
    scale: {
      mode: Phaser.Scale.FIT,
      autoCenter: Phaser.Scale.CENTER_BOTH,
      width: 1366,
      height: 1024
    },
    scene: [preloadGame, playGame]
  }
  game = new Phaser.Game(gameConfig);
}
