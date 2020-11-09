class Umbrella {
    constructor(x,y,radius){
        var options = {
            isStatic: true
        }

        this.umbrella = Bodies.circle(x,y,radius,options)
        this.radius = radius;
        this.image = loadImage("Walking Frame/walking_1.png")
        World.add(world,this.umbrella)
    }

    display(){
        var pos = this.umbrella.position;        
        imageMode(CENTER)
        image(this.image,pos.x,pos.y,this.radius,this.radius)
    }
}