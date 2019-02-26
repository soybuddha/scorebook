import React from 'react';

import { IntHitter, IntPitcher } from '../../interfaceDeclarations/scorebookInts';
import { IntHalfInning } from '../../interfaceDeclarations/inningInts';
import { AtBat } from '../AtBat/AtBat';
// import { StatCount } from './StatCount';

import { UL } from '../../styled-components/Global';
import { 
  // HittingStatsLayout,
  // HittingStat,
  InningTitle,
  LineupLayout, 
  LineupInnings,
  LineupRow,
  LineupTitle, 
  Player,
  Position,
  // StatTitle,
} from './StyledLineup';

export function Lineup(props: {
  lineup: IntHitter[],
  atBats: IntHalfInning[],
  onTheMound: IntPitcher,
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
              <AtBat 
                key={`inning-${index + 1}-atbat-${atBatIndex + 1}`} 
                inningIndex={index}
                hitter={atBat}
                pitcher={props.onTheMound}
              />
            ))}
          </li>
        ))}
      </LineupInnings>
      { /*
      <HittingStatsLayout>
        <HittingStat>
          <StatTitle><strong>AB</strong></StatTitle>
          {props.lineup.map((hitter: IntHitter, index: number) => (
            <StatCount key={`ab-${index}`} />
          ))}
        </HittingStat>
        <HittingStat>
          <StatTitle><strong>R</strong></StatTitle>
          {props.lineup.map((hitter: IntHitter, index: number) => (
            <StatCount key={`r-${index}`} />
          ))}
        </HittingStat>
        <HittingStat>
          <StatTitle><strong>H</strong></StatTitle>
          {props.lineup.map((hitter: IntHitter, index: number) => (
            <StatCount key={`h-${index}`} />
          ))}
        </HittingStat>
        <HittingStat>
          <StatTitle><strong>BB</strong></StatTitle>
          {props.lineup.map((hitter: IntHitter, index: number) => (
            <StatCount key={`bb-${index}`} />
          ))}
        </HittingStat>
        <HittingStat>
          <StatTitle><strong>LOB</strong></StatTitle>
          {props.lineup.map((hitter: IntHitter, index: number) => (
            <StatCount key={`lob-${index}`} />
          ))}
        </HittingStat>
        <HittingStat>
          <StatTitle><strong>RBI</strong></StatTitle>
          {props.lineup.map((hitter: IntHitter, index: number) => (
            <StatCount key={`rbi-${index}`} />
          ))}
        </HittingStat>
      </HittingStatsLayout>
          */}
    </LineupLayout>
  );
}