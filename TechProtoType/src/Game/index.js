// Import outside libraries
const Phaser = require('phaser');
// Local Modules
const SerialPortReader = require('./SerialPortReader');

const config = {
  type: Phaser.AUTO,
  width: 800,
  height: 600,
};

const serial = new SerialPortReader();
let graphics;
// Phaser setup
function create() {
  graphics = this.add.graphics({
    fillStyle: { color: 0xeeeeee},
    lineStyle: { width: 3, color: 0xeeeeee},
  });
}

let radius = 5;

function update(totalTime, deltaTime) {
  graphics.clear();
  graphics.fillCircle(400, 300, radius);
}

function onSerialMessage(msg) {
  // Put your serial reading code in here. msg will be a string
 // console.log(msg);
  const vals = msg.split(':');
  if(vals[0] == 0)
  {
    radius = 5;
  }
  if(vals[0] == 1)
  {
    radius = 40;
  }
  if(vals[0] == 2)
  {
    radius = 20;
  }
}


config.scene = {
  create: create,
  update: update
}

let game;
  
// Exported Module so game can be initialized elseware
const GameManager = {
  init: () => {
    // Set serial port listener. To keep the code clean we use a helper function defined above
    serial.setListener(onSerialMessage);
    // The openPort function takes a callback function for finding the correct arduino from a list
    // and whatever you want your delimiter to be between packets
    serial.openPort(p => p.productId === "7523", '-');
    
    game = new Phaser.Game(config);
  },
};

module.exports = GameManager;
