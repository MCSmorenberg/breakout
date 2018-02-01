var ballRadius = 6;
var ballX = 500;
var ballY = 400;
var ballSpeedX = 0;
var ballSpeedY = 4;
var ballSpeed = Math.sqrt((ballSpeedX*ballSpeedX)+(ballSpeedY*ballSpeedY));

var lives = 2;
var dead = false;
var resetBricks = false;

function drawBall() {
  ctx.beginPath();
  ctx.arc(ballX, ballY, ballRadius, 0, Math.PI*2);
  ctx.fillStyle = "#00cc00";
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
  } else if (ballY < 0+ballRadius) {
    // Top
    ballSpeedY = ballSpeedY*-1;
  } else if (ballY > canvas.height) {
    // Bottom

    dead = true;
    lives--;
    // window.cancelAnimationFrame();
    if(lives < 0) {
      alert("Game over!!")
      lives = 2;
      resetBricks = true;

      // TODO: Put this somewhere
      // if(resetBricks === true) {
      //   this.brickWidth = 44;
      //   this.brickHeight = 18;
      //   this.visible = true;
      // }

    } else {
      alert("You are dead!!")
    }
    resetBallPaddle();
  }
}

function resetBallPaddle() {
  ballX = 500;
  ballY = 400;
  ballSpeedX = 0;
  ballSpeedY = 4;
  goLeft = false;
  goRight = false;
  paddleXpos = canvas.width/2;
}

function drawLives() {
  ctx.font = "18px Comic Sans MS";
  ctx.fillStyle = "#3498DB";
  ctx.fillText("Lives: " + lives, 115, 22);
}
