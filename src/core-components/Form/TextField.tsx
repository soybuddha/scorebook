import React, { FormEvent } from 'react';

import { 
  StyledFormElementLabel,
  StyledInputElement, 
  StyledFormElementWrapper,
} from '../styles/StyledForm';

export function TextField(props: {
  id: string,
  value: undefined|string,
  label?: string,
  onChange: (id: string, value: string) => void,
}) {

  return (
    <StyledFormElementWrapper>
      <StyledInputElement 
        id={props.id}
        type="text"
        value={props.value}
        onChange={(event: FormEvent<HTMLInputElement>) => {
          props.onChange(event.currentTarget.id, event.currentTarget.value);
        }}
      />
      {props.label && (
        <StyledFormElementLabel htmlFor={props.id}>{props.label}</StyledFormElementLabel>
      )}
    </StyledFormElementWrapper>
  );
}

export function NumericField(props: {
  id: string,
  value: undefined|string,
  label?: string,
  min?: number,
  max?: number,
  onChange: (id: string, value: string) => void,
}) {
  
  return (
    <StyledFormElementWrapper>
      <StyledInputElement
        id={props.id}
        type="number"
        value={props.value}
        min={props.min || undefined}
        max={props.max || undefined}
        onChange={(event: FormEvent<HTMLInputElement>) => {
          props.onChange(event.currentTarget.id, event.currentTarget.value);
        }}
      />
      {props.label && (
        <StyledFormElementLabel htmlFor={props.id}>{props.label}</StyledFormElementLabel>
      )}
    </StyledFormElementWrapper>
  );
}