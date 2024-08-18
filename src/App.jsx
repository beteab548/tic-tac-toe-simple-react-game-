import { useState } from "react";
import GameBoard from "../components/gameBoard";
import Player from "../components/players";

function App() {
  const [currentPlayer, setCurrentPlayer] = useState("x");
  function toogleCurrentPlayer() {
    setCurrentPlayer((currentPlayerSymbols) => {
      return currentPlayerSymbols === "x" ? "o" : "x";
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
        <GameBoard
          currentPlayerSymbol={currentPlayer}
          toogleCurrentPlayer={toogleCurrentPlayer}
        />
      </div>
    </main>
  );
}

export default App;
