var canvas = document.getElementById("breakout");
var ctx = canvas.getContext("2d");
var font = "Tahoma";
// var myReq = requestAnimationFrame(step);

function draw() {
  ctx.clearRect(0, 0, canvas.width, canvas.height);
  drawPaddle();
  drawBrick();
  drawBall();
  drawScore();
  drawLives();
  collisionPaddle();
  ballCollisionWall();
}

function step() {
  draw();
  window.requestAnimationFrame(step);
}

window.requestAnimationFrame(step);
