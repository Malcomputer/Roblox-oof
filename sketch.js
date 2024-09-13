var button;
var press;

 
function setup() {
  createCanvas(400,600);
  background(30,30,30);
  button = new Button();
  press = new audio();
}

function touchMoved() {
  fill(0);
  strokeWeight(10);
  line(mouseX, mouseY, pmouseX, pmouseY);
  // prevent default
  return false;
}

function draw() {
  button.text3();
}

function keyPressed() {
  audio();
  show();
}

function touchStarted() {
  keyPressed();
}

function mousePressed() {
  keyPressed();
}