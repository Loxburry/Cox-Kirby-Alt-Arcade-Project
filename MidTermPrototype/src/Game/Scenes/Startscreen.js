const Phaser = require('phaser');
const serialRead = require('../serialRead');

class StartScreen extends Phaser.Scene {
   constructor() { 
    super('StarScreen'); 
    serialRead.addListener(this.onSerialMessage.bind(this));
    // takes the below function and attaches it to the serial port
   }
   create(){ // HTML user interface, generate array of bullets
    this.overlay = document.querySelector('#start-screen');
    // Ever time this scene begins
    this.overlay.classList.remove('hidden'); // initialize the title prompt as not hidden
    // removes the hidden class from start-screen

    this.keys = {
        space: this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.SPACE), 
    }
    this.serialMsg = ''; 
   }

   onSerialMessage(msg){
       console.log(msg); // print out message
       this.serialMsg = msg; // storing serialMsg to access it in the update function
   }

   update(totalTime, deltaTime){ // optional use of time, weren't using these
    // 0 open finger, 1 cat paw, 2 closed
    // 0:1:1:2-
    // handValues = this.serialMsg.split(':');
    // use handValues as an array for more fingers handValues[2]
    if(serialMsg == 2){ // this only works for one finger
        this.overlay.classList.add('hidden');
        this.scene.start('MainScene');
    }
   }
}

module.exports = StartScreen;