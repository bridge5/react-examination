import React, { Component } from 'react'
import PropTypes from 'prop-types'
import styles from './PlayerList.module.scss'
import Pagination from '../pagination'
import PlayerListItem from '../player-list-item/PlayerListItem'

const initPagination = {
  pageSize: 5,
  pageNo: 1,
}

class PlayerList extends Component {
  constructor() {
    super()
    this.state = {
      ...initPagination,
    }
  }

  getFilteredPlayer = (players) => {
    const result = []
    const { showPosition } = this.props
    const { pageNo, pageSize } = this.state
    const currentLastPage = pageNo * pageSize
    const filteredByPosition = players.filter(
      (player) => player.position === showPosition || !showPosition
    )

    result.push(filteredByPosition.length)

    const filteredByPagination = filteredByPosition.filter(
      (_player, index) =>
        index < currentLastPage && index >= currentLastPage - pageSize
    )

    result.push(filteredByPagination)
    return result
  }

  render() {
    const { players } = this.props
    const [total, filtered] = this.getFilteredPlayer(players)
    return (
      <ul className={styles.playerList}>
        {filtered.map((player) => (
          <PlayerListItem
            key={player.id}
            id={player.id}
            name={player.name}
            team={player.team}
            position={player.position}
            starred={player.starred}
            {...this.props.actions}
          />
        ))}

        <Pagination
          initPagination={initPagination}
          total={total}
          onChange={({ pageNo, pageSize }) => {
            this.setState({ pageNo, pageSize })
          }}
        />
      </ul>
    )
  }
}

PlayerList.propTypes = {
  players: PropTypes.array.isRequired,
  actions: PropTypes.object.isRequired,
}

export default PlayerList
