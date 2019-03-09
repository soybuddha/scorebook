import React, { useState } from 'react';

import { NumericField } from '../../core-components/Form/TextField';
import { Select } from '../../core-components/Form/Select'
import { IntPitch } from '../../typeDeclarations/typeInning';

export function NewPitch(props: {
  onSavePitch: (pitch: IntPitch) => void,
}) {
  const [addingPitch, setAddingPitch] = useState<boolean>(false);
  const [currentPitch, setCurrentPitch] = useState<IntPitch>({
    result: '',
  });

  if (addingPitch) {
    return (
      <div>
        <NumericField 
          id="pitch-speed"
          label="Speed"
          min={0}
          max={120}
          onChange={(id: string, value: string) => {
            setCurrentPitch({
              ...currentPitch, 
              speed: parseInt(value),
            });
          }}
        />
        <Select
          id="pitch-type"
          label="Type"
          options={[]}
          onChange={(id: string, value: string) => {
            setCurrentPitch({
              ...currentPitch,
              pitchType: value,
            });
          }}
        />
        <button 
          disabled={currentPitch.result === ''}
          onClick={() => {
            setAddingPitch(false);
            setCurrentPitch({ result: '' });
            props.onSavePitch(currentPitch);
          }}
        >
          Save
        </button>
        <button
          onClick={() => {
            setAddingPitch(false);
            setCurrentPitch({ result: '' });
          }}
        >
          Cancel
        </button>
      </div>
    );
  }

  return (
    <button
      onClick={() => { setAddingPitch(true); }}
    >
      Pitch
    </button>
  );
}