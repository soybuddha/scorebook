import React from 'react';

import { FormField } from './StyledForm';

export function TextInput(props: {
  type?: string,
  id: string,
  className?: void|string,
  value: undefined|string,
  label?: string,
  onChange: (id: string, value: string) => void,
}) {
  return (
    <FormField className={props.className ? `${props.className}-form-field` : ''}>
      {props.label && (
        <label htmlFor={props.id}>{props.label}</label>
      )}
      <input 
        type={props.type ? props.type : 'text'}
        id={props.id} 
        value={props.value} 
        className={props.className ? props.className : ''}
        onChange={(event: {target: { value: string }}) => {
          props.onChange(props.id, event.target.value)
        }} 
      />
    </FormField>
  );
}

export function NumericInput(props: {
  id: string,
  className?: string,
  value: undefined | string,
  label?: string,
  type?: string,
  onChange: (id: string, value: number) => void,
}) {
  return (
    <TextInput
      type="number"
      id={props.id}
      className={props.className}
      value={props.value}
      label={props.label}
      onChange={(id: string, value: string) => {

        props.onChange(props.id, parseInt(value, 10))
      }}
    />
  );
}