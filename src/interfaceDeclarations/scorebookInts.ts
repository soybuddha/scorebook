import { IntHalfInning } from './inningInts';

export interface IntHitter {
  guid: string,
  position: undefined|string,
  name: string,
  number: undefined|number,
  hitting: undefined | 'R' | 'L' | 'S',
  throwing: undefined | 'R' | 'L',  
}

export interface IntPitcher {
  guid: string,
  number: undefined|number,
  name: string,
  hitting: undefined | 'R' | 'L' | 'S',
  throwing: undefined | 'R' | 'L' | 'S',
}

export interface IntFranchise {
  guid: string,
  name: string,
  city: string,
  players: Array<IntHitter|IntPitcher>,
  notes: string[],
}

export interface IntTeam {
  team: IntFranchise,
  lineup: IntHitter[],
  pitchers: IntPitcher[],
}

export interface IntGame {
  date: number,
  startTime: number,
  endTime: number,
  location: string,
  homeTeam: IntTeam,
  awayTeam: IntTeam,
  innings: Array<IntHalfInning[]>,
}

export interface IntTeamState {
  city: string,
  name: string,
  league: undefined | 'AL' | 'NL',
  lineup: IntHitter[],
  pitchers: IntPitcher[],
}