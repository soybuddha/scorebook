import { IntHalfInning } from './inningInts';

export interface IntHitter {
  guid: string,
  position: number,
  name: string,
  number: void|number,
  hitting: void | 'R' | 'L' | 'S',
  throwing: void | 'R' | 'L',  
}

export interface IntPitcher {
  guid: string,
  number: void|number,
  name: string,
  hitting: void | 'R' | 'L' | 'S',
  throwing: void | 'R' | 'L' | 'S',
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
  league: void | 'AL' | 'NL',
  lineup: IntHitter[],
  pitchers: IntPitcher[],
}