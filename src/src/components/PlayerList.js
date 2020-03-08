import React, { Component } from 'react';
import PropTypes from 'prop-types';
import styles from './PlayerList.module.css';
import PlayerListItem from './PlayerListItem';



class PlayerList extends Component {
  state = {
    pagination: 1,
    paginationList: [],
  }
  render() {
    const playersList = []
    const limit = (this.state.pagination) * 5 > this.props.players.length ? this.props.players.length : (this.state.pagination) * 5
    for (let index = (this.state.pagination - 1) * 5; index < limit; index++) {
      playersList.push(this.props.players[index])
    }

    const listNum = Math.ceil(this.props.players.length / 5)
    const paginationList = []
    for (let index = 0; index < listNum; index++) {
      paginationList.push(index + 1)
      console.log(paginationList)
    }

    return (
      <>
        <ul className={styles.playerList}>
          {playersList.map((player, index) => {
            return (
              <PlayerListItem
                key={index}
                id={index + (this.state.pagination - 1) * 5}
                name={player.name}
                team={player.team}
                position={player.position}
                starred={player.starred}
                {...this.props.actions}
              />
            );
          })}
        </ul>
        {
          this.props.players.length > 5
            ?
            <div style={{ marginLeft: '10px', marginTop: '50px' }}>
              <p style={{
                lineHeight: '50px',
                display: 'inline-block',
                fontSize: '16px',
                marginRight: '10px',
                color: '#3498db'
              }}>页码：</p>
              {
                paginationList.map(item => {
                  return (
                    <button
                      key={item}
                      style={{
                        width: '50px',
                        height: '30px',
                        borderRadius: 5,
                        boxSizing: 'border-box',
                        textAlign: 'center',
                        borderWidth: this.state.pagination === item ? 0 : '1px',
                        borderColor: '#3498db',
                        color: this.state.pagination === item ? 'white' : '#3498db',
                        backgroundColor: this.state.pagination === item ? '#3498db' : 'white',
                        marginRight: '5px'
                      }}
                      onClick={() => {
                        this.setState({ pagination: item })
                      }}
                    >{item}</button>
                  )
                })
              }
            </div>
            :
            null
        }
      </>
    );
  }
  // componentWillReceiveProps() {
  //   this.setState({pagination: this.state.paginationList})
  // }
}

PlayerList.propTypes = {
  players: PropTypes.array.isRequired,
  actions: PropTypes.object.isRequired,
};

export default PlayerList;
