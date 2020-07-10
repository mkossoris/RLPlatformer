/// <reference path="../../types/phaser.d.ts" />
import Phaser from 'phaser';

const drag = 100;
const xGroundAcceleration = 50;
const xAirAcceleration = 20;
const maxVelocity = 20;

class Car extends Phaser.Physics.Matter.Sprite {
  constructor(scene, x, y, texture, shape) {
    super(scene.matter.world, x, y, texture, null, { shape });

    scene.add.existing(this);

    this.inputs = scene.inputs;
  }

  preUpdate(time, delta) {
    super.preUpdate(time, delta);

    const deltaVelocity = delta/1000 * xGroundAcceleration;

    // this.setAcceleration(5);

    if (this.inputs.backward.isDown) {
      if (this.body.velocity.x > ~maxVelocity) {
        this.setVelocityX(this.body.velocity.x - deltaVelocity);
      }
    } else if (this.inputs.forward.isDown) {
      if (this.body.velocity.x < maxVelocity) {
        this.setVelocityX(this.body.velocity.x + deltaVelocity);
      }
    } else {
      const deltaVelocity = delta/1000 * drag;
      if (this.body.velocity.x > 0) {
        this.setVelocityX(Math.max(0, this.body.velocity.x - deltaVelocity))
      }

      if (this.body.velocity.x < 0) {
        this.setVelocityX(Math.min(0, this.body.velocity.x + deltaVelocity))
      }
    }

    const didPressJump = Phaser.Input.Keyboard.JustDown(this.inputs.jump);

    if (didPressJump) {
      this.setVelocityY(-10);
    }
  }
}

export default Car;