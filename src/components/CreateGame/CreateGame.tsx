import React from 'react';

import { AddTeam } from './AddTeam';

import { IntTeamState } from '../../Scorebook';

import { CreateGameLayout } from './StyledCreateGame';

export function CreateGame(props: {
  awayTeam: IntTeamState,
  homeTeam: IntTeamState,
}) {
  return (
    <CreateGameLayout>
      <AddTeam side="Away Team" team={props.awayTeam} />
      <AddTeam side="Home Team" team={props.awayTeam} />
    </CreateGameLayout>
  );
}
