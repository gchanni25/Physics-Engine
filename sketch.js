const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;

var engine, world;
var object;

var ground

function setup() {
  createCanvas(400,400);
  engine = Engine.create();
  world = engine.world;
  var objectOptions = {
    restitution: 2.0,
    density: 0.5
  }
  object = Bodies.circle(200,100,50,objectOptions);
  World.add(world,object);
  console.log(object.position.y);
  var groundOptions = {
    isStatic: true
  }
  ground = Bodies.rectangle(200,390,400,20,groundOptions);
  World.add(world,ground);
}

function draw() {
  background(0,0,0);  
  Engine.update(engine);


  rectMode(CENTER);
  rect(ground.position.x,ground.position.y,400,20);

  ellipse(object.position.x,object.position.y,50,50);
  drawSprites();
}