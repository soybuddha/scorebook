import React from 'react';

import { FormField } from './StyledForm';

export function TextInput(props: {
  id: string,
  className?: string,
  value: undefined|string,
  label?: string,
  onChange: (id: string, value: string) => void,
}) {
  return (
    <FormField>
      {props.label && (
        <label htmlFor={props.id}>{props.label}</label>
      )}
      <input 
        type="text" 
        id={props.id} 
        value={props.value} 
        onChange={(event: {target: { value: string }}) => {
          props.onChange(props.id, event.target.value)
        }} 
      />
    </FormField>
  );
}