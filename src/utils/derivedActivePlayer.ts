import * as type from '../models';

export function derivedActivePlayer(gameTurns: type.GameTurnsState) {
  let currentPlayer = type.ActivePlayerSymbol.PLAYER_ONE;

  if (
    gameTurns.length > 0 &&
    gameTurns[0].player === type.ActivePlayerSymbol.PLAYER_ONE
  ) {
    currentPlayer = type.ActivePlayerSymbol.PLAYER_TWO;
  }

  return currentPlayer;
}
