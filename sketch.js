
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

function preload()
{
	
}

function setup() {
	createCanvas(800, 700);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
	roof1 = new Roof(400,300,200,40);

	  bob1 = new Bob(200,500,5);
	  bob2 = new Bob(250,500,5);
	  bob3 = new Bob(300,500,5);
	  bob4 = new Bob(350,500,5);
	  bob5 = new Bob(400,500,5);

	  chain1 = new Chain(bobObject1.body, roofObject.body, -bobDiameter*2, 0);
	  chain2 = new Chain(bobObject2.body, roofObject.body, -bobDiameter*2, 0);
	  chain3 = new Chain(bobObject3.body, roofObject.body, -bobDiameter*2, 0);
	  chain4 = new Chain(bobObject4.body, roofObject.body, -bobDiameter*2, 0);
	  chain5 = new Chain(bobObject5.body, roofObject.body, -bobDiameter*2, 0);

	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(0);
  
 roof1.display();

 bob1.display();
 bob2.display();
 bob3.display();
 bob4.display();
 bob5.display();

 chain1.display();
 chain2.display();
 chain3.display();
 chain4.display();
 chain5.display();


  drawSprites();
 
}



