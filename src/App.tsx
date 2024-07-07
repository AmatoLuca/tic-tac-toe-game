import { useState } from 'react';
import Header from './components/Header/Header';
import Player from './components/Player/Player';
import GameBoard from './components/GameBoard/GameBoard';
import Log from './components/Log/Log';
import * as type from './models';
import { derivedActivePlayer } from './utils';

function App() {
  const [gameTurns, setGameTurns] = useState<type.GameTurnsState>([]);
  const activePlayer = derivedActivePlayer(gameTurns);

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
          <GameBoard onSelectSquare={handleSelectSquare} turns={gameTurns} />
        </div>
        <Log turns={gameTurns} />
      </main>
    </>
  );
}

export default App;
