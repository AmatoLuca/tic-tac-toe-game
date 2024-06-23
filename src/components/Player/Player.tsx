import { useState } from 'react';
import * as type from '../../models';
import PlayerName from './PlayerName';

export default function Player({
  name,
  symbol,
  isActive,
}: type.PlayerComponentProps) {
  const [isEditing, setIsEditing] = useState(false);

  function handleEditClick() {
    setIsEditing((isEditing) => !isEditing);
  }

  return (
    <li className={isActive ? 'active' : undefined}>
      <span className="player">
        <PlayerName initialName={name} isEditing={isEditing} />
        <span className="player-symbol">{symbol}</span>
      </span>
      <button onClick={handleEditClick}>{isEditing ? 'Salve' : 'Edit'}</button>
    </li>
  );
}
