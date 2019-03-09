import React from 'react';

import { Lineup } from '../Lineup/Lineup';
import { PitchersLayout } from '../Pitchers/Pitchers';

import { IntHitter, IntPitcher } from '../../typeDeclarations/typeScorebook';
import { IntHalfInning } from '../../typeDeclarations/typeInning';

import { Team } from './StyledTeam';

export function TeamLayout(props: {
  lineup: IntHitter[],
  atBats: IntHalfInning[],
  pitchers: IntPitcher[],
  onTheMound: IntPitcher,
  onUpdateGame: (inning: IntHalfInning, inningIndex: number, team: 'away'|'home') => void,
}) {
  return (
    <Team>
      <Lineup
        lineup={props.lineup}
        atBats={props.atBats}
        onTheMound={props.onTheMound}
        onUpdateGame={props.onUpdateGame}
      />
      <PitchersLayout pitchers={props.pitchers} />
    </Team>
  );
}