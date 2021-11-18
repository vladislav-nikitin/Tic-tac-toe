let players = ["x", "o"];
let activePlayer = 0;
let board = [
  ["", "", ""],
  ["", "", ""],
  ["", "", ""],
];

function startGame() {
  //создаем поле
  board = [
    ["", "", ""],
    ["", "", ""],
    ["", "", ""],
  ];
  //Вызываем функцию renderBoard для отрисовки игрового поля
  renderBoard(board);
}

function click(strN, colN) {
  console.log(colN);
  console.log(strN);
  //выбор активного игрока и передача его метки в массив
  if (activePlayer % 2 == 0) {
    activePlayer = 0;
  } else {
    activePlayer = 1;
  }

  board[strN][colN] = players[activePlayer];
  renderBoard(board);
  check();
  activePlayer++;
}

//проверка победителя
function check() {
  //диагонали вне цикла
  if (
    board[0][0] == players[activePlayer] &&
    board[1][1] == players[activePlayer] &&
    board[2][2] == players[activePlayer]
  ) {
    showWinner(activePlayer);
  } else if (
    board[0][2] == players[activePlayer] &&
    board[1][1] == players[activePlayer] &&
    board[2][0] == players[activePlayer]
  ) {
    showWinner(activePlayer);
  }

  for (let i = 0; i <= 2; i++) {
    for (let j = 0; j <= 2; j++) {
      if (
        board[i][0] == players[activePlayer] &&
        board[i][1] == players[activePlayer] &&
        board[i][2] == players[activePlayer]
      ) {
        showWinner(activePlayer); // все гориз
      } else if (
        board[0][j] == players[activePlayer] &&
        board[1][j] == players[activePlayer] &&
        board[2][j] == players[activePlayer]
      ) {
        showWinner(activePlayer); // все верт
      }
    }
  }
}
