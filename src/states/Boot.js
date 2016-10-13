import Phaser from 'phaser';

export default class extends Phaser.State {
  init () {
    this.stage.backgroundColor = '#9EBC9F'
  }

  preload () {
    let textStyle = {font: '45px Arial', alight: 'center', stroke: 'white', fill: 'blue'};
    this.game.add.text(80, 150, 'loading...', textStyle);

    this.game.load.spritesheet('player', './assets/player.png', 64, 64, 6);
  }

  create () {
    // After we load our assets move onto the preloader
  }

  render () {
    this.state.start('Preloader');
  }
}