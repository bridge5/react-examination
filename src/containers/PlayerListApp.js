import React, { Component } from 'react';
import styles from './PlayerListApp.css';
import { connect } from 'react-redux';

import { addPlayer, deletePlayer, starPlayer, selectOption, onPageChange, lists} from '../actions/PlayersActions';
import { PlayerList, AddPlayerInput, SelectOptions, Pagination } from '../components';

class PlayerListApp extends Component {

  componentDidMount() {
    this.props.lists({
      page: 1,
      pageSize: 5,
    })
  }

  onPageChange = (page, pageSize) => {
    this.props.onPageChange(page, pageSize);
    this.props.lists({page, pageSize, position: this.props.playerlist.curPosition});
  }

  onSelect = (position) => {
    this.props.selectOption(position);
    this.props.lists({
      ...this.props.playerlist.pagination,
      position,
    })
  }

  render() {
    const {
      playerlist: { searchList, pagination },
    } = this.props;

    const actions = {
      addPlayer: this.props.addPlayer,
      deletePlayer: this.props.deletePlayer,
      starPlayer: this.props.starPlayer,
    };

    return (
      <div className={styles.playerListApp}>
        <h1>NBA Players</h1>
        <SelectOptions onSelect={this.onSelect} />
        <AddPlayerInput addPlayer={actions.addPlayer} />
        <PlayerList players={searchList} actions={actions} />
        <Pagination {...pagination} onChange={this.onPageChange} />
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
    selectOption,
    onPageChange,
    lists,
  },
)(PlayerListApp);
