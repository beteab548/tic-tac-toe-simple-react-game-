import { useState } from "react";
import GameBoard from "../components/gameBoard";
import Player from "../components/players";
import Log from "../components/log";
import { WINNING_COMBINATIONS } from "../winning_conditions";
import GameOver from "../components/gameOver";
function drivedCurrentPlayer(gameBoard) {
  let currentPlayer = "x";
  if (gameBoard.length > 0 && gameBoard[0].player === "x") {
    currentPlayer = "o";
  }
  return currentPlayer;
}
const initialGameBoard = [
  [null, null, null],
  [null, null, null],
  [null, null, null],
];
let winner;
let hasDraw;
function App() {
  const [gameBoard, setGameBoard] = useState([]);
  let activePlayer = drivedCurrentPlayer(gameBoard);
  let gameTurns = [
    ...initialGameBoard.map((innerArray) => {
      return [...innerArray];
    }),
  ];
  gameBoard.forEach((boards) => {
    const { square, player } = boards;
    const { rows, cols } = square;
    gameTurns[rows][cols] = player;
  });
  WINNING_COMBINATIONS.forEach((turns) => {
    const firstSquare = gameTurns[turns[0].row][turns[0].column];
    const secondSquare = gameTurns[turns[1].row][turns[1].column];
    const thirdSquare = gameTurns[turns[2].row][turns[2].column];
    if (
      firstSquare &&
      firstSquare == secondSquare &&
      firstSquare == thirdSquare
    ) {
      winner = firstSquare;
    }
  });
  hasDraw = gameBoard.length == 9 && !winner;
  function resetGame() {
    setGameBoard([]);
    winner = null;
  }
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
          {(winner || hasDraw) && (
            <GameOver winner={winner} hasDraw={hasDraw} resetGame={resetGame} />
          )}{" "}
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
        <GameBoard updateGameBoard={updateGameBoard} board={gameTurns} />
      </div>
      <Log board={gameBoard} />
    </main>
  );
}
export default App;
