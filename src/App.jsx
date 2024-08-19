import { useState } from "react";
import GameBoard from "../components/gameBoard";
import Player from "../components/players";
import Log from "../components/log";
function drivedCurrentPlayer(gameBoard) {
  let currentPlayer = "x";
  if (gameBoard.length > 0 && gameBoard[0].player === "x") {
    currentPlayer = "o";
  }
  return currentPlayer;
}
function App() {
  const [gameBoard, setGameBoard] = useState([]);
  let activePlayer = drivedCurrentPlayer(gameBoard);
  function updateGameBoard(rowIndex, colIndex) {
    setGameBoard((prevValue) => {
      activePlayer = drivedCurrentPlayer(prevValue);
      const updatedBoard = [
        { square: { rows: rowIndex, cols: colIndex }, player: activePlayer },
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
            isActive={activePlayer === "x"}
          />
          <Player
            initialName="player2"
            symbol="o"
            isActive={activePlayer === "o"}
          />
        </ol>
        <GameBoard updateGameBoard={updateGameBoard} board={gameBoard} />
      </div>
      <Log board={gameBoard} />
    </main>
  );
}

export default App;
