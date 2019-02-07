import React from 'react';

import { NumericInput, TextInput } from '../Form/TextInput';
import { RadioInput } from '../Form/RadioInput';
import { FormRow } from '../Form/StyledForm';

import { IntHitter } from '../../interfaceDeclarations/scorebookInts';

export function AddHitter(props: {
  id: string,
  order: number,
  hitter: IntHitter,
  onChange: (hitter: IntHitter) => void,
}) {
  return (
    <FormRow>
      <NumericInput
        id={`${props.id}-position-${props.order}`}
        value={props.hitter.position ? props.hitter.position.toString() : undefined}
        label="PO"
        onChange={(id: string, value: number) => {
          const updatedHitter: IntHitter = {
            ...props.hitter,
            position: value,
          };

          props.onChange(updatedHitter);
        }}
      />
      <TextInput
        id={`${props.id}-name-${props.order}`}
        value={props.hitter.name}
        label="Name"
        onChange={(id: string, value: string) => {
          const updatedHitter: IntHitter = {
            ...props.hitter,
            name: value,
          };

          props.onChange(updatedHitter);
        }}
      />
      <RadioInput
        id={`${props.id}-hitting-${props.order}`}
        label="Hits"
        name={`${props.id}-hitter-hitting-${props.order}`}
        options={[
          { id: `${props.id}-hitting-right`, value: 'R' },
          { id: `${props.id}-hitting-left`, value: 'L' },
          { id: `${props.id}-hitting-switch`, value: 'S' },
        ]}
        value={props.hitter.hitting}
        onChange={(id: string, value: string) => {
          if (value === 'R' || value === 'L' || value === 'S') {
            const updatedHitter: IntHitter = {
              ...props.hitter,
              hitting: value,
            };

            props.onChange(updatedHitter);
          }
        }}
      />
      <RadioInput
        id={`${props.id}-throwing-${props.order}`}
        label="Throws"
        name={`${props.id}-hitter-throwing-${props.order}`}
        options={[
          { id: `${props.id}-throwing-right`, value: 'R' },
          { id: `${props.id}-throwing-left`, value: 'L' },
        ]}
        value={props.hitter.throwing}
        onChange={(id: string, value: string) => {
          if (value === 'R' || value === 'L') {
            const updatedHitter: IntHitter = {
              ...props.hitter,
              throwing: value,
            };

            props.onChange(updatedHitter);
          }
        }}
      />
    </FormRow>
  );
}