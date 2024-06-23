import { useState } from 'react';
import * as type from '../../models';

const initialGameBoard = [
  [null, null, null],
  [null, null, null],
  [null, null, null],
];

export default function GameBoard({
  onSelectSquare,
  activePlayerSymbol,
}: type.GameBoardProps) {
  const [gameBoard, setGameBoard] =
    useState<type.GameBoardState>(initialGameBoard);

  function handleSelectSquare(rowIndex: number, colIndex: number): void {
    setGameBoard((prevGameBoard) => {
      const updatedBoard: type.GameBoardState = [
        ...prevGameBoard.map((innerArray) => [...innerArray]),
      ];
      updatedBoard[rowIndex][colIndex] = activePlayerSymbol;
      return updatedBoard;
    });

    onSelectSquare();
  }

  return (
    <ol id="game-board">
      {gameBoard.map((row, rowIndex) => (
        <li key={rowIndex}>
          <ol>
            {row.map((playerSymbol, colIndex) => (
              <li key={colIndex}>
                <button onClick={() => handleSelectSquare(rowIndex, colIndex)}>
                  {playerSymbol}
                </button>
              </li>
            ))}
          </ol>
        </li>
      ))}
    </ol>
  );
}
