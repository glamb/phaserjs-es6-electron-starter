import Phaser from 'phaser';

export class Player extends Phaser.Sprite {
  constructor(game, x, y) {
    super(game, x, y, 'player');

    this.anchor.setTo(0.5, 0.5);
    this.scale.setTo(0.65, 0.65);

    this.game.physics.enable(this, Phaser.Physics.ARCADE);
    this.body.drag.set(100);
    this.body.velocity.x = 0;
    this.body.maxVelocity.set(500);
    this.body.collideWorldBounds = true;

    this.body.width -= 32;
    this.body.height -= 32;
  }

  move(cursor) {
    if (cursor.left.isDown) {
      this.body.velocity.x -= 150;
    } else if (cursor.right.isDown) {
      this.body.velocity.x += 150;
    } else if (cursor.up.isDown) {
      this.body.velocity.y -= 150;
    } else if (cursor.down.isDown) {
      this.body.velocity.y += 150;
    } else {
      this.body.velocity.x = 0;
      this.body.velocity.y = 0;
    }
  }
}