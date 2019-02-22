import React from 'react';

import { IntHitter } from '../../interfaceDeclarations/scorebookInts';
import { IntHalfInning } from '../../interfaceDeclarations/inningInts';
import { AtBat } from './AtBat';

import { UL } from '../../styled-components/Global';
import { LineupLayout, LineupInnings } from './StyledLineup';

export function Lineup(props: {
  lineup: IntHitter[],
  atBats: IntHalfInning[],
}) {
  return (
    <LineupLayout>
      <UL>
        <li>
          <span>PO</span>
          <span>Player</span>
        </li>
        {props.lineup.map((hitter: IntHitter, index: number) => (
          <li key={hitter.guid}>
            {hitter.position || ''}
            {hitter.name}
          </li>
        ))}
      </UL>
      <LineupInnings>
        {props.atBats.map((inning: IntHalfInning, index: number) => (
          <li key={`inning-${index + 1}`}>
            <div>{index + 1}</div>
            {props.lineup.map((atBat: IntHitter, atBatIndex: number) => (
              <AtBat key={`inning-${index + 1}-atbat-${atBatIndex + 1}`} />
            ))}
          </li>
        ))}
      </LineupInnings>
    </LineupLayout>
  );
}