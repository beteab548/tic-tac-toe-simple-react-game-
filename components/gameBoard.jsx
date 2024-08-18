import { useState } from "react";

const initialGameBoard = [
  [null, null, null],
  [null, null, null],
  [null, null, null],
];
export default function GameBoard({
  currentPlayerSymbol,
  toogleCurrentPlayer,
}) {
  const [gameBoard, setGameBoard] = useState(initialGameBoard);
  function updateGameBoardUI(rowIndex, colIndex) {
    setGameBoard((prevValue) => {
      const updatedBoard = [...prevValue.map((innerArray) => [...innerArray])];
      updatedBoard[rowIndex][colIndex] = currentPlayerSymbol;
      return updatedBoard;
    });
    toogleCurrentPlayer();
  }
  return (
    <ol id="game-board">
      {gameBoard.map((row, rowIndex) => {
        return (
          <li key={rowIndex}>
            <ol>
              {row.map((playerSymbol, colIndex) => {
                return (
                  <li key={colIndex}>
                    <button
                      onClick={() => {
                        updateGameBoardUI(rowIndex, colIndex);
                      }}
                    >
                      {playerSymbol}
                    </button>
                  </li>
                );
              })}
            </ol>
          </li>
        );
      })}
    </ol>
  );
}
