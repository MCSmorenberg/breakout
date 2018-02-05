var goRight = false;
var goLeft = false;
var continueGame = false;

document.addEventListener("keydown", keyDown, false);
document.addEventListener("keyup", keyUp, false);

function keyDown(event) {
  switch (event.keyCode) {
    case 39:
      goRight = true;
      break;
    case 37:
      goLeft = true;
      break;
    case 32:
      continueGame = true;
  }
}

function keyUp(event) {
  switch (event.keyCode) {
    case 39:
      goRight = false;
      break;
    case 37:
      goLeft = false;
      break;
    case 32:
      continueGame = false;
  }
}
