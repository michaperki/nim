import React, { useState } from "react";

const NimBoard = ({ game, onMakeMove }) => {
  const [selectedPile, setSelectedPile] = useState(null);
  const [itemsToRemove, setItemsToRemove] = useState(1);

  const handlePileClick = (pileIndex) => {
    setSelectedPile(pileIndex);
  };

  const handleItemsChange = (event) => {
    setItemsToRemove(parseInt(event.target.value));
  };

  const handleMoveClick = () => {
    if (selectedPile !== null && itemsToRemove > 0) {
      onMakeMove(selectedPile, itemsToRemove);
      setSelectedPile(null);
      setItemsToRemove(1);
    }
  };

  return (
    <div>
      <h2>Nim Game Board:</h2>
      {game.board.map((pile, index) => (
        <div
          key={pile.pile}
          className={`pile ${selectedPile === index ? "selected" : ""}`}
          onClick={() => handlePileClick(index)}
        >
          {/* Display the items in each pile */}
          {Array.from({ length: pile.amount }).map((_, i) => (
            <div
              key={i}
              className="item"
              style={{
                width: "20px",
                height: "20px",
                borderRadius: "50%",
                backgroundColor: "black",
                margin: "2px",
                display: "inline-block",
              }}
            ></div>
          ))}
        </div>
      ))}
      <div>
        <label htmlFor="itemsToRemove">Items to Remove:</label>
        <input
          type="number"
          id="itemsToRemove"
          value={itemsToRemove}
          min={1}
          max={game.board[selectedPile]?.amount || 1}
          onChange={handleItemsChange}
          disabled={selectedPile === null}
        />
        <button onClick={handleMoveClick} disabled={selectedPile === null}>
          Make Move
        </button>
      </div>
    </div>
  );
};

export default NimBoard;
