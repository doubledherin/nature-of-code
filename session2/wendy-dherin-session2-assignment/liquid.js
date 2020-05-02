var Liquid = function(x, y, w, h, c) {
  this.x = x
  this.y = y
  this.w = w
  this.h = h
  this.c = c

  // Is the Bubble in the Liquid?
  this.contains = function(m) {
    var l = m.position
    return l.x > this.x && l.x < this.x + this.w &&
           l.y > this.y && l.y < this.y + this.h
  }

  // Calculate drag force
  this.calculateDrag = function(b) {
    var dragMagnitude = this.c * (b.surfaceArea / 5) // 🤷 

    // Direction is inverse of velocity
    var dragForce = b.velocity.copy()
    dragForce.mult(-1)

    // Scale according to magnitude
    dragForce.setMag(dragMagnitude)
    return dragForce
  }

  this.display = function() {
    noStroke()
    fill(156, 211, 219)
    rect(this.x, this.y, this.w, this.h)
  }
}
