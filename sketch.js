const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;

var box1,box2;

var ground1;

var engine, world;



function setup(){
    var canvas = createCanvas(400,400);
    engine = Engine.create();
    world = engine.world;

    box1 = new box(150,150,50,50);
    box2 = new box(300,150,50,50);

    ground1 = new ground(200,400,400,20);
}

function draw(){
    background(0);
    Engine.update(engine)
    box1.display();
    box2.display();
 ground1.display();
   
}