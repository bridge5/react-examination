import React, { Component } from 'react';
import PropTypes from 'prop-types';
import styles from './PlayerList.css';
import PlayerListItem from './PlayerListItem';
import Pagination from './Pagination'
class PlayerList extends Component {

  constructor(props) {
    super(props)
    this.state = {
      maxPage: Math.ceil(this.props.players.length / 5),
      curPage: 1,
      showList: this.props.players.slice(0, 5) || []
    }
  }

  changePage = (nextPage) => {
    console.log(nextPage)
    this.setState({
      curPage: nextPage,
    }, () => {
      this.handleShowList(nextPage)
    })
  }

  // 切换页面，展示不同的数据呀～
  handleShowList = (nextPage) => {
    let arr = []
    console.log(nextPage - 1)
    arr = this.props.players.slice((nextPage - 1) * 5, (nextPage - 1) * 5 + 5)
    this.setState({
      showList: arr
    })
  }

  render() {
    const { maxPage, curPage, showList } = this.state
    return (
      <ul className={styles.playerList}>
        {showList && showList.map((player, index) => {
          return (
            <div>
              <PlayerListItem
                key={index}
                id={index}
                name={player.name}
                team={player.team}
                position={player.position}
                starred={player.starred}
                {...this.props.actions}
              />
            </div>
            
          );
        })}
        {
          this.props.players && this.props.players.length > 5 && 
          <Pagination
            changePage={(nextPage) => this.changePage(nextPage)}
            paginationConf={{ maxPage, curPage }} />
        }
      </ul>
    );
  }
}

PlayerList.propTypes = {
  players: PropTypes.array.isRequired,
  actions: PropTypes.object.isRequired,
};

export default PlayerList;
