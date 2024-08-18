import { useState } from "react";
export default function Player({ name, symbol }) {
  const [isEditing, setEditingMode] = useState(false);
  const [playerName, setPlayerName] = useState({
    playerName1: "player-1",
    playerName2: "player-2",
  });
  function playerEditing(value) {
    setEditingMode(value);
  }
  function setPlayerNames(valueNames) {
    console.log(playerName);
    if (name === "player1") {
      setPlayerName((previouseNames) => {
        return { ...previouseNames, playerName1: valueNames };
      });
    } else if (name === "player2")
      setPlayerName((previouseNames) => {
        return { ...previouseNames, playerName2: valueNames };
      });
  }
  let playerView;
  let buttonView;
  if (isEditing) {
    playerView = (
      <input
        type="text"
        value={
          name === "player1" ? playerName.playerName1 : playerName.playerName2
        }
        onChange={(e) => {
          setPlayerNames(e.target.value);
        }}
      />
    );
    buttonView = (
      <button
        onClick={() => {
          playerEditing(false);
        }}
      >
        done
      </button>
    );
  } else {
    playerView = (
      <span className="player-name">
        {name === "player1" ? playerName.playerName1 : playerName.playerName2}
      </span>
    );
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
      <li>
        {playerView}
        <span className="player-symbol">{symbol}</span>
      </li>
      {buttonView}
    </span>
  );
}
