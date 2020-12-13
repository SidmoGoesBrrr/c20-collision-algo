function setup() {
  createCanvas(1200,800);
   rect1 = createSprite(200,200,50,80);
  rect1.shapeColor="Cyan";
  rect1.debug = true;
   rect2 = createSprite(200,200,80,30);
  rect2.shapeColor="Cyan";
  rect2.debug = true;
  
}

function draw() {
  background(255,255,255);  
  rect2.x=World.mouseX;
  rect2.y=World.mouseY;
  if (rect2.x-rect1.x<rect1.width/2+rect2.width/2&&rect1.x-rect2.x<rect1.width/2+rect2.width/2&&rect2.y-rect1.y<rect1.height/2+rect2.height/2&&rect1.y-rect2.y<rect1.height/2+rect2.height ) {
    rect1.shapeColor="red";
    rect2.shapeColor="red";

  }
  else
  {
    rect1.shapeColor="cyan";
    rect2.shapeColor="cyan";

  }
  drawSprites();
  
}