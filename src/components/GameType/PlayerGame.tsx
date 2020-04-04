import React from 'react';

export function PlayerGame(props: {
  toggleGameType: () => void,
}) {
  return (
    <div>
      <h1>Player Game</h1>
      <button onClick={() => {
        props.toggleGameType();
      }}>Changed my mind</button>
    </div>
  );
}