var helicopterIMG, helicopterSprite, packageSprite, packageIMG;
var packageBody,ground, rect1, rect2, rect3;
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

function preload()
{
	helicopterIMG=loadImage("helicopter.png")
	packageIMG=loadImage("package.png")
}

function setup() {
	createCanvas(800, 700);
	rectMode(CENTER);
	

	packageSprite=createSprite(width/2, 200, 10,10);
	packageSprite.addImage(packageIMG)
	packageSprite.scale=2

	helicopterSprite=createSprite(width/2, 200, 10,10);
	helicopterSprite.addImage(helicopterIMG)
	helicopterSprite.scale=0.6

	groundSprite=createSprite(width/2, height-35, width,10);
	groundSprite.shapeColor=color(255)


	engine = Engine.create();
	world = engine.world;

	packageBody = Bodies.circle(width/2 , 200 , 5 , {restitution:0.01, isStatic:true});
	World.add(world, packageBody);
	

	//Create a Ground
	ground = Bodies.rectangle(width/2, 650, width, 10 , {isStatic:true} );
 	World.add(world, ground);

	Engine.run(engine);

	rect1 = new Rect (400, 640, 300, 20);
	rect2 = new Rect (250, 600, 20, 100);
	rect3 = new Rect (550, 600, 20, 100);
  
}


function draw() {
  rectMode(CENTER);
  background(0);
  //packageSprite.x= packageBody.position.x 
  //packageSprite.y= packageBody.position.y 
  rect1.display();
  rect2.display();
  rect3.display();

  if (keyDown("RIGHT_ARROW")){
    helicopterSprite.x = helicopterSprite.x + 5;
    packageSprite.x =packageSprite.x + 5;	  
  }
  if (keyDown("LEFT_ARROW")){
    helicopterSprite.x = helicopterSprite.x - 5;
    packageSprite.x = packageSprite.x - 5;
  }

	drawSprites();
}

function keyPressed() {
 if (keyCode === DOWN_ARROW) {
    // Look at the hints in the document and understand how to make the package body fall only on
    Matter.Body.setStatic (packageBody, false);
  }
}



