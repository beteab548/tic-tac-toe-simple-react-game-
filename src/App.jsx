import Player from "../components/players";

function App() {
  return (
    <main>
      <div id="game-container">
        <ul id="players">
          <Player name="player1" symbol="x" />
          <Player name="player2" symbol="0" />
        </ul>
      </div>
    </main>
  );
}

export default App;
