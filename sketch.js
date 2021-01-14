const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;

var engine, world;
var box1,box2;

function setup(){
    var canvas = createCanvas(400,400);
    engine = Engine.create();
    world = engine.world;
//1) sprite= new Class(x,y,w,h)
  box1 = new Box(200,300,40,40);
  box2 = new Box(200,250,40,40);
}

function draw(){
    background(0);
    Engine.update(engine);
    //2) sprite.display();
   box1.display();
   box2.display();
}