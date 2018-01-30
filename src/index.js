var canvas = document.getElementById("breakout");
var ctx = canvas.getContext("2d");

var start = null;

var ballRadius = 6;

var ballX = 390;
var ballY = canvas.height-350;

var ballSpeedX = 0;
var ballSpeedY = 3;
var ballSpeed = Math.sqrt((ballSpeedX*ballSpeedX)+(ballSpeedY*ballSpeedY));

var goRight = false;
var goLeft = false;

var paddleXpos = canvas.width/2;
var paddleYpos = canvas.height-50;
var paddleWidth = 120;
var paddleHeight = 20;

document.addEventListener("keydown", keyDown, false);
document.addEventListener("keyup", keyUp, false);

function keyDown(event) {
  if(event.keyCode == 39) {
    goRight = true;
  }
  else if(event.keyCode == 37) {
    goLeft = true;
  }
}

function keyUp(event) {
  if(event.keyCode == 39) {
    goRight = false;
  }
  else if(event.keyCode == 37) {
    goLeft = false;
  }
}

function movePaddle() {
  if(goRight == true) {
    paddleXpos = paddleXpos+4;
  } else if(goLeft == true) {
    paddleXpos = paddleXpos-4;
  }
}

function collisionWall() {
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

function collisionPaddle() {
  if(ballY == paddleYpos-ballRadius && ballX >= paddleXpos && ballX < paddleXpos+paddleWidth) {

    var n = (ballX + ballRadius - paddleXpos)/(paddleWidth + ballRadius);
    var phi =  0.25*Math.PI*(2*n - 1); //pi/4 = 45
    ballSpeedY = -ballSpeed*Math.cos(phi);
    ballSpeedX = ballSpeed*Math.sin(phi);


    // var n = (ballX + ballRadius - paddleXpos)/(paddleWidth + ballRadius);
    // var phi =  0.25*Math.PI*(2*n - 1); //pi/4 = 45
    // ballSpeedX = ballSpeedX*Math.cos(phi);
    // ballSpeedY = ballSpeedY*Math.sin(phi);
  }
  // if(ballY == paddleYpos+paddleHeight+ballRadius && ballX >= paddleXpos-ballRadius && ballX < (paddleXpos+paddleHeight)+paddleWidth-(ballRadius*2)) {
  //   console.log('bottom paddle');
  //   ballSpeedY = -ballSpeedY;
  // }
  //
  // if (ballX == paddleXpos-ballRadius && ballY >= paddleYpos && ballY < paddleYpos+paddleHeight) {
  //   console.log('left side paddle');
  //   ballSpeedX = -ballSpeedX;
  // }
  // if (ballX == paddleXpos+paddleWidth+ballRadius && ballY >= paddleYpos && ballY < paddleYpos+paddleHeight) {
  //   console.log('right side paddle');
  //   ballSpeedX = ballSpeedX*-1;
  // }
}

function drawPaddle() {
    ctx.beginPath();
    movePaddle();
    ctx.rect(paddleXpos, paddleYpos, paddleWidth, paddleHeight);
    ctx.fillStyle = "#3498DB";
    ctx.fill();
    ctx.closePath();
}

function drawBall() {
    ctx.beginPath();
    ctx.arc(ballX, ballY, ballRadius, 0, Math.PI*2);
    ctx.fillStyle = "#37B34E";
    ctx.fill();
    ctx.closePath();
}

function draw() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    drawPaddle();
    drawBall();
    ballX += ballSpeedX;
    ballY += ballSpeedY;
    collisionPaddle();
    collisionWall();
}


function step(timestamp) {
  if (!start) start = timestamp;
  var progress = timestamp - start;

  draw();

  window.requestAnimationFrame(step);
}

window.requestAnimationFrame(step);
