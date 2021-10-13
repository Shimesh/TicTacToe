const X_CLASS = "x";
const Circle_CLASS = "circle";
const cellElements = document.querySelectorAll("[data-cell]");
const board = document.getElementById("board");
let circleTurn;

startGame();

function startGame() {
  circleTurn = false;
  cellElements.forEach((cell) => {
    cell.addEventListener("click", handleClick, { once: true });
  });
  setBoardHoverClass();
}

function handleClick(e) {
  const cell = e.target;
  const currentClass = circleTurn ? Circle_CLASS : X_CLASS;
  placeMark(cell, currentClass);
  //Check For Win
  //Check For Draw
  //Switch Turns
  swapTurns();
  setBoardHoverClass();
}

function placeMark(cell, currentClass) {
  cell.classList.add(currentClass);
}

function swapTurns() {
  circleTurn = !circleTurn;
}

function setBoardHoverClass() {
  board.classList.remove(X_CLASS);
  board.classList.remove(Circle_CLASS);
  if (circleTurn) {
    board.classList.add(Circle_CLASS);
  } else {
    board.classList.add(X_CLASS);
  }
}
