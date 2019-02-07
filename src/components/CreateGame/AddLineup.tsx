import React from 'react';

import { AddHitter } from './AddHitter';

import { IntHitter } from '../../interfaceDeclarations/scorebookInts';

export function AddLineup(props: {
  id: string,
  lineup: IntHitter[],
  onChange: (lineup: IntHitter[]) => void,
}) {
  return (
    <div>
      {props.lineup.map((hitter: IntHitter, index: number) => (
        <AddHitter 
          key={`hitter-${index}`}
          id={`${props.id}-${index}`}
          order={index + 1}
          hitter={hitter}
          onChange={(hitter: IntHitter) => {
            const updatedLineup: IntHitter[] = [...props.lineup];
            updatedLineup[index] = hitter;

            props.onChange(updatedLineup);
          }}
        />
      ))}
    </div>
  );
}