import { useState } from 'react';
import * as type from '../../models';
import PlayerName from './PlayerName';

export default function Player({
  name,
  symbol,
  isActive,
  onChangeName,
}: type.PlayerComponentProps) {
  const [isEditing, setIsEditing] = useState(false);
  const [newPlayerName, setNewPlayerName] = useState<string>('');

  function handleEditClick() {
    setIsEditing((isEditing) => !isEditing);

    if (isEditing) {
      onChangeName(symbol, newPlayerName);
    }
  }

  function handleNewPlayerName(playerName: string) {
    setNewPlayerName(playerName);
  }

  return (
    <li className={isActive ? 'active' : undefined}>
      <span className="player">
        <PlayerName
          initialName={name}
          isEditing={isEditing}
          handleNewName={handleNewPlayerName}
        />
        <span className="player-symbol">{symbol}</span>
      </span>
      <button onClick={handleEditClick}>{isEditing ? 'Salve' : 'Edit'}</button>
    </li>
  );
}
