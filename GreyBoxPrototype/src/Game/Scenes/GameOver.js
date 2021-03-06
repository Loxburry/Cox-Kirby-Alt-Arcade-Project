const Phaser = require('phaser');

class GameOver extends Phaser.Scene {
   constructor() { 
    super('GameOver'); 
   }
   create(){ // HTML user interface, generate array of bullets
    this.overlay = document.querySelector('#game-over');
    // Ever time this scene begins
    this.overlay.classList.remove('hidden'); // initialize the title prompt as not hidden
    // removes the hidden class from game-screen

    this.keys = {
        space: this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.SPACE), 
    } 
   }
   update(totalTime, deltaTime){ // optional use of time, weren't using these
   console.log("game win"); 
   if(this.keys.space.isDown){
        this.overlay.classList.add('hidden');
        // make it hidden
        this.scene.start('Startscreen'); // transition to start scene
    }
   }
   // Hi Willie! From Me~ Kenny
}

module.exports = GameOver;