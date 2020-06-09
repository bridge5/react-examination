import React, { Component } from 'react';
import PropTypes from 'prop-types';
import styles from './PlayerList.css';
import PlayerListItem from './PlayerListItem';

import { Pagination } from 'element-react';


class PlayerList extends Component {
  render() {
    return (
      <div>
      <ul className={styles.playerList}>
        {this.props.players.map((player, index) => {          
          if(index >= (this.props.currentPage-1)*10 && index < this.props.currentPage * 10){
            return (
              <PlayerListItem
                key={index}
                id={index}
                name={player.name}
                team={player.team}
                position={player.position}
                starred={player.starred}
                {...this.props.actions}
              />
            );
          }
        })}
      </ul>
      <div>
      <Pagination layout="total, prev, pager, next" total={this.props.players.length} onCurrentChange={this.props.actions.pageCurrentChangePlayer}/>
      </div>
      </div>
    );
  }
}

PlayerList.propTypes = {
  players: PropTypes.array.isRequired,
  actions: PropTypes.object.isRequired,
};

export default PlayerList;
