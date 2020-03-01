import React from 'react';
import classnames from 'classnames';
import PropTypes from 'prop-types';
import styles from './PlayerListItem.css';
import { deletePlayer, starPlayer } from '../../actions/PlayersActions';
import { connect } from 'react-redux';

const PlayerListItem = ({
  name,
  team,
  position,
  id,
  starred,
  deletePlayer,
  starPlayer
}) => {
  const { playerListItem, playerInfos, playerActions, btnAction } = styles;
  return (
    <li className={playerListItem}>
      <div className={playerInfos}>
        <div>
          <span>{name}</span>
        </div>
        <div>
          <small>
            {team} · {position}
          </small>
        </div>
      </div>
      <div className={playerActions}>
        <button
          className={`btn btn-default ${btnAction}`}
          onClick={() => starPlayer(id)}
        >
          <i
            className={classnames('fa', {
              'fa-star': starred,
              'fa-star-o': !starred
            })}
          />
        </button>
        <button
          className={`btn btn-default ${btnAction}`}
          onClick={() => deletePlayer(id)}
        >
          <i className="fa fa-trash" />
        </button>
      </div>
    </li>
  );
};

PlayerListItem.propTypes = {
  id: PropTypes.number.isRequired,
  name: PropTypes.string.isRequired,
  team: PropTypes.string.isRequired,
  position: PropTypes.string.isRequired,
  starred: PropTypes.bool,
  starPlayer: PropTypes.func.isRequired,
  deletePlayer: PropTypes.func.isRequired
};

export default connect(null, { deletePlayer, starPlayer })(PlayerListItem);
