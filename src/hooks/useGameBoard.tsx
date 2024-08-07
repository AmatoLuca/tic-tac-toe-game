import { initialGameBoard } from '../utils';
import * as type from '../models';

export const useGameBoard = (gameTurns: type.GameTurnsState) => {
  //let gameBoard: type.GameBoardState = initialGameBoard;
  let gameBoard: type.GameBoardState = [
    ...initialGameBoard.map((array) => [...array]),
  ];

  for (const turn of gameTurns) {
    const { square, player }: any = turn;
    const { row, col } = square;

    gameBoard[row][col] = player;
  }

  return [gameBoard];
};

export default useGameBoard;
