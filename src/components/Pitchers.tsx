import React from 'react';

import { IntPitcher } from '../interfaceDeclarations/scorebookInts';

interface IntPitchersProps {
  pitchers: IntPitcher[],
}

export function Pitchers(props: IntPitchersProps) {
  return (
    <div>Pitchers</div>
  );
}