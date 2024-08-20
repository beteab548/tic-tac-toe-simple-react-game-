import { useState } from "react";
export default function Player({ initialName, symbol, isActive }) {
  const [isEditing, setEditingMode] = useState(false);
  const [playerName, setPlayerName] = useState(initialName);
  function playerEditing(value) {
    setEditingMode(value);
  }
  function setPlayerNames(event) {
    setPlayerName(event.target.value);
  }
  let playerView;
  let buttonView;
  if (isEditing) {
    playerView = (
      <input type="text" value={playerName} onChange={setPlayerNames} />
    );
    buttonView = (
      <button
        onClick={() => {
          playerEditing(false);
        }}
      >
        save
      </button>
    );
  } else {
    playerView = <span className="player-name">{playerName}</span>;
    buttonView = (
      <button
        onClick={() => {
          playerEditing(true);
        }}
      >
        edit
      </button>
    );
  }
  return (
    <span className="player">
      <li className={isActive ? "active" : undefined}>
        {playerView}
        <span className="player-symbol">{symbol}</span>
        {buttonView}
      </li>
    </span>
  );
}
