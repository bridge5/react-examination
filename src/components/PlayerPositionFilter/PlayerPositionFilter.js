import React from 'react';
import './PlayerPositionFilter.css';
const positions = ['ALL', 'SF', 'PG'];
const PlayerPositionFilter = ({ setPosition }) => {
  return (
    <ol className="breadcrumb">
      {positions.map((position, index) => (
        <li key={index} className="breadcrumb-item">
          <button
            type="button"
            className="btn-link"
            onClick={() => setPosition(position)}
          >
            {position}
          </button>
        </li>
      ))}
    </ol>
  );
};

export default PlayerPositionFilter;
