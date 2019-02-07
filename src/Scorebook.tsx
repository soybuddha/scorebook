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

import { 
  IntTeamState, 
  IntHitter, 
  IntPitcher, 
} from './interfaceDeclarations/scorebookInts';
import { IntHalfInning } from './interfaceDeclarations/inningInts';

function initializeInnings(): Array<IntHalfInning[]> {
  const innings: Array<IntHalfInning[]> = [];
  for (let i = 0; i < 9; i += 1) {
    const halfInning: IntHalfInning = { runs: 0, hits: 0, atBats: []};
    innings.push([halfInning, halfInning]);
  }
  return innings;
}

function initializePitcher(): IntPitcher[] {
  return [{
    guid: '',
    number: undefined,
    name: '',
    hitting: undefined,
    throwing: undefined,
  }];
}

function initializeLineup(): IntHitter[] {
  return [];
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
        league: undefined,
        lineup: initializeLineup(),
        pitchers: initializePitcher(),
      },
      awayTeam: {
        city: '',
        name: '',
        league: undefined,
        lineup: initializeLineup(),
        pitchers: initializePitcher(),
      },
      innings: initializeInnings(),
    }
  }

  render() {
    console.log('STATE', JSON.stringify(this.state, null, 2));
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
            teamUpdate={(type: 'homeTeam'|'awayTeam', team: IntTeamState) => {
              if (type === 'homeTeam') {
                this.setState({ homeTeam: team });
              } else if (type === 'awayTeam') {
                this.setState({ awayTeam: team });
              }
            }}
          />
        )}
      </MainLayout>
    );
  }
}
