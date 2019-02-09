import React from 'react';

import { AddTeam } from './AddTeam';

import { CreateGameLayout, CreateTeams } from './StyledCreateGame';
import { FormRow } from '../Form/StyledForm';

import { IntTeamState, IntHitter, IntPitcher } from '../../interfaceDeclarations/scorebookInts';

function validateLineup(lineup: IntHitter[]): boolean {
  let result: boolean = true;

  for (let i = 0; i < lineup.length; i++) {
    if (
      lineup[i].guid.trim() === '' ||
      lineup[i].position === undefined ||
      lineup[i].name.trim() === '' ||
      // lineup[i].number === undefined ||
      !lineup[i].hitting ||
      !lineup[i].throwing
    ) { result = false; break; }
  }

  return result;
}

function validatePitchers(pitchers: IntPitcher[]): boolean {
  let result: boolean = true;
  for (let i = 0; i < pitchers.length; i++) {
    if (
      pitchers[i].guid.trim() === '' ||  
      pitchers[i].number === undefined ||
      pitchers[i].name.trim() === '' ||
      !pitchers[i].hitting ||
      !pitchers[i].throwing
    ) { result = false; break; }
  }

  return result;
}

function canCreate(awayTeam: IntTeamState, homeTeam: IntTeamState): boolean {
  const validCity: boolean = awayTeam.city.trim() !== '' && homeTeam.city.trim() !== '';
  const validName: boolean = awayTeam.name.trim() !== '' && homeTeam.name.trim() !== '';
  const validLeague: boolean = !!(awayTeam.league && homeTeam.league);
  const validLineup: boolean = validateLineup(awayTeam.lineup) && validateLineup(homeTeam.lineup);
  const validPitcher: boolean = validatePitchers(awayTeam.pitchers) && validatePitchers(homeTeam.pitchers);

  return validCity && validName && validLeague && validLineup && validPitcher;
}

export function CreateGame(props: {
  awayTeam: IntTeamState,
  homeTeam: IntTeamState,
  teamUpdate: (type: 'homeTeam'|'awayTeam', team: IntTeamState) => void,
  createMockData: () => void,
  createGame: () => void,
}) {
  return (
    <CreateGameLayout>
      <CreateTeams>
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
      </CreateTeams>
      <FormRow>
        <button 
          type="button" 
          disabled={!canCreate(props.awayTeam, props.homeTeam)}
          onClick={(event) => {
            event.preventDefault();
            props.createGame();
          }}
        >
          Create Game
        </button>
        <button
          type="button"
          className=""
          onClick={(event) => {
            event.preventDefault();
            props.createMockData();
          }}
        >
          Mock Game Data
        </button>
      </FormRow>
    </CreateGameLayout>
  );
}
