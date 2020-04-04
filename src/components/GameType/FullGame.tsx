import React, { useState } from 'react';

import {
  createHomeLineup,
  createHomeStartingPitcher,
  createAwayLineup,
  createAwayStartingPitcher,
} from '../../utils/createMockData';
import { teamAtBats } from '../../utils/statsUtils';

import { BoxScore } from '../../components/BoxScore/BoxScore';
import { TeamLayout } from '../../components/Team/TeamLayout';
import { CreateGame } from '../../components/CreateGame/CreateGame';
import { TeamTabs, TeamButton } from '../../styled-components/Global';

import {
  IntTeamState,
  // IntHitter, 
  // IntPitcher, 
} from '../../typeDeclarations/typeScorebook';
import { IntHalfInning } from '../../typeDeclarations/typeInning';

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

export function FullGame(props: {
  toggleGameType: () => void,
}) {
  const [readyForScoring, setReadyForScoring] = useState<boolean>(true);
  const [displayedLineup, setDisplayedLineup] = useState<'home' | 'away'>('away');
  const [innings, setInnings] = useState<Array<IntHalfInning[]>>(
    initializeInnings(),
  );
  const [homeTeam, setHomeTeam] = useState<IntTeamState>({
    city: 'Texas',
    name: 'Rangers',
    league: 'AL',
    lineup: createHomeLineup(),
    pitchers: createHomeStartingPitcher(),
  });
  const [awayTeam, setAwayTeam] = useState<IntTeamState>({
    city: 'Oakland',
    name: 'Athletics',
    league: 'AL',
    lineup: createAwayLineup(),
    pitchers: createAwayStartingPitcher(),
  });

  return (
    <React.Fragment>
      {
        readyForScoring ? (
          <React.Fragment>
            <TeamTabs>
              <li>
                <TeamButton
                  selected={displayedLineup === 'away'}
                  onClick={() => { setDisplayedLineup('away'); }}
                >
                  {`${awayTeam.city} ${awayTeam.name}`}
                </TeamButton>
              </li>
              <li>
                <TeamButton
                  selected={displayedLineup === 'home'}
                  onClick={() => { setDisplayedLineup('home'); }}
                >
                  {`${homeTeam.city} ${homeTeam.name}`}
                </TeamButton>
              </li>
            </TeamTabs>
            <button onClick={() => {
              props.toggleGameType();
            }}>Changed my mind</button>
            <TeamLayout
              lineup={displayedLineup === 'home' ? homeTeam.lineup : awayTeam.lineup}
              atBats={teamAtBats(innings, displayedLineup)}
              pitchers={displayedLineup === 'home'
                ? homeTeam.pitchers
                : awayTeam.pitchers
              }
              onTheMound={displayedLineup === 'home'
                ? awayTeam.pitchers[awayTeam.pitchers.length - 1]
                : homeTeam.pitchers[homeTeam.pitchers.length - 1]
              }
              onUpdateGame={(inning: IntHalfInning, inningIndex: number, team: 'away' | 'home') => {
                const updatedInnings = [...innings];
                if (team === 'away') {
                  updatedInnings[inningIndex][0] = inning;
                } else if (team === 'home') {
                  updatedInnings[inningIndex][1] = inning;
                }
                setInnings(updatedInnings);
              }}
            />
            <BoxScore
              homeCity={homeTeam.city}
              awayCity={awayTeam.city}
              innings={innings}
            />
          </React.Fragment>
        ) : (
            <CreateGame
              awayTeam={awayTeam}
              homeTeam={homeTeam}
              teamUpdate={(type: 'homeTeam' | 'awayTeam', team: IntTeamState) => {
                if (type === 'homeTeam') {
                  setHomeTeam(team)
                } else if (type === 'awayTeam') {
                  setAwayTeam(team);
                }
              }}
              createMockData={() => {
                setReadyForScoring(true);
                setHomeTeam({
                  city: 'Texas',
                  name: 'Rangers',
                  league: 'AL',
                  lineup: createHomeLineup(),
                  pitchers: createHomeStartingPitcher(),
                });
                setAwayTeam({
                  city: 'Oakland',
                  name: 'Athletics',
                  league: 'AL',
                  lineup: createAwayLineup(),
                  pitchers: createAwayStartingPitcher(),
                });
              }}
              createGame={() => {
                setReadyForScoring(true);
              }}
            />
          )
      }
    </React.Fragment>
  );
}