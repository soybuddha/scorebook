import React from 'react';

import { TextInput } from '../../components/Form/TextInput';
import { RadioInput } from '../../components/Form/RadioInput';
import { FormRow } from '../../components/Form/StyledForm';

import { IntPitcher } from '../../interfaceDeclarations/scorebookInts';

export function AddPitcher(props: {
  pitcher: IntPitcher,
  onChange: (pitcher: IntPitcher) => void,
}) {
  return (
    <div>
      <FormRow>
        <TextInput 
          id="pitcherNumber"
          value={props.pitcher.number ? props.pitcher.number.toString() : undefined}
          label="#"
          onChange={(id: string, value: string) => {
            const updatedPitcher: IntPitcher = {
              ...props.pitcher,
              number: parseInt(value),
            };

            props.onChange(updatedPitcher);
          }}
        />
        <TextInput
          id="pitcherName"
          value={props.pitcher.name}
          label="Name"
          onChange={(id: string, value: string) => {
            const updatedPitcher: IntPitcher = {
              ...props.pitcher,
              name: value,
            };

            props.onChange(updatedPitcher);
          }}
        />
        <RadioInput
          label="Throws"
          name="pitcher-throwing"
          options={[
            { id: 'throwing-right',   value: 'R' },
            { id: 'throwing-left',    value: 'L' },
            { id: 'throwing-switch',  value: 'S' },
          ]}
          value={props.pitcher.throwing}
          onChange={(id: string, value: string) => {
            if (value === 'R' || value === 'L' || value === 'S') {
              const updatedPitcher: IntPitcher = {
                ...props.pitcher,
                throwing: value,
              };

              props.onChange(updatedPitcher);
            }
          }}
        />
        <RadioInput
          label="Hits"
          name="pitcher-hitting"
          options={[
            { id: 'hitting-right', value: 'R' },
            { id: 'hitting-left', value: 'L' },
            { id: 'hitting-switch', value: 'S' },
          ]}
          value={props.pitcher.hitting}
          onChange={(id: string, value: string) => {
            if (value === 'R' || value === 'L' || value === 'S') {
              const updatedPitcher: IntPitcher = {
                ...props.pitcher,
                hitting: value,
              };

              props.onChange(updatedPitcher);
            }
          }}
        />
      </FormRow>
    </div>
  );
}