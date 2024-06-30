import { useState } from 'react';
import Header from './components/Header/Header';
import Player from './components/Player/Player';
import GameBoard from './components/GameBoard/GameBoard';
import Log from './components/Log/Log';
import * as type from './models';

function App() {
  const [activePlayer, setActivePlayer] = useState<type.ActivePlayerSymbol>(
    type.ActivePlayerSymbol.PLAYER_ONE
  );
  const [gameTurns, setGameTurns] = useState<type.GameTurnsState>([]);

  function handleSelectSquare(rowIndex: number, colIndex: number) {
    setActivePlayer((currentActivePlayer) =>
      currentActivePlayer === type.ActivePlayerSymbol.PLAYER_ONE
        ? type.ActivePlayerSymbol.PLAYER_TWO
        : type.ActivePlayerSymbol.PLAYER_ONE
    );

    setGameTurns((prevTurns: any) => {
      let currentPlayer = 'X';

      if (prevTurns.length > 0 && prevTurns[0].player === 'X') {
        currentPlayer = 'O';
      }

      const updateTurns = [
        {
          square: { row: rowIndex, col: colIndex },
          player: currentPlayer,
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
          <GameBoard onSelectSquare={handleSelectSquare} turns={gameTurns} />
        </div>
        <Log turns={gameTurns} />
      </main>
    </>
  );
}

export default App;
