import React, { useState, MouseEvent } from 'react';

import { StandardAtBat } from './StandardAtBat'; 
import { ActiveAtBat } from './ActiveAtBat';

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
      <StandardAtBat 
        inning={props.inning}
        onClick={(e: MouseEvent<HTMLElement>) => {
          e.preventDefault();
          setFocus(!focused);
        }}
      />
      
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