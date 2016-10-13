import Phaser from 'phaser';
import { Player } from '../sprites/player';

export default class extends Phaser.State {
  create () {
    this.game.physics.startSystem(Phaser.Physics.ARCADE);

    this.player = new Player(this.game, 350, 300);
    this.game.add.existing(this.player);

    this.cursors = this.game.input.keyboard.createCursorKeys();

    this.game.stage.backgroundColor = "#FFFFFF";
  }

  update () {
    this.player.move(this.cursors);
  }
}