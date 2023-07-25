const readlineSync = require("readline-sync");

const createBoard = () => {
  const board = [
    { pile: 1, amount: 1 },
    { pile: 2, amount: 3 },
    { pile: 3, amount: 5 },
    { pile: 4, amount: 7 },
  ];
  return board;
};

const createGame = () => {
    const game = {
        board: createBoard(),
        turn: 0,
        winner: null
    }
    return game
}

const printBoard = (board) => {
  console.log("Nim Game Board:");
  board.forEach((pile) => {
    console.log(`Pile ${pile.pile}: ${"X ".repeat(pile.amount)}`);
  });
};

const askPlayerToMakeMove = (board) => {
  const pile = parseInt(
    readlineSync.question("Which pile do you want to remove from? ")
  );
  const amount = parseInt(
    readlineSync.question("How many do you want to remove? ")
  );
  return { pile, amount };
};

const updateGameState = (game, move) => {
  const pile = game.board.find((p) => p.pile === move.pile);
  if (pile && move.amount <= pile.amount) {
    pile.amount -= move.amount;
  } else {
    console.log("Invalid move. Try again.");
  }
};

const checkForWinner = (game) => {
  if (game.board.every((pile) => pile.amount === 0)) {
    game.winner = game.turn;
  }
};

const changeTurn = (game) => {
  game.turn = game.turn === 0 ? 1 : 0;
};

const play = () => {
    const game = createGame();
    while (!game.winner) {
        printBoard(game.board);
        const move = askPlayerToMakeMove(game.board);
        updateGameState(game, move);
        checkForWinner(game);
        changeTurn(game);
    }
    console.log(`Player ${game.winner} wins!`);
};

play();