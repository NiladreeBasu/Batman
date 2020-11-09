const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;

var chaati,boyImg;
var maxDrops = 100;
var rain;
var thunder1Img,thunder2Img,thunder3Img,thunder4Img;
var thunder;

function preload(){
   thunder1Img = loadImage("thunderbolt/1.png")
   thunder2Img = loadImage("thunderbolt/2.png")
   thunder3Img = loadImage("thunderbolt/3.png")
   thunder4Img = loadImage("thunderbolt/4.png")
}

function setup(){
   var canvas = createCanvas(800,800)
   engine = Engine.create();
   world = engine.world;

   chaati = new Umbrella(400,640,175);
}

function draw(){
    background("lightgreen")
    Engine.update(engine);

    for(var i=0;i<maxDrops;i+5){
        
    }

    if(frameCount%60 === 0){
        rain = new Drop(random(0,400),30,9);
        rain.display();

        switch(random(0,3)){
            case 1: 
                thunder.addImage(thunder1Img);
                break;

            case 2:
                thunder.addImage(thunder2Img);
                break;
            
            case 3:
                thunder.addImage(thunder3Img);
                break;
            
            default: 
                thunder.addImage(thunder4Img);
        }
    }
    
    thunder = createSprite(random(50,750),100,40,40)    

    chaati.display();
    
    rain.updaterain();

    drawSprites();
}   


