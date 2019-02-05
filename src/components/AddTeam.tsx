import React from 'react';

import { SectionTitle } from '../styled-components/Global';
import { FormRow, FormField } from '../styled-components/Form';

import { IntTeamState } from '../Scorebook';

export function AddTeam(props: {
  side: string,
  team: IntTeamState,
}) {
  return (
    <div>
      <SectionTitle>{props.side}</SectionTitle>
      <FormRow>
        <FormField>
          <label htmlFor="awayCity">City</label>
          <input type="text" id="awayCity" value={props.team.city} />
        </FormField>
        <FormField>
          <label htmlFor="awayTeam">Team Name</label>
          <input type="text" id="awayTeam" value={props.team.name} />
        </FormField>
      </FormRow>
    </div>
  );
}