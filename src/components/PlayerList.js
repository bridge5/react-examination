import React, { Component } from 'react';
import PropTypes from 'prop-types';
import styles from './PlayerList.css';
import PlayerListItem from './PlayerListItem';
import Pagination from './Pagination';

class PlayerList extends Component {
  constructor(props, context) {
    super(props, context);
    this.state = {
      idx: 1,
      list: null
    };
  }

  componentDidMount() {
    const list = this.props.players || [];
    this.setState({
      list: list.slice(0, 5)
    });
  }

  componentWillReceiveProps(nextProps) {
    const { idx } = this.state;
    const len = nextProps.players.length;
    if (len % 5 === 0 && idx === Math.floor(len / 5) + 1) {
      return this.getList(idx - 1, idx - 2, nextProps.players);
    }
    this.getList(idx, idx - 1, nextProps.players);
  }

  getLen = () => {
    let len = this.props.players.length;
    let num,
      arr = [];
    if (len % 5 === 0) {
      num = len / 5;
    } else {
      num = Math.floor(len / 5) + 1;
    }
    for (let q = 1; q <= num; q++) {
      arr = arr.concat(q);
    }
    return arr;
  };

  getList = (q, num, list) => {
    return this.setState({
      idx: q,
      list: [...list].splice(num * 5, 5)
    });
  };

  render() {
    const { list } = this.state;
    return (
      <div>
        <ul className={styles.playerList}>
          {list &&
            list.map((player, index) => {
              return (
                <PlayerListItem
                  key={index}
                  id={player.id}
                  name={player.name}
                  team={player.team}
                  position={player.position}
                  starred={player.starred}
                  {...this.props.actions}
                />
              );
            })}
        </ul>
        {this.props.players.length > 5 && (
          <Pagination
            idx={this.state.idx}
            pages={this.getLen()}
            list={this.props.players}
            onSet={(q, list) => {
              this.setState({ idx: q, list });
            }}
          ></Pagination>
        )}
      </div>
    );
  }
}

PlayerList.propTypes = {
  players: PropTypes.array.isRequired,
  actions: PropTypes.object.isRequired
};

export default PlayerList;
