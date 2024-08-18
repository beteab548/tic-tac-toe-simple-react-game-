import Player from "../components/players";

function App() {
  return (
    <main>
      <div id="game-container">
        <ul id="players">
          <Player initialName="player1" symbol="x" />
          <Player initialName="player2" symbol="0" />
        </ul>
      </div>
    </main>
  );
}

export default App;
