import React from 'react';

import { 
  ActiveAtBatWrapper, 
  CloseButton,
  Diamond,
} from './StyledAtBat';


import { IntHitter, IntPitcher } from '../../interfaceDeclarations/scorebookInts';

export function ActiveAtBat(props: {
  hitter: IntHitter,
  pitcher: IntPitcher,
  toggleAtBat: () => void;
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