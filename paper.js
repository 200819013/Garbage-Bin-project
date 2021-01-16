class Paper {
    constructor(x,y,radius) {

    
var options={

isStatic:false, 
restitution:0.3,
frictions:0.5,
density:1.2,

    }
    }
    display(){
        var angle = this.body.angle
        push();
        translate(this.body.position.x, this.body.position.y)
        rotate(angle)
        pop();
    }
}