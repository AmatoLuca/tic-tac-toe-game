import * as type from '../../models';

export default function PlayerName({
  name,
  isEditing,
}: type.PlayerNameComponent) {
  let playerName = <span className="player-name">{name}</span>;

  if (isEditing) {
    playerName = <input type="text" required />;
  }
  return playerName;
}
