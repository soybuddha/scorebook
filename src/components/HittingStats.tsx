import React from 'react';

import { IntHitter } from '../interfaceDeclarations/scorebookInts';
import { HittingStatsLayout } from '../styled-components/Layout';

interface IntHittingStatsProps {
  hitters: IntHitter[],
}

export function HittingStats(props: IntHittingStatsProps) {
  console.log('test');
  return (
    <HittingStatsLayout>
      <div>AB</div>
      <div>R</div>
      <div>H</div>
      <div>BB</div>
      <div>LOB</div>
      <div>RBI</div>
    </HittingStatsLayout>
  );
}