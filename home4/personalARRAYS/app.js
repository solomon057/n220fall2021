let circleY = [50, 100, 50, 100, 50];

function setup() {
  createCanvas(700, 500);
}

function draw() {
  background(100);

  for (let i = 0; i < 5; i++) {
    let circleX = 25 * (i + 1);
    circle(circleX, circleY[i], 30);

    circleY[i]++;
    
    if (circleY[i] > height) {
      circleY[i] = 10;
    }
  }
}