var quadrado

function setup() {
  createCanvas(400,400);
  quadrado = createSprite (200,100,50,100)
 quadrado.shapeColor = "red"
}

function draw() 
{
  background(30);
  if (keyIsDown(UP_ARROW)) {
    quadrado.y = quadrado.y -2
    background ("blue")
  }
drawSprites ()
}




