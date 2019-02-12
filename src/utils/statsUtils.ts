import { IntHalfInning } from '../interfaceDeclarations/inningInts';

export function teamAtBats(
  innings: Array<IntHalfInning[]>,
  team: 'away' | 'home',
): IntHalfInning[] {
  const teamAtBats: IntHalfInning[] = [];
  const halfInningIndex: number = team === 'home' ? 1 : 0;

  innings.forEach((inning: IntHalfInning[]) => {
    teamAtBats.push(inning[halfInningIndex]);
  });

  return teamAtBats;
}

export function calculateTotal(
  team: 'home' | 'away',
  category: 'runs' | 'hits' | 'errors',
  innings: Array<IntHalfInning[]>
): number {
  let total: number = 0;
  const halfInningIndex: number = team === 'home' ? 1 : 0;
  innings.forEach((inning: IntHalfInning[]) => {
    if (category === 'runs' || category === 'hits' || category === 'errors') {
      const halfInning: undefined|number = inning[halfInningIndex][category];
      total += halfInning !== undefined ? halfInning : 0;
    }
  })
  return total;
}