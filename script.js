const board = document.getElementById("board");
const statusText = document.getElementById("status");

let currentPlayer = "X";
let cells = Array(9).fill("");

function createBoard() {
  board.innerHTML = "";

  cells.forEach((cell, index) => {
    const div = document.createElement("div");
    div.classList.add("cell");

    div.addEventListener("click", () => move(index));

    div.innerText = cell;
    board.appendChild(div);
  });
}

function move(index) {
  if (cells[index] !== "") return;

  cells[index] = currentPlayer;

  currentPlayer = currentPlayer === "X" ? "O" : "X";

  createBoard();
}

createBoard();
