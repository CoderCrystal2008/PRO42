var hr, mn, sc;
var scAngle;
var mnAngle;
var hrAngle;


function setup() {
  createCanvas(800,400);
  

  
  
}

function draw() {
  background(255,255,255);  
  hr = hour();
  mn = minute();
  sc = second();
  translate(400,200);
  rotate(-90);
  angleMode(DEGREES);

  fill(255, 100, 0);
  ellipse(0, 0, 200, 200);
  scAngle = map(sc, 0, 60, 0, 360);
  mnAngle = map(mn, 0, 60, 0, 360);
  hrAngle = map(hr, 0, 60, 0, 360);

  //creates the second hand
  push();
  rotate(scAngle);
  stroke("purple");
  strokeWeight(4);
  line(0,0,100,0);
  pop();

  //creates the minute hand
  push();
  rotate(mnAngle);
  stroke("blue");
  strokeWeight(4);
  line(0,0,100,20);
  pop();

  //creates the hour hand
  push();
  rotate(hrAngle);
  stroke("black");
  strokeWeight(4);
  line(0, 0, 100, 30);
  pop();
  
  drawSprites();
}