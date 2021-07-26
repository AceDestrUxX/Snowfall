var bg_img;
var bg;
var character_1;
var sn1;
function preload(){
  bg_img = loadImage("snow1.jpg");
}
function setup() {
  createCanvas(800,400);
  character_1 = createSprite(400, 200, 50, 50);
  bg.addImage(bg_img);
  sn1 = new Snow(400,50,10);
}

function draw() {
  background(bg);  
  sn1.display();
  drawSprites();
}