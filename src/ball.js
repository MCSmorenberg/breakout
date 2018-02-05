var ballRadius = 6;
var ballX = 500;
var ballY = 400;
var ballSpeedX = 0;
var ballSpeedY = 5;
var ballSpeed = Math.sqrt((ballSpeedX*ballSpeedX)+(ballSpeedY*ballSpeedY));

var lives = 1;

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
    if(lives === 0) {
      gameOver();

    } else if (lives > 0) {
      drawURDead();
      drawContinue();

      if(continueGame === true ){
        lives--;
        resetBallPaddle();
      }
    }
  }
}

function gameOver() {
  drawGameOver();
  drawContinue();

  if(continueGame === true ){
    resetBallPaddle();
    resetScoreLives();
    resetBricks();
  }
}

function drawGameOver() {
  ctx.font = "bold 100px " + font;
  ctx.fillStyle = "#3498DB";
  ctx.fillText("GAME OVER", 150, canvas.height/2+50);
}

function resetBallPaddle() {
  ballX = 500;
  ballY = 400;
  ballSpeedX = 0;
  ballSpeedY = 4;
  paddleXpos = canvas.width/2;
}

function resetScoreLives() {
  lives = 1;
  score = 0;
}

function resetBricks() {
  bricks = [];
  brickYpos = 30;
  createBricks();
}

function drawLives() {
  ctx.font = "18px " + font;
  ctx.fillStyle = "#3498DB";
  ctx.fillText("Lives: " + lives, 115, 22);
}

function drawURDead() {
  ctx.font = "bold 100px " + font;
  ctx.fillStyle = "#3498DB";
  ctx.fillText("You are dead!", 110, canvas.height/2+50);
}

function drawContinue() {
  ctx.font = "20px " + font;
  ctx.fillStyle = "#3498DB";
  ctx.fillText("(Press SPACE BAR to continue)", 333, canvas.height/2+95);
}
