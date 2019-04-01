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
    
    this.success = 0;
    this.timeLimit = 350;
    this.timer = 350;
    this.over = false;
    this.wasLastFrameDown = false;

    this.didFirstSpawn = false;
    this.keys = { left: this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.LEFT), 
        right: this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.RIGHT), 
        up: this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.UP), 
        down: this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.DOWN), 
        space: this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.SPACE),
        }

    this.graphics = this.add.graphics({
        fillStyle: { color: 0xeeeeee },
        lineStyle: { width: 4, color: 0xffffff },
      });

    this.overlay = document.querySelector('#demon');
    
      // Ever time this scene begins
    this.overlay.classList.remove('hidden');

    this.counter = 0;
    this.handPromts = []; // an array of objects we can call from later
    for(let i = 0; i < 4; i++) { // have 4 promts on screen at a time
      this.handPromts.push(new handPromt(i, getRandomInt(3)));
      }

    }

 update(_, deltaTime) {
    
    if(this.keys.left.isDown && !this.wasLastFrameDown){
      if(this.handPromts[this.success].rotation == 1){
        this.handPromts[this.success].deactivate();
        console.log("left success");
        this.success++;
      }
    }
    if(this.keys.right.isDown && !this.wasLastFrameDown){
      if(this.handPromts[this.success].rotation == 3){
        this.handPromts[this.success].deactivate();
        console.log("right success");
        this.success++;
      }
    }
    if(this.keys.up.isDown && !this.wasLastFrameDown){
      if(this.handPromts[this.success].rotation == 2){
        this.handPromts[this.success].deactivate();
        console.log("up success");
        this.success++;
      }
    }
    if(this.keys.down.isDown && !this.wasLastFrameDown){
      if(this.handPromts[this.success].rotation == 0){
        this.handPromts[this.success].deactivate();
        console.log("down success");
        this.success++;
      }
    }

    this.wasLastFrameDown = this.keys.up.isDown || this.keys.right.isDown || this.keys.left.isDown || this.keys.down.isDown;

    //builds the timer
    this.graphics.clear();
    if(this.over == false){
      this.graphics.save();
      this.graphics.fillRect(575, 390, -this.timer, 20);
      this.graphics.strokeRect(575, 390, -350, 20);
      this.graphics.restore();
      this.graphics.save();
    }

    //timer change over time
    this.timer -= deltaTime/10;
    if(this.timer <= 0){
      //code here handles what happens when player runs out of time
      this.timer = this.timeLimit;
      this.over = true;
      this.overlay.classList.add('hidden');
      this.scene.start('GameOver');
    }

    this.handPromts.forEach((b) => { b.draw(this.graphics); });
    if(this.success == 4){
      //handles case of player winning
      this.over = true;
      this.overlay.classList.add('hidden');
      this.scene.start('GameWin');
    }
}}

module.exports = MainScene;