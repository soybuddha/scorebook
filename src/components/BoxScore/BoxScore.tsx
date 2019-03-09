import React from 'react';

import { calculateTotal } from '../../utils/statsUtils';

import {
  BoxScoreWrapper,
  BoxScoreLayout,
  BoxScoreTeam,
  BoxScoreInningLayout, 
  InningLayout,
  GameTotals,
  BoxScoreHeading,
  TotalLayout,
  Total,
  TeamWrapper,
  TeamSpacer,
} from './StyledBoxScore';

import { IntHalfInning } from '../../typeDeclarations/typeInning';

interface IntBoxScoreProps {
  homeCity: string,
  awayCity: string,
  innings: Array<IntHalfInning[]>,
}

export function BoxScore(props: IntBoxScoreProps) {
  return (
    <BoxScoreWrapper>
      <BoxScoreLayout>
        <TeamWrapper>
          <TeamSpacer>&nbsp;</TeamSpacer>
          <BoxScoreTeam>{props.awayCity}</BoxScoreTeam>
          <BoxScoreTeam>{props.homeCity}</BoxScoreTeam>
        </TeamWrapper>
        <BoxScoreInningLayout>
          {props.innings.map((inning: IntHalfInning[], index: number) => (
            <li key={`inning-${index}`}>
              <BoxScoreHeading>{index + 1}</BoxScoreHeading>
              <InningLayout>
                {inning.map((halfInning: IntHalfInning, halfIndex: number) => (
                  <li key={`inning-${index}-halfInning-${halfIndex}`}>
                    <span>{halfInning.runs ? halfInning.runs : <React.Fragment>&nbsp;</React.Fragment>}</span>
                  </li>
                ))}
              </InningLayout>
            </li>
          ))}
        </BoxScoreInningLayout>
        <GameTotals>
          <TotalLayout>
            <BoxScoreHeading>R</BoxScoreHeading>
            <Total>{calculateTotal('away', 'runs', props.innings)}</Total>
            <Total>{calculateTotal('home', 'runs', props.innings)}</Total>
          </TotalLayout>
          <TotalLayout>
            <BoxScoreHeading>H</BoxScoreHeading>
            <Total>{calculateTotal('away', 'hits', props.innings)}</Total>
            <Total>{calculateTotal('home', 'hits', props.innings)}</Total>
          </TotalLayout>
          <TotalLayout>
            <BoxScoreHeading>E</BoxScoreHeading>
            <Total>{calculateTotal('away', 'errors', props.innings)}</Total>
            <Total>{calculateTotal('home', 'errors', props.innings)}</Total>
          </TotalLayout>
        </GameTotals>
      </BoxScoreLayout>
    </BoxScoreWrapper>
  );
}