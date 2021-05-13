import React, { Component } from 'react';
import styles from './PlayerListApp.css';
import { connect } from 'react-redux';

import { addPlayer, deletePlayer, starPlayer, selectPosition } from '../actions/PlayersActions';
import { PlayerList, AddPlayerInput, Pagination, PositionSelect } from '../components';

class PlayerListApp extends Component {
  
  state = {
    current: 1,// 当前页
    pageSize: 1, // 1条/页
  }

  onChange = (currentPage) => { // 更新当前页
    this.setState({current: currentPage})
  }

  changePageSize = (pageSize) => {
    this.setState({pageSize})
  }

  render() {
    const {
      playerlist: { playersById, defaultPosition },
    } = this.props;

    let {current, pageSize} = this.state
    console.log(playersById)
    const actions = {
      addPlayer: this.props.addPlayer,
      deletePlayer: this.props.deletePlayer,
      starPlayer: this.props.starPlayer,
      selectPosition: this.props.selectPosition,
    };

    return (
      <div className={styles.playerListApp}>
        <h1>NBA Players</h1>
        <AddPlayerInput addPlayer={actions.addPlayer} />
        <PositionSelect defaultPosition={defaultPosition} selectPosition={actions.selectPosition} />
        <Pagination
          current={current}
          total={playersById.length}
          pageSize={pageSize}
          changePageSize={this.changePageSize}
          onChange={this.onChange}
          list={playersById}
          showJumper={true}
          render={(players) => (
            <PlayerList
              players={players}
              actions={actions}
            />
          )}
        />
      </div>
    );
  }
}

function mapStateToProps(state) {
  return state;
}

export default connect(
  mapStateToProps,
  {
    addPlayer,
    deletePlayer,
    starPlayer,
    selectPosition
  },
)(PlayerListApp);
