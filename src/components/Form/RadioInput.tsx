import React from 'react';

import { IntFormOptions } from './IntForm';

export function RadioInput(props: {
  id: string,
  label: string,
  name: string,
  options: IntFormOptions[],
  value: void|string,
  onChange: (id: string, value: string) => void,
}) {
  return (
    <div id={props.id}>
      <span>{props.label}</span>
      {props.options.map((v: IntFormOptions, i:number) => (
        <label htmlFor={v.id} key={`${v.id}-${i}`}>
          <input 
            type="radio" 
            name={props.name}
            id={v.id}
            value={v.value}
            onChange={(event: { target: { value: string }}) => {
              props.onChange(v.id, event.target.value);
            }}
          />
          {v.displayedValue ? v.displayedValue : v.value}
        </label>
      ))}
    </div>
  );
}