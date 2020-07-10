/// <reference path="../../types/phaser.d.ts" />
import Phaser from 'phaser';
import Car from '../entities/Car.js'

class Game extends Phaser.Scene {
  constructor() {
    super({ key: 'GameScene' });
  }

  init(data) {}

  preload() {
    this.load.image('octane', 'assets/octane.png');
    this.load.json('shapes', 'assets/octane_body.json');
  }

  create(data) {
    console.log(this.matter)
    this.inputs = this.input.keyboard.addKeys({
      'forward': Phaser.Input.Keyboard.KeyCodes.W,
      'backward': Phaser.Input.Keyboard.KeyCodes.S,
      'jump': Phaser.Input.Keyboard.KeyCodes.SPACE
    });

    this.inputs.mousePointer = this.input.mousePointer;

    const shapes = this.cache.json.get('shapes')
    this.player = new Car(this, 50, 100, 'octane', shapes.octane)
    this.matter.add.car(40, 40, 100, 40, 10);
  }

  update(time, delta) {}
}

export default Game;