const initialGameBoard = [
  [null, null, null],
  [null, null, null],
  [null, null, null],
];
export default function GameBoard({ updateGameBoard, board }) {
  console.log(board);
  let gameBoard = initialGameBoard;
  board.forEach((boards) => {
    const { square, player } = boards;
    const { rows, cols } = square;
    gameBoard[rows][cols] = player;
  });
  return (
    <ol>
      {gameBoard.map((row, rowIndex) => {
        return (
          <li key={rowIndex}>
            <ol>
              {row.map((playerSymbol, colIndex) => {
                return (
                  <li key={colIndex}>
                    <button
                      onClick={() => {
                        updateGameBoard(rowIndex, colIndex);
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
