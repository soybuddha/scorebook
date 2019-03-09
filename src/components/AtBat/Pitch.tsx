import React, { useState } from 'react';

import { NumericField, TextField } from '../../core-components/Form/TextField';
import { Select } from '../../core-components/Form/Select'
import { IntPitch } from '../../typeDeclarations/typeInning';

export function NewPitch(props: {
  onSavePitch: (pitch: IntPitch) => void,
}) {
  const [addingPitch, setAddingPitch] = useState<boolean>(false);
  const [currentPitch, setCurrentPitch] = useState<IntPitch>({
    result: '',
  });
  const [displayOtherPitcher, setOtherPitcher] = useState<boolean>(false);

  if (addingPitch) {
    return (
      <div>
        <NumericField 
          id="pitch-speed"
          label="Speed"
          min={0}
          max={120}
          value={currentPitch.speed ? currentPitch.speed.toString() : ''}
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
          value={currentPitch.pitchType ? currentPitch.pitchType : ''}
          options={[
            { value: '',              displayed: '' },
            { value: 'fast-ball',     displayed: 'Fast Ball' },
            { value: 'change-up',     displayed: 'Change Up' },
            { value: 'curve-ball',    displayed: 'Curve Ball' },
            { value: 'breaking-ball', displayed: 'Breaking Ball' },
            { value: 'other',         displayed: 'Other' },
          ]}
          onChange={(id: string, value: string) => {
            if (value === 'other') {
              setCurrentPitch({
                ...currentPitch,
                pitchType: undefined,
              });
              setOtherPitcher(true);
            } else {
              setOtherPitcher(false);
              setCurrentPitch({
                ...currentPitch,
                pitchType: value,
              });
            }
            
          }}
        />
        {displayOtherPitcher && (
          <TextField
            id="pitch-other-type"
            label="Pitch Type"
            value={currentPitch.pitchType ? currentPitch.pitchType : ''}
            onChange={(id: string, value: string) => {
              setCurrentPitch({
                ...currentPitch,
                pitchType: value,
              })
            }}
          />
        )}
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
            setOtherPitcher(false);
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