import React from 'react';

import { BoxScore } from './components/BoxScore';
import { Hitters } from './components/Hitters';
import { Innings } from './components/Innings';
import { HittingStats } from './components/HittingStats';
import { Pitchers } from './components/Pitchers';
import { PitchingStats } from './components/PitchingStats';
import { GameNotes } from './components/GameNotes';


import {
  HitterLayout,
  MainLayout,
  PitcherLayout,
} from './styled-components/Layout';

import { 
  IntHitter, 
  IntInning, 
  IntPitcher, 
} from './interfaceDeclarations/scorebookInts';

function initializeInnings(numberOfInnings: number): IntInning[] {
  const innings: IntInning[] = [];

  for (let i = 0; i < numberOfInnings; i += 1) {
    innings.push({ number: i + 1 });
  }

  return innings;
}

interface IntScorebookProps {

}

interface IntScorebookState {
  hitters: IntHitter[],
  pitchers: IntPitcher[],
  innings: IntInning[],
}

export class Scorebook extends React.Component<IntScorebookProps, IntScorebookState> {
  constructor(props: IntScorebookProps) {
    super(props);

    this.state = {
      hitters: [],
      pitchers: [],
      innings: initializeInnings(9),
    }
  }
  
  render() {
    return (
      <MainLayout>
        <BoxScore />
        <HitterLayout>
          <Hitters hitters={this.state.hitters} />
          <Innings innings={this.state.innings} hitters={this.state.hitters} />
          <HittingStats hitters={this.state.hitters} />
        </HitterLayout>
        <PitcherLayout>
          <Pitchers pitchers={this.state.pitchers} />
          <PitchingStats pitchers={this.state.pitchers} />
        </PitcherLayout>
        <GameNotes />
      </MainLayout>
    );
  }
}
