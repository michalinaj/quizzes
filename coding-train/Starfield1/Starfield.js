let width = 800;
let height = 800;

let stars = [];
let speed;

function setup() {
  createCanvas(width, height);
  for (let i = 0; i < 300; i++) {
    stars[i] = new Star();
  }
}

function draw() {
  background(0);
  speed = map(mouseX, 0, width, 0, 25);
  translate(width / 2, height / 2);
  for (let i = 0; i < stars.length; i++) {
    stars[i].update();
    stars[i].show();
  }
}