import React, { useState } from 'react';

import { 
  Diamond, 
  StyledAtBat, 
} from './StyledLineup';

export function AtBat(props: {}) {

  const [focused, setFocus] = useState<boolean>(false);

  if (focused) {
    return (<div>FOCUSED!!!</div>)
  } else {
    return (
      <StyledAtBat onClick={e => {
        e.preventDefault();
        setFocus(!focused);
      }}>
        <Diamond />
      </StyledAtBat >
    );
  }
}