var bubbles = []
var liquid

function setup() {
  createCanvas(640, 640)
  liquid = new Liquid(0, height / 3, width, height, 0.01)
  // demonstrate that a big bubble floats to the surface faster than a small bubble
  var big = new Bubble(width/2, height, 5)
  var small = new Bubble(width/2, height, 2)
  bubbles.push(big)
  bubbles.push(small)
}

function draw() {
  background(0)
  liquid.display()
  drawStraw()

  if (keyIsDown(66)) {
    var b = new Bubble(width/2, height, random(1,4))
    bubbles.push(b)  
  }

  for (var i = 0; i < bubbles.length; i++) {
    // bouyancy is directly proportionaly to volume of water displaced
    var bouyancy = createVector(0, -0.01 * bubbles[i].volume)
    bubbles[i].applyForce(bouyancy)
    bubbles[i].update()
    bubbles[i].display()
  }

  for (i=0; i<bubbles.length; i++) {
    if (liquid.contains(bubbles[i])) {
      // Drag is directly proportional to surface area
      var drag = liquid.calculateDrag(bubbles[i]);
      // Apply drag force to Bubble
      bubbles[i].applyForce(drag);
    } else {
      // If the bubble is not in the liquid, pop it (i.e., remove it from the array)
      bubbles.splice(i, 1)
    }
  }
}

function drawStraw() {
  push()
    stroke(61, 169, 112)
    strokeWeight(50)
    line(0, 0, width/2, height-30)
    push()
      fill(0)
      noStroke()
      ellipse(width/2, height-30, 50, 50)
    pop()
  pop()
}
