import React from 'react';

import { InningLayout } from '../styled-components/Layout';

import { IntInning, IntHitter } from '../interfaceDeclarations/scorebookInts';

interface IntInningsProps {
  innings: IntInning[],
  hitters: IntHitter[],
}

export function Innings(props: IntInningsProps) {
  return (
    <InningLayout>
      {props.innings.map((inning: IntInning) => (
        <li key={`inning-${inning.number}`}>{inning.number}</li>
      ))}
    </InningLayout>
  );
}