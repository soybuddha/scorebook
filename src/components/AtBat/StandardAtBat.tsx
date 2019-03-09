import React, { MouseEvent } from 'react';

import {
  Diamond,
  StyledAtBat,
} from '../AtBat/StyledAtBat';

import { IntHalfInning } from '../../typeDeclarations/typeInning';

export function StandardAtBat(props: {
  inning: IntHalfInning,
  onClick: (event: MouseEvent<HTMLElement>) => void,
}) {
  return (
    <StyledAtBat onClick={e => { props.onClick(e); }}>
      <Diamond />
    </StyledAtBat >
  );
}