import { useState } from 'react';
import Header from './components/Header/Header';
import Player from './components/Player/Player';
import GameBoard from './components/GameBoard/GameBoard';
import * as type from './models';

function App() {
  const [activePlayer, setActivePlayer] = useState<type.ActivePlayerSymbol>(
    type.ActivePlayerSymbol.PLAYER_ONE
  );

  function handleSelectPlayerTurn() {
    setActivePlayer((currentActivePlayer) =>
      currentActivePlayer === type.ActivePlayerSymbol.PLAYER_ONE
        ? type.ActivePlayerSymbol.PLAYER_TWO
        : type.ActivePlayerSymbol.PLAYER_ONE
    );
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
          <GameBoard
            onSelectSquare={handleSelectPlayerTurn}
            activePlayerSymbol={activePlayer}
          />
        </div>
      </main>
    </>
  );
}

export default App;
