import React from 'react';

import { 
  ActiveAtBatWrapper, 
  CloseButton,
  Diamond,
} from './StyledAtBat';


import { IntHitter, IntPitcher } from '../../interfaceDeclarations/scorebookInts';
import { IntHalfInning } from '../../interfaceDeclarations/inningInts';

export function ActiveAtBat(props: {
  hitter: IntHitter,
  pitcher: IntPitcher,
  inningIndex: number,
  inning: IntHalfInning,
  toggleAtBat: () => void;
  onUpdateGame: (inning: IntHalfInning, inningIndex: number, team: 'away' | 'home') => void,
}) {
  return (
    <ActiveAtBatWrapper>
      <CloseButton 
        onClick={() => { props.toggleAtBat(); }}
      >&#x2715;</CloseButton>
      <div style={{display: 'flex', minHeight: '100%'}}>
        <div style={{width: '30%'}}>
          {props.hitter.name}
          {props.pitcher.name}
        </div>
        <div style={{width: '70%', display: 'flex', alignItems: 'center', justifyContent: 'center'}}>
          <Diamond />
        </div>
      </div>
    </ActiveAtBatWrapper>
  );
}