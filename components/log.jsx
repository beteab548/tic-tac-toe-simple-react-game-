export default function Log({ board }) {
  const items = [];
  {
    board.forEach((turns) => {
      items.push(
        <li key={`${turns.square.rows}${turns.square.cols}`}>
          {turns.player} selected {turns.square.rows},{turns.square.cols}
        </li>
      );
    });
  }

  return <ol id="log">{items}</ol>;
}

/* {board.map((turns) => {
    return (
      <li key={`${turns.square.rows}${turns.square.cols}`}>
        {turns.player} selected {turns.square.rows},{turns.square.cols}
      </li>
    );
  })} */
