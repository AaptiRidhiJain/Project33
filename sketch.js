// const Engine = Matter.Engine,
//  World = Matter.World,
//  Events = Matter.Events,
//  Bodies = Matter.Bodies;
 
// var particles = [];
// var plinkos = [];
// var divisions = [];

// var divisionHeight=300;
// var score = 0;
// var particle;
// var turn = 0;
// var PLAY = 1;
// var END = 0;
// var gameState = PLAY;
// var yellowLine;

// function setup() {
//   createCanvas(900, 900);
//   engine = Engine.create();
//   world = engine.world;
//   ground = new Ground(width/2,height,width,20);

//   yellowLine = createSprite(450,500,900,15);
//   fill("yellow");

//    for (var k = 0; k <=width; k = k + 80) {
//      divisions.push(new Divisions(k, height-divisionHeight/2, 10, divisionHeight));
//    }

//     for (var j = 75; j <=width; j=j+50) 
//     {
    
//        plinkos.push(new Plinko(j,75));
//     }

//     for (var j = 50; j <=width-10; j=j+50) 
//     {
    
//        plinkos.push(new Plinko(j,175));
//     }

//      for (var j = 75; j <=width; j=j+50) 
//     {
    
//        plinkos.push(new Plinko(j,275));
//     }

//      for (var j = 50; j <=width-10; j=j+50) 
//     {
    
//        plinkos.push(new Plinko(j,375));
//     }
// }
 
// function draw() {
//   background("black");
//   ground.display();
//   strokeWeight(2);
//   stroke("red");
//   fill("yellow");
//   textSize(30)
//   text("Score : " + score,20,40);

//   Engine.update(engine);
  
//   if ( gameState === END) {
//     textSize(100);
//     text("GameOver", 150, 250);
//   }
  
//    for (var i = 0; i < plinkos.length; i++) {
     
//      plinkos[i].display();
     
//    }

//   //  if(frameCount % 60 === 0){
//   //    particles.push(new Particle(random(width/2-30, width/2+30), 10,10));
//   //    score++;
//   //  }
 
//   // for (var j = 0; j < particles.length; j++) {
   
//   //    particles[j].display();
//   //  }
 

//    if(particle !== null){
//     particle.display();

//      if(particle.body.position.y > 760){
//        if(particle.body.position.x < 300){
//          score = score + 500;
//          particle = null;
//          if(count >= 5) gameState = END;
//        }
//        else if(particle.body.position.x > 301 && particle.body.position.x < 600){
//               score = score + 100;
//               particle = null;
//               if(count >= 5) gameState = END;
//             }
//        else if(particle.body.position.x > 601 && particle.body.position.x < 900){
//               score = score + 200;
//               particle = null;
//               if(count >= 5) gameState = END;
//             } 
//        }
//    }

//   for (var k = 0; k < divisions.length; k++) {
//      noStroke();
//      divisions[k].display();
//    }

//    drawSprites();

//    fill("white");
//    noStroke();
//    text("500",15,650);

//    fill("white");
//    noStroke();
//    text("500",95,650);

//    fill("white");
//    noStroke();
//    text("500",175,650);

//    fill("white");
//    noStroke();
//    text("500",255,650);

//    fill("white");
//    noStroke();
//    text("100",335,650);

//    fill("white");
//    noStroke();
//    text("100",415,650);

//    fill("white");
//    noStroke();
//    text("100",495,650);

//    fill("white");
//    noStroke();
//    text("200",575,650);

//    fill("white");
//    noStroke();
//    text("200",655,650);

//    fill("white");
//    noStroke();
//    text("200",735,650);

//    fill("white");
//    noStroke();
//    text("200",815,650);
// }

// function mousePressed(){
//   if(gameState !== END){
//     count++;
//     particle = new Particle(mouseX,10,10,10);
//   }
// }

const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine, world;

var ground;
var ground1;
var ground2;
var ground3;
var particles = [];
var plinkos = [];
var divisions =[];
var particle;
var g2;

var divisionHeight=300;
var score =0;
var count = 0;
var gameState ="start";


function setup(){

var canvas = createCanvas(800, 800);

engine = Engine.create();
world = engine.world;
  
for (var k = 0; k <=width; k = k + 80) {
divisions.push(new Divisions(k, height-divisionHeight/2, 10, divisionHeight));
}

for (var j = 75; j <=width; j=j+50) {
    plinkos.push(new Plinko(j,75));
 }

 for (var j = 50; j <=width-10; j=j+50) {
     plinkos.push(new Plinko(j,175));
 }

 for (var j = 75; j <=width; j=j+50) {
     plinkos.push(new Plinko(j,275));
 }

 for (var j = 50; j <=width-10; j=j+50) {
     plinkos.push(new Plinko(j,375));
 }

ground = new Ground(width/2, 795,width,15);
ground1 = new Ground(width/2, 5,width,15);
ground2 = new Ground(795, 400,15,height);
ground3 = new Ground(5, 400,15,height);

}

function draw(){

background(0);

fill("white");
textSize(35)
  text("Score : "+score,20,40);
  

textSize(35)
  text(" 500 ", 5, 550);
  text(" 500 ", 80, 550);
  text(" 500 ", 160, 550);
  text(" 500 ", 240, 550);
  text(" 100 ", 320, 550);
  text(" 100 ", 400, 550);
  text(" 100 ", 480, 550);
  text(" 200 ", 560, 550);
  text(" 200 ", 640, 550);
  text(" 200 ", 720, 550);

Engine.update(engine);

if ( gameState =="end") {
    
    textSize(100);
    text("GameOver", 150, 250);
    //return
  }

if(particle!=null)
{
particle.display();
        
if (particle.body.position.y>760)
{
if (particle.body.position.x < 300) 
{
score=score+500;      
 particle=null;
if ( count>= 5) gameState ="end";                          
}
else if (particle.body.position.x < 600 && particle.body.position.x > 301 ) 
{
score = score + 100;
particle=null;
if ( count>= 5) gameState ="end";
}
else if (particle.body.position.x < 900 && particle.body.position.x > 601 )
{
score = score + 200;
particle=null;
if ( count>= 5)  gameState ="end";
}             
}
}  

for (var k = 0; k < divisions.length; k++) 
{
divisions[k].display();
}

for (var i = 0; i < plinkos.length; i++) {
    plinkos[i].display();  
 }

ground.display();
ground1.display();
ground2.display();
ground3.display();

}

function mousePressed()
{
  if(gameState!=="end")
  {
      count++;
     particle = new Particle(mouseX, 10, 10, 10); 
  }   
}