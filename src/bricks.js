var bricks = [];
var amountBricks = 19;
var brickXpos = 4;
var brickYpos = 20;

function Brick(brickXpos, brickYpos, i) {
  this.index = i;
  this.brickXpos = brickXpos;
  this.brickYpos = brickYpos;
  this.brickWidth = 45;
  this.brickHeight = 18;
  this.visible = true;
  this.brickCollision = function() {
    // if(ballY == this.brickYpos-ballRadius && ballX >= this.brickXpos && ballX < this.brickXpos+this.brickWidth) {
    //   console.log('top this.brick');
    //   ballSpeedY = -ballSpeedY;
    // }
    // if(ballY == this.brickYpos + this.brickHeight + ballRadius && ballX >= this.brickXpos-ballRadius && ballX < (this.brickXpos+this.brickHeight)+this.brickWidth-(ballRadius*2)) {
    //   console.log('bottom this.brick');
    //   ballSpeedY = -ballSpeedY;
    // }
    //Bottom
    if(ballY < this.brickYpos+this.brickHeight+ballRadius && ballX >= this.brickXpos-ballRadius && ballX < this.brickXpos+this.brickWidth-ballRadius) {
      ballSpeedY = -ballSpeedY;
      this.brickHeight = 0;
      this.brickWidth = 0;
      this.visible = false;
    }
    // if (ballX > this.brickXpos-ballRadius && ballY >= this.brickYpos && ballY < this.brickYpos+this.brickHeight) {
    //   console.log('left side this.brick');
    //   ballSpeedX = -ballSpeedX;
    //   this.brickHeight = 0;
    //   this.brickWidth = 0;
    //   this.visible = false;
    // }
    // if (ballX < this.brickXpos+this.brickWidth+ballRadius && ballY >= this.brickYpos && ballY < this.brickYpos+this.brickHeight) {
    //   console.log('right side this.brick');
    //   ballSpeedX = ballSpeedX*-1;
    //   this.brickHeight = 0;
    //   this.brickWidth = 0;
    //   this.visible = false;
    // }
  }
}

function createBricks() {
  for (var i = 0; i < amountBricks; i++) {
    var brick = new Brick(brickXpos, brickYpos, i);
    bricks.push(brick);
    drawBrick();
    brickXpos = brickXpos + 47;
  }
}
createBricks();

function drawBrick() {
  for (var i = 0; i < bricks.length; i++) {
    ctx.beginPath();
    ctx.rect(bricks[i].brickXpos, bricks[i].brickYpos, bricks[i].brickWidth, bricks[i].brickHeight);
    if(bricks[i].visible){
      bricks[i].brickCollision();
    }
    ctx.fillStyle = "#f44e42";
    ctx.fill();
    ctx.closePath();
  }
}

// function collisionBrick() {
//   if(ballY == brickYpos-ballRadius && ballX >= brickXpos && ballX < brickXpos+brickWidth) {
//     console.log('top brick');
//     ballSpeedY = -ballSpeedY;
//   }
//   if(ballY == brickYpos+brickHeight+ballRadius && ballX >= brickXpos-ballRadius && ballX < (brickXpos+brickHeight)+brickWidth-(ballRadius*2)) {
//     console.log('bottom brick');
//     ballSpeedY = -ballSpeedY;
//   }
//
//   if (ballX == brickXpos-ballRadius && ballY >= brickYpos && ballY < brickYpos+brickHeight) {
//     console.log('left side brick');
//     ballSpeedX = -ballSpeedX;
//   }
//   if (ballX == brickXpos+brickWidth+ballRadius && ballY >= brickYpos && ballY < brickYpos+brickHeight) {
//     console.log('right side brick');
//     ballSpeedX = ballSpeedX*-1;
//   }
// }
