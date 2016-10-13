import Phaser from 'phaser';

export default class extends Phaser.State {
  init () {}

  preload () {
    // preload our assets for the actual game
  }

  create () {
    // After we load our assets move onto the preloader
  }

  render () {
    this.state.start('Game');
  }
}