import React from 'react';
import classnames from 'classnames';
import PropTypes from 'prop-types';
import styles from './PlayerListItem.css';

const PlayerListItem = (props) => {

  const onPositionChange = (evt) => {
    props.modifyPosition(props.name, evt.target.value);
  }

  return (
    <li className={styles.playerListItem}>
      <div className={styles.playerInfos}>
        <div>
          <span>{props.name}</span>
        </div>
        <div>
          <small>
            {props.team} · {props.position}
          </small>
        </div>
      </div>
      <div className={styles.playerActions}>
        <select 
          name='playerPosition' 
          className={`btn btn-default ${styles.btnAction}`}
          onChange={onPositionChange}
          value={props.position}
        >
          <option value="PG">PG</option>
          <option value="SG">SG</option>
          <option value="SF">SF</option>
          <option value="PF">PF</option>
          <option value="C">C</option>
        </select>
        <button
          className={`btn btn-default ${styles.btnAction}`}
          onClick={() => props.starPlayer(props.id)}
        >
          <i
            className={classnames('fa', {
              'fa-star': props.starred,
              'fa-star-o': !props.starred,
            })}
          />
        </button>
        <button
          className={`btn btn-default ${styles.btnAction}`}
          onClick={() => props.deletePlayer(props.id)}
        >
          <i className="fa fa-trash" />
        </button>
      </div>
    </li>
  );
}

PlayerListItem.propTypes = {
  id: PropTypes.number.isRequired,
  name: PropTypes.string.isRequired,
  team: PropTypes.string.isRequired,
  position: PropTypes.string.isRequired,
  starred: PropTypes.bool,
  starPlayer: PropTypes.func.isRequired,
};

export default PlayerListItem;
