let img;
let img2;
function preload() {
  img = loadImage('umbrella.png');
  img2 = loadImage('umbrella.png');
}

function setup() {
  createCanvas(400, 400);
  background("skyblue")
  fill("#004a35")
  noStroke()
   rect(30, 100, 350, 200);
  fill("white")
    rect(30, 150, 350, 80);
  image(img, 40, 255,-30, -30);
  image(img2,345, 255, -30, -30)
  
  
}
function draw() {
  fill('white');
  textSize(50);
  textStyle(BOLD);
  text('Welcome to', 60, 140);
  
  fill('black')
  textSize(45);
  textStyle(BOLD);
  text('RACCOON CITY', 29, 205);
  
  fill('white')
  textSize(30);
  textStyle(BOLD);
  text('Home of Umbrella', 80, 280);
  image()
}


