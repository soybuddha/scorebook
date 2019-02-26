import React from 'react';

import { Lineup } from '../Lineup/Lineup';
import { PitchersLayout } from '../Pitchers/Pitchers';

import { IntHitter, IntPitcher } from '../../interfaceDeclarations/scorebookInts';
import { IntHalfInning } from '../../interfaceDeclarations/inningInts';

import { Team } from './StyledTeam';

export function TeamLayout(props: {
  lineup: IntHitter[],
  atBats: IntHalfInning[],
  pitchers: IntPitcher[],
  onTheMound: IntPitcher,
  onUpdateGame: (innings: Array<IntHalfInning[]>) => void,
}) {
  return (
    <Team>
      <Lineup
        lineup={props.lineup}
        atBats={props.atBats}
        onTheMound={props.onTheMound}
      />
      <PitchersLayout pitchers={props.pitchers} />
    </Team>
  );
}