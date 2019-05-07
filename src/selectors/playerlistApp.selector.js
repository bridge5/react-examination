import { createSelector } from 'reselect'

const getFilterType = state => state.playerlist.filterType;
const getPlayersById = state => state.playerlist.playersById;
const getPageNumber = state => state.playerlist.pageNumber;

const filteredPlayersById = createSelector(
  [getFilterType, getPlayersById],
  (filterType, playersById) => {
    console.log('reselect filter')
    if(filterType === 'ALL') {
      return playersById;
    }
    const filteredPlayersById = playersById.filter(player => player.position === filterType);
    return filteredPlayersById;
  }
)

export const playersFilterbyPageNum = createSelector(
  [filteredPlayersById, getPageNumber],
  (players, pageNumber) => {
    const pageSize = 5
    const newPlayers = players.slice((pageNumber - 1) * pageSize, pageNumber * pageSize);
    return newPlayers;
  }
)

export const getPageCount = createSelector(
  filteredPlayersById,
  players => {
    return Math.ceil(players.length / 5);
  }
)