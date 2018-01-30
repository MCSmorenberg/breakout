var canvas = document.getElementById("breakout");
var ctx = canvas.getContext("2d");

function draw() {
  ctx.clearRect(0, 0, canvas.width, canvas.height);
  drawPaddle();
  drawBall();
  ballX += ballSpeedX;
  ballY += ballSpeedY;
  collisionPaddle();
  ballCollisionWall();
}

function step() {
  draw();
  window.requestAnimationFrame(step);
}

window.requestAnimationFrame(step);
