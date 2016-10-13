import Phaser from 'phaser';

export default class extends Phaser.State {
  init () {}

  preload () {
    // preload our assets for the games splash/start screen
  }

  create () {
    // After we load our assets move onto the preloader
  }

  render () {
    this.state.start('Splash');
  }
}