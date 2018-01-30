var goRight = false;
var goLeft = false;

document.addEventListener("keydown", keyDown, false);
document.addEventListener("keyup", keyUp, false);

function keyDown(event) {
  if(event.keyCode === 39) {
    goRight = true;
  }
  else if(event.keyCode === 37) {
    goLeft = true;
  }
}

function keyUp(event) {
  if(event.keyCode === 39) {
    goRight = false;
  }
  else if(event.keyCode === 37) {
    goLeft = false;
  }
}

function movePaddle() {
  if(goRight === true) {
    paddleXpos = paddleXpos+4;
  } else if(goLeft === true) {
    paddleXpos = paddleXpos-4;
  }
}
