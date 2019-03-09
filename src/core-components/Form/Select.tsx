import React from 'react';

import {
  StyledFormElementLabel,
  StyledSelectElement,
  StyledFormElementWrapper,
} from '../styles/StyledForm';

import { IntSelectOption } from '../typeDeclarations/typeForm';

export function Select(props: {
  id: string,
  options: IntSelectOption[],
  label?: string,
  onChange: (id: string, value: string) => void,
}) {
  return (
    <StyledFormElementWrapper>
      <StyledSelectElement>
        {props.options.map((option: IntSelectOption, index: number) => (
          <option key={`${option.value}-${index}`}>
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