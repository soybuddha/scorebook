import React from 'react';

import {
  BoxScoreLayout,
  BoxScoreInningLayout, 
  InningLayout,
} from './StyledBoxScore';
import { Team } from '../../styled-components/Global';

import { IntHalfInning } from '../../interfaceDeclarations/inningInts';

interface IntBoxScoreProps {
  homeCity: string,
  awayCity: string,
  innings: Array<IntHalfInning[]>,
}

export function BoxScore(props: IntBoxScoreProps) {
  return (
    <BoxScoreLayout>
      <div>
        <Team>{props.awayCity}</Team>
        <Team>{props.homeCity}</Team>
      </div>
      <BoxScoreInningLayout>
        {props.innings.map((inning: IntHalfInning[], index: number) => (
          <li key={`inning-${index}`}>
            <InningLayout>
              {inning.map((halfInning: IntHalfInning, halfIndex: number) => (
                <li key={`inning-${index}-halfInning-${halfIndex}`}>
                  {halfInning.runs}
                </li>
              ))}
            </InningLayout>
          </li>
        ))}
      </BoxScoreInningLayout>
    </BoxScoreLayout>
  );
}