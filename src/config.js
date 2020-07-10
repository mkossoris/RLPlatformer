/// <reference path="../types/phaser.d.ts" />
import Phaser from 'phaser';

export default {
  type: Phaser.AUTO,
  parent: 'game',
  backgroundColor: '#33A5E7',
  scale: {
    width: 800,
    height: 600,
    mode: Phaser.Scale.FIT,
    autoCenter: Phaser.Scale.CENTER_BOTH,
  },
  physics: {
    default: "matter",
    matter: {
      gravity: { y: 1 },
      debug: {
        showBody: true,
        showStaticBody: true
      },
      setBounds: {
        x: 0,
        y: 0
      }
    }
  }
};
