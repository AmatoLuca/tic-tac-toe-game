import * as type from '../models';
import { WINNING_COMBINATIONS } from '../utils';

export const useCombination = (
  gameBoard: type.GameBoardState,
  players: any
) => {
  let winner: string | undefined = undefined;

  for (const combination of WINNING_COMBINATIONS) {
    const firstSquareSymbol =
      gameBoard[combination[0].row][combination[0].column];
    const secondSquareSymbol =
      gameBoard[combination[1].row][combination[1].column];
    const thirdSquareSymbol =
      gameBoard[combination[2].row][combination[2].column];

    if (
      firstSquareSymbol &&
      firstSquareSymbol === secondSquareSymbol &&
      firstSquareSymbol === thirdSquareSymbol
    ) {
      winner = players[firstSquareSymbol];
    }
  }

  return [winner];
};

export default useCombination;
