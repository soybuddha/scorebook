import React from 'react';

import { GameNotesLayout } from '../styled-components/Layout';

interface IntGameNotesProps {}

export function GameNotes(props: IntGameNotesProps) {
  return (
    <GameNotesLayout>
      <div>Umpires</div>
      <div>Notes</div>
    </GameNotesLayout>
  );
}