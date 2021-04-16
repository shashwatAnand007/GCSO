
var speed, weight;
var Deformation;
var Car;
var Wall;

var Zeina, Baleno, Awaken;
function setup() {
  createCanvas(1600,400);
  
  speed = random(55,99);
  weight = random(400,1500);
  Car = createSprite(50,200,50,50);
  Car.shapeColor = color(255);
  Wall= createSprite(1500,200,30,height/2);
  Wall.shapeColor = color(80,80,80);
  Car.velocityX = speed;

   
}

function draw() {
  background("black");
   
  if(Wall.x-Car.x < (Car.width + Wall.width)/2){
    Car.velocityX = 0
    Deformation = (0.5 * weight * speed * speed)/22500;
    if(Deformation > 180){
      Car.shapeColor = color(255,0,0);
    }

    if(Deformation < 180 && Deformation > 100){
      Car.shapeColor = color(230,230,0);
    }

    if(Deformation < 100){
      Car.shapeColor = color(0,255,0);
    }
  }

  drawSprites();
}



