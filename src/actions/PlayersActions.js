import * as types from '../constants/ActionTypes';

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

export function positionPlayer(datas) {
  return {
    type: types.POSITION_PLAYER,
    datas,
  };
}

export function setCurrentPage(page) {
  return {
    type: types.CURRENT_PAGE,
    page,
  };
}
