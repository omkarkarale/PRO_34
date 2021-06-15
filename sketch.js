const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine, world;
var box1, box2, box3,box4;
var hero,monster,rope,ground;

function preload() {
  bg = loadImage("gamingbackground2.png");
}

function setup() {
  createCanvas(1400, 700);
  engine = Engine.create();
  world = engine.world;

  ground = new Ground(600, 600, 1200, 20);

  hero = new Hero(0,100,250,150);
  rope = new Rope(hero.body, { x: 600, y: 50 });
  monster = new Monster(1100,550,300);

  box01 = new Box(600, 100, 70, 70);
  box02 = new Box(900, 100, 70, 70);
  box03 = new Box(900, 100, 70, 70);
  box04 = new Box(900, 100, 70, 70);
  box05 = new Box(600, 100, 70, 70);
  box06 = new Box(600, 100, 70, 70);
  box07 = new Box(600, 100, 70, 70);
  box08 = new Box(600, 100, 70, 70);
  box09 = new Box(600, 100, 70, 70);
  box10 = new Box(700, 100, 70, 70);
  box11 = new Box(700, 100, 70, 70);
  box12 = new Box(700, 100, 70, 70);
  box13 = new Box(700, 100, 70, 70);
  box14 = new Box(700, 100, 70, 70);
  box15 = new Box(700, 100, 70, 70);
  box16 = new Box(700, 100, 70, 70);
  box17 = new Box(700, 100, 70, 70);
  box18 = new Box(800, 100, 70, 70);
  box19 = new Box(800, 100, 70, 70);
  box20 = new Box(800, 100, 70, 70);
  box21 = new Box(800, 100, 70, 70);
  box22 = new Box(800, 100, 70, 70);
  box23 = new Box(900, 100, 70, 70);
  box24 = new Box(900, 100, 70, 70);
  box25 = new Box(900, 100, 70, 70);
  box26 = new Box(600, 100, 70, 70);

}

function draw() {
  background(bg);
  Engine.update(engine);
  ground.display();
  box01.display();
  box02.display();
  box03.display();
  box04.display()
  box05.display();
  box06.display();
  box07.display();
  box08.display();
  box09.display();
  box10.display();
  box11.display();
  box12.display();
  box13.display();
  box14.display();
  box15.display();
  box16.display();
  box17.display();
  box18.display();
  box19.display();
  box20.display();
  box21.display();
  box22.display();
  box23.display();
  box24.display();
  box25.display();
  box26.display();

  hero.display();
  rope.display();
  monster.display();

}
function mouseDragged(){
  Matter.Body.setPosition(hero.body, {x:mouseX, y:mouseY});
}