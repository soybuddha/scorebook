import React, { useState } from 'react';

import { ActiveAtBat } from './ActiveAtBat';
import { 
  Diamond, 
  StyledAtBat, 
} from '../AtBat/StyledAtBat';

import { IntHitter, IntPitcher } from '../../interfaceDeclarations/scorebookInts';

export function AtBat(props: {
  inningIndex: number,
  hitter: IntHitter,
  pitcher: IntPitcher,
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
          toggleAtBat={() => { setFocus(!focused); }}
        />
  )}
    </React.Fragment>
  );
}