import React from 'react';
import Player from './Player';
import playersData from './players';

const PlayersList = () => {
  return (
    <div style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'center', padding: '2rem' }}>
      {playersData.map((player, index) => (
        // Spread operator passes all properties as individual props
        <Player key={index} {...player} />
      ))}
    </div>
  );
};

export default PlayersList;