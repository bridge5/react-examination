import * as types from '../constants/ActionTypes';

export function filterPlayer(position) {
  return {
    type: types.FILTER_PLAYER,
    position,
  };
}

export function addPlayer(name) {
  return {
    type: types.ADD_PLAYER,
    name,
  };
}

export function deletePlayer(id) {
  return {
    type: types.DELETE_PLAYER,
    id,
  };
}

export function starPlayer(id) {
  return {
    type: types.STAR_PLAYER,
    id,
  };
}

export function setCurrentPlayers(currentPlayers) {
  return {
    type: types.SET_CURRENT_PLAYERS,
    currentPlayers,
  };
}

export function setCurrentPage(currentPage) {
  return {
    type: types.SET_CURRENT_PAGE,
    currentPage,
  };
}
