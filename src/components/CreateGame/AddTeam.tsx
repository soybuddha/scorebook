import React from 'react';

import { AddPitcher } from './AddPitcher';
import { AddLineup } from './AddLineup';
import { TextInput } from '../Form/TextInput';
import { RadioInput } from '../Form/RadioInput';

import { SectionTitle, SectionSubtitle } from '../../styled-components/Global';
import { FormRow } from '../../components/Form/StyledForm';
import { AddTeamLayout } from './StyledCreateGame';

import { IntTeamState, IntHitter, IntPitcher } from '../../interfaceDeclarations/scorebookInts';

export function AddTeam(props: {
  side: string,
  team: IntTeamState,
  teamUpdate: (team: IntTeamState) => void,
}) {
  return (
    <AddTeamLayout>
      <SectionTitle>{props.side}</SectionTitle>
      <FormRow>
        <TextInput
          id="awayCity"
          value={props.team.city}
          label="City"
          onChange={(id: string, value: string) => {
            const updatedTeam: IntTeamState = {
              ...props.team,
              city: value,
            }

            props.teamUpdate(updatedTeam);
          }}
        />
        <TextInput
          id="awayTeam"
          value={props.team.name}
          label="Team Name"
          onChange={(id: string, value: string) => {
            const updatedTeam: IntTeamState = {
              ...props.team,
              name: value,
            }

            props.teamUpdate(updatedTeam);
          }}
        />
        <RadioInput
          label="Throws"
          name="pitcher-throwing"
          options={[
            { id: `${props.side}-al`, value: 'AL' },
            { id: `${props.side}-nl`, value: 'NL' },
          ]}
          value={props.team.league}
          onChange={(id: string, value: string) => {
            if (value === 'AL' || value === 'NL') {
              const updatedTeam: IntTeamState = {
                ...props.team,
                league: value,
              };

              props.teamUpdate(updatedTeam);
            }
          }}
        />
      </FormRow>
      <SectionSubtitle>Starting Pitcher</SectionSubtitle>
      <AddPitcher
        pitcher={props.team.pitchers[0]} 
        onChange={(pitcher: IntPitcher) => {
          const updatedTeam: IntTeamState = {
            ...props.team,
            pitchers: [pitcher],
          }

          props.teamUpdate(updatedTeam)
        }}
      />
      <SectionSubtitle>Lineup</SectionSubtitle>
      <AddLineup 
        lineup={props.team.lineup}
        onChange={(lineup: IntHitter[]) => {
          const updatedTeam: IntTeamState = {
            ...props.team,
            lineup,
          };

          props.teamUpdate(updatedTeam);
        }}        
      />>
    </AddTeamLayout>
  );
}