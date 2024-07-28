import * as type from '../../models';
import React, { useState, useEffect } from 'react';

export default function PlayerName({
  initialName,
  isEditing,
  handleNewName,
}: type.PlayerNameComponentProps) {
  const [playerName, setPlayerName] = useState(initialName);

  function handleChange(event: React.ChangeEvent<HTMLInputElement>) {
    setPlayerName(event.target.value);
  }

  let editablePlayerName = <span className="player-name">{playerName}</span>;

  if (isEditing) {
    editablePlayerName = (
      <input type="text" required value={playerName} onChange={handleChange} />
    );
  }

  useEffect(() => {
    handleNewName(playerName);
  }, [playerName]);

  return editablePlayerName;
}
