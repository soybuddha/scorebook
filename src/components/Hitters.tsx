import React from 'react';

import { IntHitter } from '../typeDeclarations/typeScorebook';

interface IntHittersProps {
  hitters: IntHitter[],
}

export function Hitters(props: IntHittersProps) {
  return (
    <div>Hitters</div>
  );
}