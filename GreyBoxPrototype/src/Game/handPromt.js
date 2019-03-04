const Phaser = require('phaser');

class handPromt {
    constructor(index, rot) {
        this.x = 0;
        this.y = 450;
        //index is a val from 0 to 3, used to determine x position
        this.index = 0;
        //rot is a value from 0 to 3, see the draw function below
        this.rotation = rot;
        this.isActive = true;

        if(index == 0){
            this.x = 250;
        }
        if(index == 1){
            this.x = 350;
        }
        if(index == 2){
            this.x = 450;
        }
        if(index == 3){
            this.x = 550;
        }
    
        this.arrowShape = [
            new Phaser.Geom.Point(-5, 0),
            new Phaser.Geom.Point(-10, 0),
            new Phaser.Geom.Point(0, 15),
            new Phaser.Geom.Point(10, 0),
            new Phaser.Geom.Point(5, 0),
            new Phaser.Geom.Point(5, -15),
            new Phaser.Geom.Point(-5, -15),
            new Phaser.Geom.Point(-5, 0)
        ]

        this.box = [
            new Phaser.Geom.Point(-25, -25),
            new Phaser.Geom.Point(-25, 25),
            new Phaser.Geom.Point(25, 25),
            new Phaser.Geom.Point(25, -25),
            new Phaser.Geom.Point(-25, -25)
        ]
    }

    activate(){
        this.isActive = true;
    }
    
    deactivate(){ 
        this.isActive = false;
    }

    
    update(deltaTime, keys){
        //connect arrow key and rotation number
        //if correct key and rotation pressed, deactivate arrow
        
        if (keys.left.isDown){
            
        }
        if (keys.right.isDown){
            
        }
        if (keys.up.isDown){
            
        }
        if (keys.down.isDown){
            
        }
        
    }
    
    draw(graphics) {
        if(this.isActive){
            // if(condition make red)
            graphics.fillStyle(0xff0000, 1.0);
            graphics.save();
            graphics.translate(this.x, this.y);
            
            //handles rotation of arrow keys
            
            if(this.rotation == 0){
                graphics.rotate(0);
            }
            if(this.rotation == 1){
                graphics.rotate(Math.PI/2);
            }
            if(this.rotation == 2){
                graphics.rotate(Math.PI);
            }
            if(this.rotation == 3){
                graphics.rotate(Math.PI*3/2);
            }
            
            //change color at some point
            //check why the first arrow is white???
            graphics.strokePoints(this.arrowShape);

            graphics.restore();
            graphics.save();
            graphics.translate(this.x, this.y);
            
            
            graphics.lineStyle(4, 0xff0000, 1.0)
            graphics.strokePoints(this.box);
            graphics.restore();
        }
        
    }
}


module.exports = handPromt;