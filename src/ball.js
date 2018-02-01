var ballRadius = 6;
var ballMiddle = ballRadius/2;

var ballX = 390;
// var ballY = canvas.height-350;
var ballY = 5;

var ballSpeedX = 0;
var ballSpeedY = 4;
var ballSpeed = Math.sqrt((ballSpeedX*ballSpeedX)+(ballSpeedY*ballSpeedY));

function drawBall() {
  ctx.beginPath();
  ctx.arc(ballX, ballY, ballRadius, 0, Math.PI*2);
  ctx.fillStyle = "#37B34E";
  ctx.fill();
  ballX += ballSpeedX;
  ballY += ballSpeedY;
  ctx.closePath();
}

function ballCollisionWall() {
  if(ballX > canvas.width-ballRadius) {
    // Right
    ballSpeedX = -ballSpeedX;
  } else if (ballX < 0+ballRadius) {
    // Left
    ballSpeedX = ballSpeedX*-1;
  } else if (ballY > canvas.height-ballRadius) {
    // Bottom
    ballSpeedY = -ballSpeedY;
  } else if (ballY < 0+ballRadius) {
    // Top
    ballSpeedY = ballSpeedY*-1;
  }
}
