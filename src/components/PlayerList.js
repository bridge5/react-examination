import React, {Component} from 'react';
import PropTypes from 'prop-types';
import styles from './PlayerList.css';
import PlayerListItem from './PlayerListItem';

class PlayerList extends Component {
    render() {
        const {players, actions, status} = this.props;
        return (
            <ul className={styles.playerList}>
                {players.map((player, index) => {
                    let item =  <PlayerListItem
                        key={index}
                        id={index}
                        name={player.name}
                        team={player.team}
                        position={player.position}
                        starred={player.starred}
                        {...actions}
                    />;
                    if(status ===''){
                      return item;
                    }else if(status === player.position){
                      return item;
                    }else {
                      return []
                    }


                })}
            </ul>
        );
    }
}

PlayerList.propTypes = {
    players: PropTypes.array.isRequired,
    actions: PropTypes.object.isRequired,
    status: PropTypes.string
};

export default PlayerList;
