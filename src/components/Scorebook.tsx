import React, { useState } from 'react';

import { MainLayout } from '../styled-components/Layout';
import { FullGame } from './GameType/FullGame';
import { PlayerGame } from './GameType/PlayerGame';

import { UL } from '../styled-components/Global';

export function Scorebook() {
  const [isFullGame, setIsFullGame] = useState<undefined|boolean>(undefined);

  if (isFullGame === undefined) {
    return (
      <MainLayout>
        <div>
          <h1>What type of game are you wanting to score?</h1>
          <UL>
            <li><button onClick={() => { setIsFullGame(true); }}>Full Game</button></li>
            <li><button onClick={() => { setIsFullGame(false); }}>Specific Player(s)</button></li>
          </UL>
        </div>
      </MainLayout>
    );
  } else if (isFullGame) {
    return (
      <MainLayout>
        <FullGame
          toggleGameType={() => {
            setIsFullGame(false);
          }}
        />
      </MainLayout>
    );
  } else {
    return (
      <MainLayout>
        <PlayerGame
          toggleGameType={() => {
            setIsFullGame(true);
          }}
        />
      </MainLayout>
    );
  }
}
