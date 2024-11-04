import React, { useState } from 'react';

const HogTile = ({ hog, onHideHog }) => {
  const [showDetails, setShowDetails] = useState(false);

  const handleToggleDetails = () => {
    setShowDetails(!showDetails);
  };

  return (
    <div className="hog-tile" onClick={handleToggleDetails}>
      <h2>{hog.name}</h2>
      <img src={hog.image} alt={hog.name} />
      {showDetails && (
        <div>
          <p>Specialty: {hog.specialty}</p>
          <p>Weight: {hog.weight}</p>
          <p>Greased: {hog.greased ? 'Yes' : 'No'}</p>
          <p>Highest Medal Achieved: {hog["highest medal achieved"]}</p>
          <button onClick={() => onHideHog(hog.name)}>Hide</button>
        </div>
      )}
    </div>
  );
};

export default HogTile;
