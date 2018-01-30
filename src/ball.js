var ballRadius = 6;

var ballX = 390;
var ballY = canvas.height-350;

var ballSpeedX = 0;
var ballSpeedY = 3;
var ballSpeed = Math.sqrt((ballSpeedX*ballSpeedX)+(ballSpeedY*ballSpeedY));

function drawBall() {
    ctx.beginPath();
    ctx.arc(ballX, ballY, ballRadius, 0, Math.PI*2);
    ctx.fillStyle = "#37B34E";
    ctx.fill();
    ctx.closePath();
}

function ballCollisionWall() {
  if(ballX > canvas.width-ballRadius) {
    ballSpeedX = -ballSpeedX;
  } else if (ballX < 0+ballRadius) {
    ballSpeedX = ballSpeedX*-1;
  } else if (ballY > canvas.height-ballRadius) {
    ballSpeedY = -ballSpeedY;
  } else if (ballY < 0+ballRadius) {
    ballSpeedY = ballSpeedY*-1;
  }
}
