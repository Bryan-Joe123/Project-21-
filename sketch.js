var wall, bullet;
var speed, weight, thickness, deformation;

function setup() {
  createCanvas(1600,400);

  thickness=Math.round(random(22,83));
  wall=createSprite(1500, height/2, thickness, height/2);

  bullet=createSprite(50,height/2,75,15);
  speed = Math.round(random(223,321));
  weight = Math.round(random(30,52));
  
  bullet.velocityX=speed;

  
}

function draw() {
  background("black");  
  drawSprites();
  if(collideWith(bullet,wall)){
    bullet.velocityX=0;
    deformation=(0.5*weight*speed*speed)/(thickness*thickness*thickness);
    setColor(deformation,bullet);
  }
}
