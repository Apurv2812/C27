const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint = Matter.Constraint;

var constraintBob1,constraintBob2,constraintBob3,constraintBob4,constraintBob5;
function preload()
{
	
}

function setup() {
	createCanvas(1500, 800);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.

	roof = new Roof(width/2,height/4,width/7,20);

	bobDiameter=40;
    startBobPositionX=width/2;
	startBobPositionY=height/4+500;

	constraintBob1 = new Bob(startBobPositionX-bobDiameter*2,startBobPositionY,bobDiameter);
	constraintBob2 = new Bob(startBobPositionX-bobDiameter,startBobPositionY,bobDiameter);
	constraintBob3 = new Bob(startBobPositionX,startBobPositionY,bobDiameter)
	constraintBob4 = new Bob(startBobPositionX+bobDiameter,startBobPositionY,bobDiameter);
	constraintBob5 = new Bob(startBobPositionX+bobDiameter*2,startBobPositionY,bobDiameter);
	
	

	
	rope1 = new Rope(constraintBob1.body,roof.body,-bobDiameter*2, 0);
	rope2 = new Rope(constraintBob2.body,roof.body,-bobDiameter*1, 0);
	rope3 = new Rope(constraintBob3.body,roof.body,0, 0);
	rope4 = new Rope(constraintBob4.body,roof.body,bobDiameter*1, 0);
	rope5 = new Rope(constraintBob5.body,roof.body,bobDiameter*2, 0);
	
	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(255);

  roof.display();
  
  constraintBob1.display();
  constraintBob2.display();
  constraintBob3.display();
  constraintBob4.display();
  constraintBob5.display();

  rope1.display();
  rope2.display();
  rope3.display();
  rope4.display();
  rope5.display();

  
  
  drawSprites();
 
}

function keyPressed() {
	if (keyCode === UP_ARROW) {

	  Matter.Body.applyForce(constraintBob1.body,constraintBob1.body.position,{x:-50,y:-45});

	}
}


function drawLine(constraint)
{
	bobBodyPosition=constraint.bodyA.position
	roofBodyPosition=constraint.bodyB.position

	roofBodyOffset=constraint.pointB;
	
	roofBodyX=roofBodyPosition.x+roofBodyOffset.x
	roofBodyY=roofBodyPosition.y+roofBodyOffset.y
	line(bobBodyPosition.x, bobBodyPosition.y, roofX,roofY);
}

