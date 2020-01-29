let players = ['x', 'o'];
let activePlayer = 0;

movit = 0;

let fieldEmpty = [['', '', ''], ['', '', ''], ['', '', '']];
let field = fieldEmpty;

function startGame() {
  console.log("first - 'x'");
  renderBoard(field);
}


function click(xx, yy) {
  if (movit % 2 == 0) { 
    field[xx][yy] = players[0];
  } else {
    field[xx][yy] = players[1];
  }
  movit++;
  
  if (field[0][0] == 'x' && field[0][1] == 'x' && field[0][2] == 'x') {
    field = [['', '', ''], ['', '', ''], ['', '', '']];
    movit = 0;
    showWinner(0);
  }
  if (field[1][0] == 'x' && field[1][1] == 'x' && field[1][2] == 'x') {
    field = [['', '', ''], ['', '', ''], ['', '', '']];
    movit = 0;
    showWinner(0);
  }
  if (field[2][0] == 'x' && field[2][1] == 'x' && field[2][2] == 'x') {
    field = [['', '', ''], ['', '', ''], ['', '', '']];
    movit = 0;
    showWinner(0);
  }
  if (field[0][0] == 'x' && field[1][0] == 'x' && field[2][0] == 'x') {
    field = [['', '', ''], ['', '', ''], ['', '', '']];
    movit = 0;
    showWinner(0);
  }
  if (field[0][1] == 'x' && field[1][1] == 'x' && field[2][1] == 'x') {
    field = [['', '', ''], ['', '', ''], ['', '', '']];
    movit = 0;
    showWinner(0);
  }
  if (field[0][2] == 'x' && field[1][2] == 'x' && field[2][2] == 'x') {
    field = [['', '', ''], ['', '', ''], ['', '', '']];
    movit = 0;
    showWinner(0);
  }
  if (field[0][0] == 'x' && field[1][1] == 'x' && field[2][2] == 'x') {
    field = [['', '', ''], ['', '', ''], ['', '', '']];
    movit = 0;
    showWinner(0);
  }
  if (field[0][2] == 'x' && field[1][1] == 'x' && field[2][0] == 'x') {
    field = [['', '', ''], ['', '', ''], ['', '', '']];
    movit = 0;
    showWinner(0);
  }

  if (field[0][0] == 'o' && field[0][1] == 'o' && field[0][2] == 'o') {
    field = [['', '', ''], ['', '', ''], ['', '', '']];
    movit = 0;
    showWinner(1);
  }
  if (field[1][0] == 'o' && field[1][1] == 'o' && field[1][2] == 'o') {
    field = [['', '', ''], ['', '', ''], ['', '', '']];
    movit = 0;
    showWinner(1);
  }
  if (field[2][0] == 'o' && field[2][1] == 'o' && field[2][2] == 'o') {
    field = [['', '', ''], ['', '', ''], ['', '', '']];
    movit = 0;
    showWinner(1);
  }
  if (field[0][0] == 'o' && field[1][0] == 'o' && field[2][0] == 'o') {
    field = [['', '', ''], ['', '', ''], ['', '', '']];
    movit = 0;
    showWinner(1);
  }
  if (field[0][1] == 'o' && field[1][1] == 'o' && field[2][1] == 'o') {
    field = [['', '', ''], ['', '', ''], ['', '', '']];
    movit = 0;
    showWinner(1);
  }
  if (field[0][2] == 'o' && field[1][2] == 'o' && field[2][2] == 'o') {
    field = [['', '', ''], ['', '', ''], ['', '', '']];
    movit = 0;
    showWinner(1);
  }
  if (field[0][0] == 'o' && field[1][1] == 'o' && field[2][2] == 'o') {
    field = [['', '', ''], ['', '', ''], ['', '', '']];
    movit = 0;
    showWinner(1);
  }
  if (field[0][2] == 'o' && field[1][1] == 'o' && field[2][0] == 'o') {
    field = [['', '', ''], ['', '', ''], ['', '', '']];
    movit = 0;
    showWinner(1);
  }

  // if (movit == 9) {
  //   field = [['', '', ''], ['', '', ''], ['', '', '']];
  //   movit = 0;
  // }

  if (movit == 9) {
    field = [['', '', ''], ['', '', ''], ['', '', '']];
    movit = 0;
  }

  renderBoard(field);
}


