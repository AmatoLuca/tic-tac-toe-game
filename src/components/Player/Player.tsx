import { useState } from 'react';
import * as type from '../../models';
import PlayerName from './PlayerName';

export default function Player({ name, symbol }: type.PlayerComponent) {
  const [isEditing, setIsEditing] = useState(false);

  function handleEditClick() {
    setIsEditing((prev) => !prev);
  }

  return (
    <li>
      <span className="player">
        <PlayerName name={name} isEditing={isEditing} />
        <span className="player-symbol">{symbol}</span>
      </span>
      <button onClick={handleEditClick}>Edit</button>
    </li>
  );
}
