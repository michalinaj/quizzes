function Star() {
  this.x = random(-width, width);
  this.y = random(-height, height);
  this.z = random(width);
  this.r = 150;
  this.color = [random(255), random(255), random(255)];

  this.update = function() {
    this.z -= speed;
    if (this.z < 1) {
      this.z = width;
      this.x = random(-width, width);
      this.y = random(-height, height);
      this.color = [random(255), random(255), random(255)]
      this.pz = this.z;
    }
  };

  this.show = function() {
    fill(this.color);
    noStroke();

    var sx = map(this.x / this.z, 0, 1, 0, width);
    var sy = map(this.y / this.z, 0, 1, 0, height);

    var r = map(this.z, 15, width, 30, 0);
    ellipse(sx, sy, r, r);

    var px = map(this.x / this.pz, 0, 1, 0, width);
    var py = map(this.y / this.pz, 0, 1, 0, height);

    this.pz = -1;

    stroke(this.color);
    line(px, py, sx, sy);
  };
}