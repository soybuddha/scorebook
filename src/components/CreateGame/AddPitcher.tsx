import React from 'react';

import { NumericInput, TextInput } from '../../components/Form/TextInput';
import { RadioInput } from '../../components/Form/RadioInput';
import { FormRow } from '../../components/Form/StyledForm';

import { IntPitcher } from '../../typeDeclarations/typeScorebook';

export function AddPitcher(props: {
  id: string,
  pitcher: IntPitcher,
  onChange: (pitcher: IntPitcher) => void,
}) {
  return (
    <div>
      <FormRow>
        <NumericInput 
          id={`${props.id}-number`}
          value={props.pitcher.number !== undefined ? props.pitcher.number : undefined}
          label="#"
          onChange={(id: string, value: undefined | number) => {
            const updatedPitcher: IntPitcher = {
              ...props.pitcher,
              number: value,
            };

            props.onChange(updatedPitcher);
          }}
        />
        <TextInput
          id={`${props.id}-name`}
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
          id={`${props.id}-throwing`}
          label="Throws"
          name={`${props.id}-throwing`}
          options={[
            { id: `${props.id}-throwing-right`,   value: 'R' },
            { id: `${props.id}-throwing-left`,    value: 'L' },
            { id: `${props.id}-throwing-switch`,  value: 'S' },
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
          id={`${props.id}-hitting`}
          label="Hits"
          name={`${props.id}-hitting`}
          options={[
            { id: `${props.id}-hitting-right`, value: 'R' },
            { id: `${props.id}-hitting-left`, value: 'L' },
            { id: `${props.id}-hitting-switch`, value: 'S' },
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