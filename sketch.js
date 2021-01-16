
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var ground 
var paper
var block, block2, block3

function preload()
{
}

function setup() {
	createCanvas(800, 700);


	engine = Engine.create();
	world = engine.world;

	ground = new Ground(400, 600, 800, 10)
	paper = new Paper(200, 610, 10)

}


function draw() {
  
  background(0);
  Engine.update(engine);

 ground.display();
 paper.display();
 
}



