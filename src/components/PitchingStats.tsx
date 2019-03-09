import React from 'react';

import { PitchingStatsLayout } from '../styled-components/Layout';

import { IntPitcher } from '../typeDeclarations/typeScorebook';

interface IntPitchingStatsProps {
  pitchers: IntPitcher[],
}

export function PitchingStats(props: IntPitchingStatsProps) {
  return (
    <PitchingStatsLayout>
      <div>IP</div>
      <div>H</div>
      <div>R</div>
      <div>ER</div>
      <div>BB</div>
      <div>K</div>
      <div>BF</div>
      <div>TP</div>
    </PitchingStatsLayout>
  );
}