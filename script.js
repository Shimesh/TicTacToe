const X_CLASS = "x";
const Circle_CLASS = "circle";
const cellElements = document.querySelectorAll("[data-cell]");
let circleTurn;

cellElements.forEach((cell) => {
  cell.addEventListener("click", handleClick, { once: true });
});

function handleClick(e) {
  const cell = e.target;
  const currentClass = circleTurn ? Circle_CLASS : X_CLASS;
  placeMark(cell, currentClass);
  //Check For Win
  //Check For Draw
  //Switch Turns
}

function placeMark(cell, currentClass) {
  cell.classList.add(currentClass);
}
