import React, { Component } from 'react';
import PropTypes from 'prop-types';
import styles from './PlayerList.css';
import PlayerListItem from './PlayerListItem';
import {Pagination} from "./index";

class PlayerList extends Component {
    constructor(props) {
        super(props);
        // 设置 initial state
        this.state = {
            start:0,
            end:(this.props.pagination.size||0),
            page:this.props.pagination.page||0
        };
    }
    onChange=(page,size)=>{
        this.setState({
            start:page*size,
            end:(page+1)*size,
            page:page,
        })
    };
  render() {
    const {pagination,players}=this.props,{start,end,page}=this.state;
    let playersArr=players.slice(start,end);
    return (
      <ul className={styles.playerList}>
        {playersArr.map((player, index) => {
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
        })}
          <Pagination
              page={page}
              size={pagination.size||5}
              total={pagination.total||0}
              onChange={this.onChange.bind(this)}
          />
      </ul>
    );
  }
}

PlayerList.propTypes = {
  players: PropTypes.array.isRequired,
  actions: PropTypes.object.isRequired,
};

export default PlayerList;
