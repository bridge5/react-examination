import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import styles from './PlayerList.css';
import './PlayerList.css';

import PlayerListItem from './PlayerListItem';
import * as R from 'ramda';
import Pagination from 'rc-pagination';

const isArray = (Arr) => {
  return R.is(Array, Arr) && !R.isEmpty(Arr)
}

class PlayerList extends PureComponent {
  constructor(props) {
    super(props);

    this.state = {
      page: 5,
      current: 1,
    }
  }
  pageNum = (current) => {
    this.setState({
      current
    });
  }

  render() {
    const { players } = this.props;
    const { current, page } = this.state;

    const getCurrentList = (list, current, page) => {
      return R.slice(page * current - page, page * current)(list)
    }

    return (
      <div>
        <ul className={styles.playerList}>
          {getCurrentList(players, current, page).map((player, index) => {
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

        {
          isArray(players) && players.length > 5 &&
          (<footer className={'footer'}>
            <span>分页:</span>
            <Pagination
              current={current}
              onChange={this.pageNum}
              total={players.length}
              defaultPageSize={page}
              className={'rcPagination'}
              pageSize={page}
              showQuickJump
            />
          </footer>
          )
        }

      </div>
    );
  }
}

PlayerList.propTypes = {
  players: PropTypes.array.isRequired,
  actions: PropTypes.object.isRequired,
};

export default PlayerList;
