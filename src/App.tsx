import { useState } from 'react';
import Header from './components/Header/Header';
import Player from './components/Player/Player';
import GameBoard from './components/GameBoard/GameBoard';
import Log from './components/Log/Log';
import * as type from './models';
import { derivedActivePlayer } from './utils';
import { useGameBoard, useCombination } from './hooks';
import GameOver from './components/GameOver/GameOver';

function App() {
  const [players, setPlayers] = useState({
    X: 'Player 1',
    O: 'Player 2',
  });
  const [gameTurns, setGameTurns] = useState<type.GameTurnsState>([]);
  const activePlayer = derivedActivePlayer(gameTurns);

  // Custom Hooks
  let [gameBoard] = useGameBoard(gameTurns);
  const [winner] = useCombination(gameBoard, players);

  const hasDraw = gameTurns.length === 9 && !winner;

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

  function handleRestart() {
    setGameTurns([]);
  }

  function handlePlayerNameChange(
    symbol: type.ActivePlayerSymbol,
    newName: string
  ) {
    setPlayers((prePlayers) => {
      return {
        ...prePlayers,
        [symbol]: newName,
      };
    });
  }

  return (
    <>
      <Header />
      <main>
        <div id="game-container">
          <ol id="players" className="highlight-player">
            <Player
              name={players.X}
              symbol={'X'}
              isActive={activePlayer === type.ActivePlayerSymbol.PLAYER_ONE}
              onChangeName={handlePlayerNameChange}
            />
            <Player
              name={players.O}
              symbol={'O'}
              isActive={activePlayer === type.ActivePlayerSymbol.PLAYER_TWO}
              onChangeName={handlePlayerNameChange}
            />
          </ol>
          {(winner || hasDraw) && (
            <GameOver winner={winner} onRestart={handleRestart} />
          )}
          <GameBoard onSelectSquare={handleSelectSquare} board={gameBoard} />
        </div>
        <Log turns={gameTurns} />
      </main>
    </>
  );
}

export default App;
