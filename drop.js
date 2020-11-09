class Drop {
    constructor(x,y,radius){
        var options = {
            friction: 0.2,
            isStatic: false
        }     

        this.drop = Bodies.circle(x,y,radius,options)
        this.radius = radius;
        World.add(world,this.drop)
    }
    
    display(){
        var pos = this.drop.position;
        fill("blue")
        strokeWeight(3)
        stroke("lightblue");
        ellipseMode(RADIUS)
        ellipse(pos.x,pos.y,this.radius,this.radius)
    }

    updaterain(){
        if(this.drop.position > 700){
            Matter.Body.setPosition(this.drop,{x: random(0,400), y: 30})
        }
    }
} 

