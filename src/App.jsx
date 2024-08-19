import { useState } from "react";
import GameBoard from "../components/gameBoard";
import Player from "../components/players";

function App() {
  const [currentPlayer, setCurrentPlayer] = useState("x");
  const [gameBoard, setGameBoard] = useState([]);
  function updateGameBoard(rowIndex, colIndex) {
    setCurrentPlayer((currentPlayerSymbols) => {
      return currentPlayerSymbols === "x" ? "o" : "x";
    });
    let presentPlayer = "x";
    if (gameBoard.length > 0 && gameBoard[0].player === "x") {
      presentPlayer = "o";
    }
    setGameBoard((prevValue) => {
      const updatedBoard = [
        { square: { rows: rowIndex, cols: colIndex }, player: presentPlayer },
        ...prevValue,
      ];
      return updatedBoard;
    });
  }
  return (
    <main>
      <div id="game-container">
        <ol id="players" className="highlight-player">
          <Player
            initialName="player1"
            symbol="x"
            isActive={currentPlayer === "x"}
          />
          <Player
            initialName="player2"
            symbol="o"
            isActive={currentPlayer === "o"}
          />
        </ol>
        <GameBoard updateGameBoard={updateGameBoard} board={gameBoard} />
      </div>
    </main>
  );
}

export default App;
