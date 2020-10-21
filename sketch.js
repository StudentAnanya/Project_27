const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint = Matter.Constraint;

var bobObject1, bobObject2, bobObject3, bobObject4, bobObject5
var roofObj;
var rope1, rope2, rope3, rope4, rope5;
var world;

function setup() {
	createCanvas(1600, 700);

	engine = Engine.create();
    world = engine.world;

    roofObj = new Roof(width/2,height/4,width/7,50);
    bobDiameter = 60;

    startingPosX = width/2;
    startingPosY = height/4+500;

    bobObject1 = new Bob(startingPosX-bobDiameter*2,startingPosY,bobDiameter);
    bobObject2 = new Bob(startingPosX-bobDiameter,startingPosY,bobDiameter);
    bobObject3 = new Bob(startingPosX,startingPosY,bobDiameter);
    bobObject4 = new Bob(startingPosX-bobDiameter,startingPosY,bobDiameter);
    bobObject5 = new Bob(startingPosX-bobDiameter*2,startingPosY,bobDiameter);

    rope1 = new Rope(bobObject1.body,roofObj.body,-bobDiameter*2,0)
    rope2 = new Rope(bobObject2.body,roofObj.body,-bobDiameter,0)
    rope3 = new Rope(bobObject3.body,roofObj.body,0,0)
    rope4 = new Rope(bobObject4.body,roofObj.body,bobDiameter,0)
    rope5 = new Rope(bobObject5.body,roofObj.body,bobDiameter*2,0)

	Engine.run(engine);
     
}

function draw() {

    rectMode(CENTER);
    background(230);
    roofObj.display();

    rope1.display()
    rope2.display()
    rope3.display()
    rope4.display()
    rope5.display()
    bobObject1.display();
    bobObject2.display();
    bobObject3.display();
    bobObject4.display();
    bobObject5.display();

  }
  
  function keyPressed(){
  if(keyCode === UP_ARROW){
      Matter.Body.applyForce(bobObject1.body,bobObject1.body.position,{x:-50,y:-45});
  }

  }

  function drawLine(constraint)
  {

  bobBodyPosition=constraint.bodyA.position
  roofBodyPosition=constraint.bodyB.position

  roofBodyOffset=constraint.pointB;

  roofBodyX=roofBodyPosition.x+roofBodyOffset.x
  roofBodyY=roofBodyPosition.y+roofBodyOffset.y
  
  line(bobBodyPosition.x,bobBodyPosition.y,roofBodyX,roofBodyY);
  }