export type IntPitchResult = 'ball' 
  | 'swinging-strike' 
  | 'looking-strike' 
  | 'foul' 
  | 'hit' 
  | 'sac'   // sacrifice
  | 'hbp'   // hit by pitch
  | 'po'    // pitch-out
  | 'balk';

export type IntAtBatResult = 'swinging-strike'
  | 'looking-strikeout'
  | 'hit'
  | 'bb'
  | 'hbp'
  | 'sac'
  | 'error';

export interface IntPitch {
  result: IntPitchResult,
  pitchType?: string, // curve, fast, changeup, etc.
  speed?: number,
}

export interface IntAtBat {
  hitterGuids: string[],
  pitcherGuids: string[],
  pitches: IntPitch[],
  result: IntAtBatResult,
}

export interface IntHalfInning {
  runs: number,
  hits: number,
  atBats: IntAtBat[],
}