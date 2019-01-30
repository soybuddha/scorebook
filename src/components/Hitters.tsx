import React from 'react';

import { IntHitter } from '../interfaceDeclarations/scorebookInts';

interface IntHittersProps {
  hitters: IntHitter[],
}

export function Hitters(props: IntHittersProps) {
  return (
    <div>Hitters</div>
  );
}