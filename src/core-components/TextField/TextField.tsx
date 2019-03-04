import React, { FormEvent } from 'react';

import { 
  StyledTextInputLabel,
  StyledTextInput, 
  StyledTextInputWrapper,
} from './StyledTextField';

export function TextField(props: {
  id: string,
  label?: string,
  onChange: (id: string, value: string) => void,
}) {

  return (
    <StyledTextInputWrapper>
      <StyledTextInput 
        id={props.id}
        type="text"
        onChange={(event: FormEvent<HTMLInputElement>) => {
          props.onChange(event.currentTarget.id, event.currentTarget.value);
        }}
      />
      {props.label && (
        <StyledTextInputLabel htmlFor={props.id}>{props.label}</StyledTextInputLabel>
      )}
    </StyledTextInputWrapper>
  );
}

export function NumericField(props: {
  id: string,
  label?: string,
  min?: number,
  max?: number,
  onChange: (id: string, value: string) => void,
}) {
  
  return (
    <StyledTextInputWrapper>
      <StyledTextInput
        id={props.id}
        type="number"
        min={props.min || undefined}
        max={props.max || undefined}
        onChange={(event: FormEvent<HTMLInputElement>) => {
          props.onChange(event.currentTarget.id, event.currentTarget.value);
        }}
      />
      {props.label && (
        <StyledTextInputLabel htmlFor={props.id}>{props.label}</StyledTextInputLabel>
      )}
    </StyledTextInputWrapper>
  );
}