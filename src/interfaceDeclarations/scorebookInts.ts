import { IntHalfInning } from './inningInts';

export interface IntHitter {
  guid: string,
  position: number,
  name: string,
  number: number,
  hitting: 'R' | 'L' | 'S',
  throwing: 'R' | 'L',  
}

export interface IntPitcher {
  guid: string,
  number: number,
  name: string,
  hitting: 'R' | 'L' | 'S',
  throwing: 'R' | 'L' | 'S',
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