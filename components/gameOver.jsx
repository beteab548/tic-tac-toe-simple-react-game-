export default function GameOver({ winner ,resetGame}) {
  return (
    <div id="game-over">
      <h2>GameOver!</h2>
      {winner && <p>{winner} has won!</p>}
      {!winner && <h2>it's a draw!</h2>}
      <p>
        <button onClick={resetGame}>rematch</button>
      </p>
    </div>
  );
}
