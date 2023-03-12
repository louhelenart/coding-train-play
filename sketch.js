let ovalX=100;
let ovalY=100;
function setup() {
createCanvas (windowWidth,windowHeight)
background (255,0,255)

}

function draw() {
stroke(255,0,0)
  fill (0,0,255,50)
  ellipse (ovalX,ovalY,20,75)
  ovalX=ovalX+1
  ovalY=mouseY
}
function mousePressed() { 
  background (0, 0, 255)
 ellipse (ovalX,ovalY,20,75)
  ovalX=mouseX
  ovalY=mouseY
}
function mouseReleased() { 
  background (255, 0, 255)
}