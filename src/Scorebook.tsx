import React from 'react';
import moment from 'moment';

import { BoxScore } from './components/BoxScore';
// import { Hitters } from './components/Hitters';
// import { Innings } from './components/Innings';
// import { HittingStats } from './components/HittingStats';
// import { Pitchers } from './components/Pitchers';
// import { PitchingStats } from './components/PitchingStats';
// import { GameNotes } from './components/GameNotes';


import {
  // HitterLayout,
  MainLayout,
  // PitcherLayout,
} from './styled-components/Layout';

import { IntHitter, IntPitcher } from './interfaceDeclarations/scorebookInts';
import { IntHalfInning } from './interfaceDeclarations/inningInts';

interface IntTeamState {
  city: string,
  name: string,
  lineup: IntHitter[],
  pitchers: IntPitcher[],
}

// function initializeInnings(numberOfInnings: number): IntInning[] {
//   const innings: IntInning[] = [];
//   for (let i = 0; i < numberOfInnings; i += 1) {
//     innings.push({ number: i + 1 });
//   }
//   return innings;
// }

interface IntScorebookProps {

}

interface IntScorebookState {
  date: number,
  startTime: void|number,
  endTime: void|number,
  location: string,
  homeTeam: IntTeamState,
  awayTeam: IntTeamState,
  innings: Array<IntHalfInning[]>,
}

export class Scorebook extends React.Component<IntScorebookProps, IntScorebookState> {
  constructor(props: IntScorebookProps) {
    super(props);

    this.state = {
      date: moment().valueOf(),
      startTime: undefined,
      endTime: undefined,
      location: '',
      homeTeam: {
        city: '',
        name: '',
        lineup: [],
        pitchers: [],
      },
      awayTeam: {
        city: '',
        name: '',
        lineup: [],
        pitchers: [],
      },
      innings: [],
    }
  }
  
  render() {
    return (
      <MainLayout>
        <BoxScore 
          homeCity={this.state.homeTeam.city} 
          awayCity={this.state.awayTeam.city} 
          innings={this.state.innings}
        />
      </MainLayout>
    );
  }
}
