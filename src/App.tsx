import { useState } from 'react';
import Header from './components/Header/Header';
import Player from './components/Player/Player';
import GameBoard from './components/GameBoard/GameBoard';
import Log from './components/Log/Log';
import * as type from './models';
import {
  derivedActivePlayer,
  WINNING_COMBINATIONS,
  initialGameBoard,
} from './utils';

function App() {
  const [gameTurns, setGameTurns] = useState<type.GameTurnsState>([]);
  const activePlayer = derivedActivePlayer(gameTurns);

  let gameBoard: type.GameBoardState = initialGameBoard;

  for (const turn of gameTurns) {
    const { square, player } = turn;
    const { row, col } = square;

    gameBoard[row][col] = player;
  }

  let winner;

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
      winner = firstSquareSymbol;
    }
  }

  function handleSelectSquare(rowIndex: number, colIndex: number) {
    setGameTurns((prevTurns: any) => {
      const currentActivePlayer = derivedActivePlayer(prevTurns);

      const updateTurns = [
        {
          square: { row: rowIndex, col: colIndex },
          player: currentActivePlayer,
        },
        ...prevTurns,
      ];

      return updateTurns;
    });
  }

  return (
    <>
      <Header />
      <main>
        <div id="game-container">
          <ol id="players" className="highlight-player">
            <Player
              name={'Player 1'}
              symbol={'X'}
              isActive={activePlayer === type.ActivePlayerSymbol.PLAYER_ONE}
            />
            <Player
              name={'Player 2'}
              symbol={'O'}
              isActive={activePlayer === type.ActivePlayerSymbol.PLAYER_TWO}
            />
          </ol>
          {winner && <p>You won, {winner}!</p>}
          <GameBoard onSelectSquare={handleSelectSquare} board={gameBoard} />
        </div>
        <Log turns={gameTurns} />
      </main>
    </>
  );
}

export default App;
