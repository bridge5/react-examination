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

export function filterPlayer(position) {
  return {
    type: types.FILTER_PLAYER,
    position,
  };
}

export function selectPageNum(pageNumber) {
  return {
    type: types.SELECT_PAGE,
    pageNumber,
  };
}
