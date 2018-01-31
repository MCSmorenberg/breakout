var bricks = [];
var amountRows = 10;
var amountBricks = 19;
var brickXpos = 3;
var brickYpos = 20;

function Brick(brickXpos, brickYpos, i, j) {
  this.index = i;
  this.brickXpos = brickXpos;
  this.brickYpos = brickYpos;
  this.brickWidth = 44;
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
  for (var i = 0; i < amountRows; i++) {
    bricks[i] = [];

    if(i != 0 && i%2 != 0) {
      brickXpos = 26;
    }
    for (var j = 0; j < amountBricks; j++) {
      var brick = new Brick(brickXpos, brickYpos, i, j);

      bricks[i].push(brick);
      drawBrick();
      brickXpos = brickXpos + 46;
    }
    brickXpos = 3;
    brickYpos = brickYpos + 20;
  }
}
createBricks();

function drawBrick() {
  for (var i = 0; i < bricks.length; i++) {
    // debugger;
    for (var j = 0; j < bricks[i].length; j++) {
      ctx.beginPath();
      // debugger;
      ctx.rect(bricks[i][j].brickXpos, bricks[i][j].brickYpos, bricks[i][j].brickWidth, bricks[i][j].brickHeight);
      if(bricks[i][j].visible){
        bricks[i][j].brickCollision();
      }
      ctx.fillStyle = "#f44e42";
      ctx.fill();
      ctx.closePath();
    }
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
