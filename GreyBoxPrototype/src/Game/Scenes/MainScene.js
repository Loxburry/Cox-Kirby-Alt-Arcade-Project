const Phaser = require('phaser');
//Import "Actors"

const handPromt = require('../handPromt');


function getRandomInt(max) {
    return Math.floor(Math.random() * Math.floor(max));
}

class MainScene extends Phaser.Scene {
   constructor() { 
    super('MainScene'); 
   }

   create(){ 
    this.didFirstSpawn = false;
    this.keys = { left: this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.LEFT), 
        right: this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.RIGHT), 
        up: this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.UP), 
        down: this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.DOWN), 
        space: this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.SPACE),
        }

    this.graphics = this.add.graphics({
        fillStyle: { color: 0xeeeeee },
        lineStyle: { width: 3, color: 0xffffff },
      });

    this.counter = 0;
    this.handPromts = []; // an array of objects we can call from later
    for(let i = 0; i < 4; i++) { // have 4 promts on screen at a time
      this.handPromts.push(new handPromt(i, getRandomInt(3)));
      }

    }

 update(_, deltaTime) {

    this.handPromts.forEach((b) => {b.update(deltaTime, this.keys); });
    //we need a way to gate the key presses, and deactivate prompts IN ORDER, not all at once (go from 1 > 2 > 3 > 4)
    
    // this.bullets.forEach((bullet) =>{
    //   if(bullet.isActive){
    //     this.enemies.forEach((enemy) =>{
    //       if(isCircleCollision(bullet, enemy)){
    //         enemy.deactivate();
    //         bullet.deactivate();
    //       }
    //     });
    //   }
    // });

    this.graphics.clear();

    this.handPromts.forEach((b) => { b.draw(this.graphics); });
}}

module.exports = MainScene;