var isac
var nando
var victor
var breno

const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

function preload()
{
	
}

function setup() {
	createCanvas(1200, 700);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
    nando=new Sky(800,670,1600,20);
	breno=new Sky(1000,600,20,120);
	victor=new Sky(1175,600,20,120);
    isac=Bodies.circle(260,100,20);
	World.add(world,isac);
	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(0);
  
  drawSprites();
  nando.show();
  breno.show();
  victor.show();
  ellipse(isac.position.x,isac.position.y,20,20);
}

function keyPressed(){
	if(keyCode === UP_ARROW){
	Matter.Body.applyForce(isac,isac.position,{
	x:0.09,
	y:-0.05,
	})
	}
}

