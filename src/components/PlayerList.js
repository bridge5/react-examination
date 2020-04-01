import React, {Component} from 'react';
import PropTypes from 'prop-types';
import styles from './PlayerList.css';
import PlayerListItem from './PlayerListItem';

const PaginationBtn = ({text, onClick}) => {
  return <button onClick={onClick}>{text}</button>
};

class PlayerList extends Component {
  state = {
    currentPage: 0,
    showPlayers: []
  };

  static getDerivedStateFromProps(props, state) {
    const showPlayers = props.players.slice(state.currentPage * 5, state.currentPage * 5 + 5);
    return {
      showPlayers
    }
  }

  handleNextPage = () => {
    const {currentPage} = this.state;
    this.setState({currentPage: currentPage + 1})
  };

  handlePrevPage = () => {
    const {currentPage} = this.state;
    this.setState({currentPage: currentPage - 1})
  };

  render() {
    const {currentPage, showPlayers} = this.state;
    return (
      <>
        <ul className={styles.playerList}>
          {showPlayers.map((player, index) => {
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
        </ul>
        {currentPage > 0 ? <PaginationBtn text={`<`} onClick={this.handlePrevPage}/>:''}
        {showPlayers.length === 5 && <PaginationBtn text={`>`} onClick={this.handleNextPage}/>}
      </>
    );
  }
}

PlayerList.propTypes = {
  players: PropTypes.array.isRequired,
  actions: PropTypes.object.isRequired,
};

export default PlayerList;
