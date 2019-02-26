import React, { useState } from 'react';

import { ActiveAtBat } from './ActiveAtBat';
import { 
  Diamond, 
  StyledAtBat, 
} from '../AtBat/StyledAtBat';

import { IntHalfInning } from '../../interfaceDeclarations/inningInts';
import { IntHitter, IntPitcher } from '../../interfaceDeclarations/scorebookInts';

export function AtBat(props: {
  inningIndex: number,
  inning: IntHalfInning,
  hitter: IntHitter,
  pitcher: IntPitcher,
  onUpdateGame: (inning: IntHalfInning, inningIndex: number, team: 'away' | 'home') => void,
}) {
  const [focused, setFocus] = useState<boolean>(false);

  return (
    <React.Fragment>
      <StyledAtBat onClick={e => {
        e.preventDefault();
        setFocus(!focused);
      }}>
        <Diamond />
      </StyledAtBat >
      {focused && (
        <ActiveAtBat 
          hitter={props.hitter}
          pitcher={props.pitcher}
          inningIndex={props.inningIndex}
          inning={props.inning}
          toggleAtBat={() => { setFocus(!focused); }}
          onUpdateGame={props.onUpdateGame}
        />
  )}
    </React.Fragment>
  );
}