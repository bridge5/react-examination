import React, { Component } from 'react';
import styles from './PlayerListApp.css';
import { connect } from 'react-redux';

import { addPlayer, deletePlayer, starPlayer, getPosition } from '../actions/PlayersActions';
import { getPageData } from '../actions/PaginationActions';
import { PlayerList, AddPlayerInput, Pagination, FilterPlayer } from '../components';

class PlayerListApp extends Component {

  state = {
    currentPage: 1,
    pageSize: 5,
    fileterPosition: '',
    curData: [],
    filterData: []
  }

  componentDidMount() {
    this.props.getPosition();
  }

  handlePaginationChange = (cur = 1, pageSize = 5) => {
    this.setState({
      currentPage: cur,
      curData: this.state.filterData.slice((cur - 1) * pageSize, pageSize * cur),
    });
  }

  handleFilterChange = (e) => {
    const filterStr = e.target.value;
    const {
      playerlist: { playersById }
    } = this.props;

    this.setState({
      fileterPosition: filterStr,
      currentPage: 1,
      filterData: playersById.filter(item => item.position === filterStr),
    }, () => {
      this.handlePaginationChange();
    })
  }

  render() {
    const {
      currentPage,
      pageSize,
      fileterPosition,
      curData,
      filterData,
    } = this.state;
    const {
      playerlist: { playersById, positionData}
    } = this.props;

    const actions = {
      addPlayer: this.props.addPlayer,
      deletePlayer: this.props.deletePlayer,
      starPlayer: this.props.starPlayer,
    };

    const playersNum = filterData.length || playersById.length;
    const playersData = curData.length ? curData : playersById.slice((currentPage - 1) * pageSize, pageSize * currentPage);

    return (
      <div className={styles.playerListApp}>
        <h1>NBA Players</h1>
        <AddPlayerInput addPlayer={actions.addPlayer} />
        <FilterPlayer data={positionData} onChange={this.handleFilterChange} value={fileterPosition} />
        <PlayerList players={playersData} actions={actions} />
        { playersNum > 5 && 
          <Pagination current={currentPage} total={playersNum} pageSize={pageSize} onChange={this.handlePaginationChange} />
        }
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
    getPageData,
    getPosition,
  },
)(PlayerListApp);
