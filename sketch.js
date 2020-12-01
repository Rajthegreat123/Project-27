
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Render = Matter.Render;
const Constraint = Matter.Constraint;
var bobObject1, bobObject2, bobObject3, bobObject4, bobObject5, groundObject;	
var rope1;
var world;

function preload()
{
	
}

function setup() {
	createCanvas(600, 600);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
	bobObject1 = new bob(150,450,80);
	bobObject2 = new bob(230,450,80);
	bobObject3 = new bob(310,450,80);
	bobObject4 = new bob(390,450,80);
	bobObject5 = new bob(470,450,80);
	groundObject = new ground(width/2,100,450,40);

	rope1 = new rope(bobObject1.body, groundObject.body,  bob.r * 4 , 0)

	var options = {
		isStatic: false,
		restitution: 0.3,
		friction: 0.5,
		density: 1.2
	}

	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(178, 191, 212);
  
  bobObject1.display()
  bobObject2.display()
  bobObject3.display()
  bobObject4.display()
  bobObject5.display()
  groundObject.display()
  rope1.display()
}



