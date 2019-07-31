import React, { useState } from 'react';
import classnames from 'classnames';
import PropTypes from 'prop-types';
import styles from './AddPlayerInput.scss';

const AddPlayerInput = props => {
  const [name, setName] = useState(props.name || '');
  const [team, setTeam] = useState(props.team || '');
  const [position, setPosition] = useState(props.position || 'SF');

  const handleSubmit = e => {
    if (e.which === 13) {
      props.addPlayer(name, team, position);
      handleClean();
    }
  };

  const handleClean = () => {
    setName('');
    setTeam('');
    setPosition('');
  };

  return (
    <div className={styles.wrap}>
      <input
        type="text"
        autoFocus={true}
        className={classnames('form-control', styles.addPlayerInput)}
        placeholder="Type the name of a player"
        value={name}
        onChange={e => setName(e.target.value)}
        onKeyDown={handleSubmit}
      />
      <input
        type="text"
        autoFocus={true}
        className={classnames('form-control', styles.addPlayerInput)}
        placeholder="Type the name of team"
        value={team}
        onChange={e => setTeam(e.target.value)}
        onKeyDown={handleSubmit}
      />
      <select
        value={position}
        className={classnames('form-control', styles.playPositionSelector)}
        onChange={e => setPosition(e.target.value)}
      >
        <option value="SF">SF</option>
        <option value="PF">PF</option>
        <option value="C">C</option>
        <option value="PG">PG</option>
        <option value="SG">SG</option>
      </select>
      <div>
        <button className="btn btn-success">Submit</button>
        <button onClick={handleClean} className="btn btn-secondary">
          Clean
        </button>
      </div>
    </div>
  );
};

AddPlayerInput.propTypes = {
  addPlayer: PropTypes.func.isRequired,
};

export default AddPlayerInput;
