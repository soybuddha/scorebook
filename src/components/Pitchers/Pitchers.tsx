import React from 'react';

import { 
  PitcherLayout, 
  PitchingTitles, 
  PitcherNumber,
  PitcherName,
  PitcherStat,
  Super,
} from './StyledPitchers';
import { IntPitcher } from '../../interfaceDeclarations/scorebookInts';
import { HorizontalUL, UL } from '../../styled-components/Global';

export function Pitcher(props: {
  pitcher: IntPitcher
}) {
  return (
    <HorizontalUL>
      <PitcherNumber>{props.pitcher.number}</PitcherNumber>
      <PitcherName>{props.pitcher.name} {props.pitcher.throwing ? `(${props.pitcher.throwing})` : ''}</PitcherName>
      <PitcherStat>0</PitcherStat>
      <PitcherStat>0</PitcherStat>
      <PitcherStat>0</PitcherStat>
      <PitcherStat>0</PitcherStat>
      <PitcherStat>0</PitcherStat>
      <PitcherStat>0</PitcherStat>
      <PitcherStat>0</PitcherStat>
    </HorizontalUL>
  );
}

export function PitchersLayout(props: {
  pitchers: IntPitcher[],
}) {
  return (
    <PitcherLayout>
      <PitchingTitles>
        <PitcherNumber><strong>N<Super>o</Super></strong></PitcherNumber>
        <PitcherName><strong>Pitcher</strong></PitcherName>
        <PitcherStat><strong>IP</strong></PitcherStat>
        <PitcherStat><strong>H</strong></PitcherStat>
        <PitcherStat><strong>ER</strong></PitcherStat>
        <PitcherStat><strong>BB</strong></PitcherStat>
        <PitcherStat><strong>K</strong></PitcherStat>
        <PitcherStat><strong>BF</strong></PitcherStat>
        <PitcherStat><strong>TP</strong></PitcherStat>
      </PitchingTitles>
      <UL>
        {props.pitchers.map((pitcher: IntPitcher, index: number) => (
          <li key={index}>
            <Pitcher pitcher={pitcher} />
          </li>
        ))}
      </UL>
    </PitcherLayout>
  );
} 