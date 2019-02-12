import React from 'react';
import moment from 'moment';

import { 
  createHomeLineup,
  createHomeStartingPitcher,
  createAwayLineup,
  createAwayStartingPitcher,
} from './utils/createMockData';
import { teamAtBats } from './utils/statsUtils';

import { BoxScore } from './components/BoxScore/BoxScore';
import { CreateGame } from './components/CreateGame/CreateGame';
import { Lineup } from './components/Lineup';
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
  // IntHitter, 
  // IntPitcher, 
} from './interfaceDeclarations/scorebookInts';
import { IntHalfInning } from './interfaceDeclarations/inningInts';

function initializeInnings(): Array<IntHalfInning[]> {
  const innings: Array<IntHalfInning[]> = [];
  for (let i = 0; i < 9; i += 1) {
    const halfInning: IntHalfInning = { 
      runs: undefined, 
      hits: undefined, 
      errors: undefined, 
      atBats: []
    };
    innings.push([halfInning, halfInning]);
  }
  return innings;
}

// function initializePitcher(team: 'home'|'away'): IntPitcher[] {
//   return [{
//     guid: `${team}-pitcher_0`,
//     number: undefined,
//     name: '',
//     hitting: undefined,
//     throwing: undefined,
//   }];
// }

// function initializeLineup(team: 'home' | 'away'): IntHitter[] {
//   const lineup: IntHitter[] = [];

//   for (let i = 0; i < 9; i++) {
//     lineup.push({
//       guid: `${team}-hitter_${i}`,
//       position: undefined,
//       name: '',
//       number: undefined,
//       hitting: undefined,
//       throwing: undefined,  
//     })
//   }

//   return lineup;
// }

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
  displayedLineup: 'away'|'home',
}

export class Scorebook extends React.Component<IntScorebookProps, IntScorebookState> {
  constructor(props: IntScorebookProps) {
    super(props);

    this.state = {
      date: moment().valueOf(),
      startTime: undefined,
      endTime: undefined,
      // readyForScoring: false,
      location: '',
      // homeTeam: {
      //   city: '',
      //   name: '',
      //   league: undefined,
      //   lineup: initializeLineup('home'),
      //   pitchers: initializePitcher('home'),
      // },
      // awayTeam: {
      //   city: '',
      //   name: '',
      //   league: undefined,
      //   lineup: initializeLineup('away'),
      //   pitchers: initializePitcher('away'),
      // },
      innings: initializeInnings(),
      readyForScoring: true,
      homeTeam: {
        city: 'Texas',
        name: 'Rangers',
        league: 'AL',
        lineup: createHomeLineup(),
        pitchers: createHomeStartingPitcher(),
      },
      awayTeam: {
        city: 'Oakland',
        name: 'Athletics',
        league: 'AL',
        lineup: createAwayLineup(),
        pitchers: createAwayStartingPitcher(),
      },
      displayedLineup: 'away',
    }
  }

  render() {
    return (
      <MainLayout>
        {this.state.readyForScoring ? (
          <React.Fragment>
            <ul>
              <li>{`${this.state.awayTeam.city} ${this.state.awayTeam.name}`}</li>
              <li>{`${this.state.homeTeam.city} ${this.state.homeTeam.name}`}</li>
            </ul>
            <Lineup 
              lineup={this.state.displayedLineup === 'home' ? this.state.homeTeam.lineup : this.state.awayTeam.lineup}
              atBats={teamAtBats(this.state.innings, this.state.displayedLineup)}
            />
            <BoxScore
              homeCity={this.state.homeTeam.city}
              awayCity={this.state.awayTeam.city}
              innings={this.state.innings}
            />
          </React.Fragment>
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
            createMockData={() => {
              this.setState({
                readyForScoring: true,
                homeTeam: {
                  city: 'Texas',
                  name: 'Rangers',
                  league: 'AL',
                  lineup: createHomeLineup(),
                  pitchers: createHomeStartingPitcher(),
                },
                awayTeam: {
                  city: 'Oakland',
                  name: 'Athletics',
                  league: 'AL',
                  lineup: createAwayLineup(),
                  pitchers: createAwayStartingPitcher(),
                },
              });
            }}
            createGame={() => {
              this.setState({ readyForScoring: true });
            }}
          />
        )}
      </MainLayout>
    );
  }
}
