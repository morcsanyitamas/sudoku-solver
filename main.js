//
// sudoku solver
// get empty empty board
// display (empty) board
// solve the sudoku
// display (solved) board

async function fetchBorad(url) {
  const data = await fetch(url, {
    method: "GET",
  });
  return data.json();
}

function getBoardFromJson(data) {
  return data.board;
}

function createBoardUrl(difficulty) {
  switch (difficulty) {
    case "easy":
    case "medium":
    case "hard":
      return `https://sugoku.onrender.com/board?difficulty=${difficulty}`;
    default:
      return null;
  }
}

async function getEmptyBoard(difficulty) {
  const url = createBoardUrl(difficulty);
  if (url !== null) {
    const data = await fetchBorad(url);
    return getBoardFromJson(data);
  } else {
    return [];
  }
}

function displayBorad(borad) {
  console.table(borad);
}

function solveBoard(board) {
  const solved = [];
  for (const row of board) {
    const newRow = [];
    for (let cell of row) {
      newRow.push(cell === 0 ? "X" : cell);
    }
    solved.push(newRow);
  }
  return solved;
}

async function main() {
  const difficulty = "easy";
  const emptyBoard = await getEmptyBoard(difficulty);
  displayBorad(emptyBoard);
  const solved = solveBoard(emptyBoard);
  displayBorad(solved);
}

main();
