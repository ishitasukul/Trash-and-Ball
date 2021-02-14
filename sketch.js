
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

function preload()
{
	bkgIMG=loadImage("trash.jpg");
}

function setup() {
	createCanvas(1200, 700);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
	ground= new Ground (600, 680, 1200, 50);

	paperball= new Paper (30,400);
	bin1= new Bin(955, 480,300, 350);

	bin2= new Bin (840, 480, 30, 350);
	bin3= new Bin (1070, 480, 30, 350);
	

	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(bkgIMG);
  paperball.depth=ground.depth;
  paperball.depth=paperball.depth+1;

  
 
  paperball.display();
  bin2.display();
  bin3.display();
  bin1.display();
 
  ground.display();
  
  keyPressed();
  drawSprites();
 
}

function keyPressed(){
	if (keyDown(UP_ARROW)){
	  Matter.Body.applyForce(paperball.body,paperball.body.position, {x:15, y:-15});
	}
  
}


