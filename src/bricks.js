var bricks = [];
var amountRows = 10;
var amountBricks = 19;
var brickXpos = 3;
var brickYpos = 30;
var score = 0;

function Brick(brickXpos, brickYpos, i, j) {
  this.index = i;
  this.index2 = j;
  this.brickXpos = brickXpos;
  this.brickYpos = brickYpos;
  this.brickWidth = 44;
  this.brickHeight = 18;
  this.visible = true;
  this.brickCollision = function() {
    if(
      // Bottom
      ballY < this.brickYpos+this.brickHeight+ballRadius &&
      ballY > this.brickYpos+(this.brickHeight-3) && // -3 is to create a bounce area
      ballX > this.brickXpos &&
      ballX < (this.brickXpos-ballRadius)+(this.brickWidth+1) ||  //Not sure if 1 is needed
      // Top
      ballY > this.brickYpos-ballRadius &&
      ballY < this.brickYpos + 3 &&
      ballX > this.brickXpos &&
      ballX < this.brickXpos+(this.brickWidth)
    ) {
      ballSpeedY = -ballSpeedY;
      this.brickHeight = 0;
      this.brickWidth = 0;
      this.visible = false;
      score++;
    } else if(
      // Right
      ballX < this.brickXpos+this.brickWidth+ballRadius &&
      ballX > this.brickXpos+(this.brickWidth-3) &&
      ballY > this.brickYpos &&
      ballY < this.brickYpos+this.brickHeight ||
      // Left
      ballX > this.brickXpos-ballRadius &&
      ballX < this.brickXpos+3 &&
      ballY > this.brickYpos &&
      ballY < this.brickYpos+this.brickHeight
    ) {
      ballSpeedX = -ballSpeedX;
      this.brickHeight = 0;
      this.brickWidth = 0;
      this.visible = false;
      score++;
    }
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
      brickXpos = brickXpos + 46;

      drawBrick();
    }
    brickXpos = 3;
    brickYpos = brickYpos + 20;
  }
}
createBricks();

function drawBrick() {
  for (var i = 0; i < bricks.length; i++) {
    for (var j = 0; j < bricks[i].length; j++) {
      ctx.beginPath();
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

function drawScore() {
    ctx.font = "18px " + font;
    ctx.fillStyle = "#3498DB";
    ctx.fillText("Score: "+score, 8, 22);
}
