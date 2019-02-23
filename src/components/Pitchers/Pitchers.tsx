import React from 'react';

import { 
  PitcherLayout, 
  PitchingTitles, 
  PitcherNumber,
  PitcherName,
  PitcherStat,
} from './StyledPitchers';
import { IntPitcher } from '../../interfaceDeclarations/scorebookInts';

export function PitchersLayout(props: {
  pitchers: IntPitcher[],
}) {
  return (
    <PitcherLayout>
      <PitchingTitles>
        <PitcherNumber><strong>No</strong></PitcherNumber>
        <PitcherName><strong>Pitcher</strong></PitcherName>
        <PitcherStat><strong>IP</strong></PitcherStat>
        <PitcherStat><strong>H</strong></PitcherStat>
        <PitcherStat><strong>ER</strong></PitcherStat>
        <PitcherStat><strong>BB</strong></PitcherStat>
        <PitcherStat><strong>K</strong></PitcherStat>
        <PitcherStat><strong>BF</strong></PitcherStat>
        <PitcherStat><strong>TP</strong></PitcherStat>
      </PitchingTitles>
      <ul>
        {props.pitchers.map((pitcher: IntPitcher, index: number) => (
          <li key={index}>
            <div>{pitcher.number}</div>
            <div>{pitcher.name} ({pitcher.throwing})</div>
          </li>
        ))}
      </ul>
    </PitcherLayout>
  );
} 