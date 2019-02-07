import React from 'react';

import { TextInput } from '../../components/Form/TextInput';
import { FormRow } from '../../components/Form/StyledForm';

import { IntHitter } from '../../interfaceDeclarations/scorebookInts';

export function AddHitter(props: {
  order: number,
  hitter: IntHitter,
  onChange: (hitter: IntHitter) => void,
}) {
  return (
    <FormRow>
      <TextInput
        id={`position-${props.order}`}
        value={props.hitter.position.toString()}
        label="PO"
        onChange={(id: string, value: string) => {
          const updatedHitter: IntHitter = {
            ...props.hitter,
            position: parseInt(value),
          };

          props.onChange(updatedHitter);
        }}
      />
    </FormRow>
  );
}