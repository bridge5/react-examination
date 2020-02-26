import React, { PureComponent } from 'react';
import styles from './PlayerListApp.css';
import { connect } from 'react-redux';

import { addPlayer, deletePlayer, starPlayer } from '../actions/PlayersActions';
import { PlayerList, AddPlayerInput, Pagination, PositionSelect } from '../components';

class PlayerListApp extends PureComponent {
  render() {
    const {
      playerlist: { playersById },
    } = this.props;
    const { currentPage, displayPosition } = this.state;

    let filterPlayers = this.filter(playersById, displayPosition);
    const length = filterPlayers.length;
    const playersCurrentPage = this.getPlayersCurrent(filterPlayers);

    const actions = {
      addPlayer: this.props.addPlayer,
      deletePlayer: this.props.deletePlayer,
      starPlayer: this.props.starPlayer,
    };
    return (      
      <div className={styles.playerListApp}>
        <div className={styles.header}>
          <h1>NBA Players</h1>
          <PositionSelect onChange={this.onSelectChange}/>
        </div>
        <AddPlayerInput addPlayer={actions.addPlayer} />
        <PlayerList players={playersCurrentPage} actions={actions} />
        {(length>5) &&
         <Pagination currentPage={currentPage} total={length} onCurrentChange={this.onPageChange}/>
        }
      </div>
    );
  }
  constructor(props) {
    super(props);
    this.state = {
      currentPage: 1,
      displayPosition: 'All'
    }
    this.onPageChange = this.onPageChange.bind(this);
    this.onSelectChange = this.onSelectChange.bind(this);
    this.filter = this.filter.bind(this);
  }
  onPageChange(currentPage) {
    this.setState({currentPage});
  }
  getPlayersCurrent(filterPlayers) {
    const { currentPage } = this.state;
    const start = (currentPage - 1) * 5;
    const end = start + 5;

    let playersCurrent =  filterPlayers.slice(start, end);
    if(filterPlayers.length <= 5) {
      playersCurrent = [...filterPlayers];
    }
    
    return playersCurrent
  }
  onSelectChange(val) {
    this.setState({
      ...this.state, 
      displayPosition: val
    })
  }
  filter(playersById, position) {
    let fPlayers = [...playersById];
    if(position !== 'All') {
      fPlayers = playersById.filter((item) => item.position === position);
    }
    return fPlayers;
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
  },
)(PlayerListApp);
