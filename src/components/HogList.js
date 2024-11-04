import React from 'react';
import HogTile from './HogTile';

const HogList = ({ hogs, hiddenHogs, onHideHog }) => {
  return (
    <div>
      {hogs.filter(hog => !hiddenHogs.includes(hog.name)).map(hog => (
        <HogTile key={hog.name} hog={hog} onHideHog={onHideHog} />
      ))}
    </div>
  );
};

export default HogList;
