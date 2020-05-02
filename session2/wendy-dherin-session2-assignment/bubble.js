function Bubble(x, y, r) {
  this.position = createVector(x, y)
  this.velocity = createVector(random(-2, 2), 0)
  this.acceleration = createVector(0, 0)
  this.radius = r
  this.surfaceArea = 4 * PI * (r * r)
  this.volume = (4 / 3) * PI * (r * r * r)

  this.applyForce = function(force) {
    var f = force.copy()
    f.div(this.radius)
    this.acceleration.add(f)
  }

  this.update = function() {
    this.velocity.add(this.acceleration)
    this.position.add(this.velocity)
    this.acceleration.set(0, 0)
  }

  this.display = function() {
    fill(255, 150)
    noStroke()
    ellipse(this.position.x, this.position.y, this.radius*10, this.radius*10)
  }
}
