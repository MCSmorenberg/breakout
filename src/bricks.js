var bricks = [];
var amountBricks = 19;
var brickXpos = 4;
var brickYpos = 20;

function Brick(brickXpos, brickYpos) {
  this.brickXpos = brickXpos;
  this.brickYpos = brickYpos;
  this.brickWidth = 45;
  this.brickHeight = 18;
}

function createBricks() {
  for (var i = 0; i < amountBricks; i++) {
    var brick = new Brick(brickXpos, brickYpos);
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
    ctx.fillStyle = "#f44e42";
    ctx.fill();
    ctx.closePath();
  }
}
