import React from 'react';

import { FormField } from './StyledForm';

export function TextInput(props: {
  type?: string,
  id: string,
  className?: undefined | string,
  value: undefined | string,
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
        onChange={event => {
          props.onChange(props.id, event.target.value)
        }} 
      />
    </FormField>
  );
}

export function NumericInput(props: {
  id: string,
  className?: string,
  value: undefined | number,
  label?: string,
  type?: string,
  onChange: (id: string, value: undefined | number) => void,
}) {
  return (
    <FormField className={props.className ? `${props.className}-form-field` : ''}>
      {props.label && (
        <label htmlFor={props.id}>{props.label}</label>
      )}
      <input
        type="number"
        id={props.id}
        value={props.value === undefined ? '' : props.value.toString()}
        className={props.className ? props.className : ''}
        onChange={event => {
          if (event.target.value === '') {
            props.onChange(props.id, undefined)
          } else {
            props.onChange(props.id, Number(event.target.value));
          }
        }}
      />
    </FormField>
  );
}