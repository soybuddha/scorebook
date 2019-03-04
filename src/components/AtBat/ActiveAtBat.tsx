import React, { useState } from 'react';

import { NewPitch } from './Pitch';

import { 
  ActiveAtBatLayout,
  ActiveAtBatMatchup,
  ActiveAtBatDiamondWrapper,
  ActiveAtBatWrapper, 
  ActiveAtBatContent,
  CloseButton,
  Diamond,
} from './StyledAtBat';
import { UL } from '../../styled-components/Global';


import { IntHitter, IntPitcher } from '../../interfaceDeclarations/scorebookInts';
import { IntHalfInning, IntPitch } from '../../interfaceDeclarations/inningInts';

export function ActiveAtBat(props: {
  hitter: IntHitter,
  pitcher: IntPitcher,
  inningIndex: number,
  inning: IntHalfInning,
  toggleAtBat: () => void;
  onUpdateGame: (inning: IntHalfInning, inningIndex: number, team: 'away' | 'home') => void,
}) {
  const [pitches, setPitches] = useState<IntPitch[]>([]);
  return (
    <ActiveAtBatWrapper>
      <CloseButton 
        onClick={() => { props.toggleAtBat(); }}
      >&#x2715;</CloseButton>
      <ActiveAtBatLayout>
        <ActiveAtBatMatchup>
          <div>
            <h3>Pitching</h3>
            {props.pitcher.name}
          </div>
          <div>
            <h3>At Bat</h3>
            {props.hitter.name}
          </div>
          {pitches.length > 0 && (
            <div>
              <h3>Pitches</h3>
              <UL>
                {pitches.map((pitch: IntPitch, index: number) => {
                  <li key={`pitch-${index+1}`}>
                    {index + 1}
                    {pitch.result}
                    {pitch.pitchType ? pitch.pitchType : ''}
                    {pitch.speed ? pitch.speed : ''}
                  </li>
                })}
              </UL>
            </div>
          )}
        </ActiveAtBatMatchup>
        <ActiveAtBatContent>
          <ActiveAtBatDiamondWrapper>
            <Diamond />
          </ActiveAtBatDiamondWrapper>
          <NewPitch 
            onSavePitch={(pitch: IntPitch) => {
              setPitches([...pitches, pitch]);
            }}
          />
        </ActiveAtBatContent>
      </ActiveAtBatLayout>
    </ActiveAtBatWrapper>
  );
}