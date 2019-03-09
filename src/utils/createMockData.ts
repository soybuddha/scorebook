import { IntHitter, IntPitcher } from '../typeDeclarations/typeScorebook';

export function createHomeLineup(): IntHitter[] {
  return [
    {
      guid: 'home-hitter_0',
      position: '8',
      name: 'Delino DeShields Jr.',
      number: 3,
      hitting: 'R',
      throwing: 'R',
    }, {
      guid: 'home-hitter_1',
      position: '6',
      name: 'Elvis Andrus',
      number: 1,
      hitting: 'R',
      throwing: 'R',
    }, {
      guid: 'home-hitter_2',
      position: '9',
      name: 'Nomar Mazara',
      number: 30,
      hitting: 'L',
      throwing: 'L',
    }, {
      guid: 'home-hitter_3',
      position: 'DH',
      name: 'Joey Gallo',
      number: 13,
      hitting: 'L',
      throwing: 'R',
    }, 
    {
      guid: 'home-hitter_4',
      position: '7',
      name: 'Willie Calhoun',
      number: 5,
      hitting: 'L',
      throwing: 'R',
    }, 
    {
      guid: 'home-hitter_5',
      position: '4',
      name: 'Rougned Odor',
      number: 12,
      hitting: 'L',
      throwing: 'L',
    }, 
    {
      guid: 'home-hitter_6',
      position: '3',
      name: 'Ronald Guzman',
      number: 11,
      hitting: 'L',
      throwing: 'L',
    }, 
    {
      guid: 'home-hitter_7',
      position: '5',
      name: 'Isiah Kiner-Falefa',
      number: 9,
      hitting: 'R',
      throwing: 'R',
    }, {
      guid: 'home-hitter_8',
      position: '2',
      name: 'Jeff Mathis',
      number: 2,
      hitting: 'R',
      throwing: 'R',
    },  
  ];
}

export function createHomeStartingPitcher(): IntPitcher[] {
  return [{
    guid: 'home-pitcher_0',
    number: 36,
    name: 'Edinson Volquez',
    hitting: 'R',
    throwing: 'R',
  }];
}

export function createAwayLineup(): IntHitter[] {
  return [
    {
      guid: 'away-hitter_0',
      position: '6',
      name: 'Marcus Semien',
      number: 10,
      hitting: 'R',
      throwing: 'R',
    }, {
      guid: 'away-hitter_1',
      position: '5',
      name: 'Matt Chapman',
      number: 26,
      hitting: 'R',
      throwing: 'R',
    }, {
      guid: 'away-hitter_2',
      position: '4',
      name: 'Jed Lowrie',
      number: 4,
      hitting: 'S',
      throwing: 'R',
    }, {
      guid: 'away-hitter_3',
      position: 'DH',
      name: 'Khris Davis',
      number: 2,
      hitting: 'R',
      throwing: 'R',
    }, {
      guid: 'away-hitter_4',
      position: '9',
      name: 'Stephen Piscotty',
      number: 25,
      hitting: 'R',
      throwing: 'R',
    }, {
      guid: 'away-hitter_5',
      position: '3',
      name: 'Matt Olson',
      number: 28,
      hitting: 'L',
      throwing: 'R',
    }, {
      guid: 'away-hitter_6',
      position: '7',
      name: 'Mark Carnha',
      number: 20,
      hitting: 'R',
      throwing: 'R',
    }, {
      guid: 'away-hitter_7',
      position: '8',
      name: 'Ramón Laureano',
      number: 22,
      hitting: 'R',
      throwing: 'R',
    }, {
      guid: 'away-hitter_8',
      position: '2',
      name: 'Jonathan Lucroy',
      number: 20,
      hitting: 'R',
      throwing: 'R',
    },  
  ];
}

export function createAwayStartingPitcher(): IntPitcher[] {
  return [{
    guid: 'away-pitcher_0',
    number: 55,
    name: 'Sean Manaea',
    hitting: 'R',
    throwing: 'L',
  }];
}