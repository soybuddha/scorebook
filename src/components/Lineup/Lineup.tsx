import React from 'react';

import { IntHitter } from '../../interfaceDeclarations/scorebookInts';
import { IntHalfInning } from '../../interfaceDeclarations/inningInts';
import { AtBat } from './AtBat';
import { StatCount } from './StatCount';

import { UL } from '../../styled-components/Global';
import { 
  HittingStatsLayout,
  HittingStat,
  InningTitle,
  LineupLayout, 
  LineupInnings,
  LineupRow,
  LineupTitle, 
  Player,
  Position,
} from './StyledLineup';

export function Lineup(props: {
  lineup: IntHitter[],
  atBats: IntHalfInning[],
}) {
  return (
    <LineupLayout>
      <UL>
        <LineupTitle>
          <Position><strong>PO</strong></Position>
          <Player><strong>Player</strong></Player>
        </LineupTitle>
        {props.lineup.map((hitter: IntHitter, index: number) => (
          <LineupRow key={hitter.guid}>
            <Position>{hitter.position || ''}</Position>
            <Player>{hitter.name} {hitter.hitting ? `(${hitter.hitting})` : ''}</Player>
          </LineupRow>
        ))}
      </UL>
      <LineupInnings>
        {props.atBats.map((inning: IntHalfInning, index: number) => (
          <li key={`inning-${index + 1}`}>
            <InningTitle><strong>{index + 1}</strong></InningTitle>
            {props.lineup.map((atBat: IntHitter, atBatIndex: number) => (
              <AtBat key={`inning-${index + 1}-atbat-${atBatIndex + 1}`} />
            ))}
          </li>
        ))}
      </LineupInnings>
      <HittingStatsLayout>
        <HittingStat>
          <InningTitle><strong>AB</strong></InningTitle>
          {props.lineup.map((hitter: IntHitter, index: number) => (
            <StatCount />
          ))}
        </HittingStat>
        <HittingStat>
          <InningTitle><strong>R</strong></InningTitle>
          {props.lineup.map((hitter: IntHitter, index: number) => (
            <StatCount />
          ))}
        </HittingStat>
        <HittingStat>
          <InningTitle><strong>H</strong></InningTitle>
          {props.lineup.map((hitter: IntHitter, index: number) => (
            <StatCount />
          ))}
        </HittingStat>
        <HittingStat>
          <InningTitle><strong>BB</strong></InningTitle>
          {props.lineup.map((hitter: IntHitter, index: number) => (
            <StatCount />
          ))}
        </HittingStat>
        <HittingStat>
          <InningTitle><strong>LOB</strong></InningTitle>
          {props.lineup.map((hitter: IntHitter, index: number) => (
            <StatCount />
          ))}
        </HittingStat>
        <HittingStat>
          <InningTitle><strong>RBI</strong></InningTitle>
          {props.lineup.map((hitter: IntHitter, index: number) => (
            <StatCount />
          ))}
        </HittingStat>
      </HittingStatsLayout>
    </LineupLayout>
  );
}