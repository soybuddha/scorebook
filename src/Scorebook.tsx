import React from 'react';
import moment from 'moment';

import { BoxScore } from './components/BoxScore/BoxScore';
import { CreateGame } from './components/CreateGame/CreateGame';
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


export interface IntTeamState {
  city: string,
  name: string,
  lineup: IntHitter[],
  pitchers: IntPitcher[],
}

function initializeInnings(): Array<IntHalfInning[]> {
  const innings: Array<IntHalfInning[]> = [];
  for (let i = 0; i < 9; i += 1) {
    const halfInning: IntHalfInning = { runs: 0, hits: 0, atBats: []};
    innings.push([halfInning, halfInning]);
  }
  return innings;
}

interface IntScorebookProps {}
interface IntScorebookState {
  date: number,
  startTime: void|number,
  endTime: void|number,
  readyForScoring: boolean,
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
      readyForScoring: false,
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
      innings: initializeInnings(),
    }
  }
  
  render() {
    return (
      <MainLayout>
        {this.state.readyForScoring ? (
          <BoxScore
            homeCity={this.state.homeTeam.city}
            awayCity={this.state.awayTeam.city}
            innings={this.state.innings}
          />
        ) : (
            <CreateGame 
              awayTeam={this.state.awayTeam}
              homeTeam={this.state.homeTeam}
            />
        )}
      </MainLayout>
    );
  }
}
