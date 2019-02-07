import React from 'react';

import { AddTeam } from './AddTeam';

import { CreateGameLayout } from './StyledCreateGame';

import { IntTeamState } from '../../interfaceDeclarations/scorebookInts';

export function CreateGame(props: {
  awayTeam: IntTeamState,
  homeTeam: IntTeamState,
  teamUpdate: (type: 'homeTeam'|'awayTeam', team: IntTeamState) => void,
}) {
  return (
    <CreateGameLayout>
      <AddTeam 
        side="Away Team" 
        team={props.awayTeam} 
        teamUpdate={(team: IntTeamState) => {
          props.teamUpdate('awayTeam', team);
        }} 
      />
      <AddTeam
        side="Home Team"
        team={props.homeTeam}
        teamUpdate={(team: IntTeamState) => {
          props.teamUpdate('homeTeam', team);
        }}
      />
    </CreateGameLayout>
  );
}
