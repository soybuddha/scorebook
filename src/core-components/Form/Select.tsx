import React, { ChangeEvent } from 'react';

import {
  StyledFormElementLabel,
  StyledSelectElement,
  StyledFormElementWrapper,
} from '../styles/StyledForm';

import { IntSelectOption } from '../typeDeclarations/typeForm';

export function Select(props: {
  id: string,
  value: undefined|string,
  options: IntSelectOption[],
  label?: string,
  onChange: (id: string, value: string) => void,
}) {
  return (
    <StyledFormElementWrapper>
      <StyledSelectElement 
        onChange={(event: ChangeEvent<HTMLSelectElement>) => { 
          console.log(event.currentTarget)
          props.onChange(event.currentTarget.id, event.currentTarget.value) 
        }}
      >
        {props.options.map((option: IntSelectOption, index: number) => (
          <option key={`${option.value}-${index}`} value={option.value}>
            {option.displayed}
          </option>
        ))}
      </StyledSelectElement>
      {props.label && (
        <StyledFormElementLabel htmlFor={props.id}>{props.label}</StyledFormElementLabel>
      )}
    </StyledFormElementWrapper>
  );
}