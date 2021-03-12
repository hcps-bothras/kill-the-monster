const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint = Matter.Constraint;

var ground;
var hero;
var fly;
var backgroundImage;


function preload() {
  backgroundImage = loadImage("background.png")
}

function setup() {
  createCanvas(1000, 600);

  engine = Engine.create();
	world = engine.world;

  ground = new Ground (320,410,650,20);
  hero = new Hero (150,20,150);
  fly = new Fly (hero.body, {x:200, y:50});

  block1 = new Block (300,375,50,50);
	block2 = new Block (300,325,50,50);
	block3 = new Block (300,275,50,50);
	block4 = new Block (300,225,50,50);
	block5 = new Block (350,375,50,50);
	block6 = new Block (350,325,50,50);
	block7 = new Block (350,275,50,50);
	block8 = new Block (350,225,50,50);
	block9 = new Block (400,400,50,50);
	block10 = new Block (400,350,50,50);
	block11= new Block (400,300,50,50);
	block12 = new Block (400,250,50,50);

  Engine.run(engine); 
}

function draw() {
  background(backgroundImage);
  Engine.update(engine);

  ground.display();
  hero.display();
  fly.display();

  block1.display();
  block2.display();
  block3.display();
  block4.display();
  block5.display();
  block6.display();
  block7.display();
  block8.display();
  block9.display();
  block10.display();
  block11.display();
  block12.display();
}

function mouseDragged(){
  Matter.Body.setPosition(hero.body, {x:mouseX, y: mouseY});
}