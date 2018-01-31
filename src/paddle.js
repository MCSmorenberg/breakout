var paddleXpos = canvas.width/2;
var paddleYpos = canvas.height-50;
var paddleWidth = 120;
var paddleHeight = 15;

function movePaddle() {
  if(goRight === true) {
    paddleXpos = paddleXpos+4;
  } else if(goLeft === true) {
    paddleXpos = paddleXpos-4;
  }
}

function collisionPaddle() {
  if(ballY >= paddleYpos-ballRadius && ballY <= paddleYpos+paddleHeight-ballRadius && ballX >= paddleXpos && ballX < paddleXpos+paddleWidth) {
    var n = (ballX + ballRadius - paddleXpos)/(paddleWidth + ballRadius);
    var phi =  0.25*Math.PI*(2*n - 1); //pi/4 = 45

    ballSpeedY = -ballSpeed*Math.cos(phi);
    ballSpeedX = ballSpeed*Math.sin(phi);
  }
}

function drawPaddle() {
  ctx.beginPath();
  movePaddle();
  ctx.rect(paddleXpos, paddleYpos, paddleWidth, paddleHeight);
  ctx.fillStyle = "#3498DB";
  ctx.fill();
  ctx.closePath();
}
