import * as type from '../../models';

const Log = ({ turns }: type.LofComponentProps) => {
  return (
    <ol id="log">
      {turns.map((turn: type.GameTurns) => (
        <li key={`${turn.square.row}${turn.square.col}`}>
          {turn.player} selected {turn.square.row},{turn.square.col}
        </li>
      ))}
    </ol>
  );
};

export default Log;
