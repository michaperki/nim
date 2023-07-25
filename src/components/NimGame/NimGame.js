// NimGame.js

export const createEmptyBoard = () => {
    return [
      { pile: 0, amount: 1 },
      { pile: 1, amount: 3 },
      { pile: 2, amount: 5 },
      { pile: 3, amount: 7 },
    ];
  };
  
  export const createNimGame = () => {
    return {
      board: createEmptyBoard(),
      turn: 0,
      winner: null,
    };
  };
  
  export const updateGameState = (game, move) => {
    const pile = game.board.find((p) => p.pile === move.pile);
    if (pile && move.amount <= pile.amount) {
      pile.amount -= move.amount;
    } else {
      console.log("Invalid move. Try again.");
    }
  };
  
  export const checkForWinner = (game) => {
    if (game.board.every((pile) => pile.amount === 0)) {
      game.winner = game.turn;
    }
  };
  
  export const changeTurn = (game) => {
    game.turn = game.turn === 0 ? 1 : 0;
  };
  