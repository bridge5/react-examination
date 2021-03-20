import * as types from '../constants/ActionTypes';

export function addPlayer(attr) {
  return {
    type: types.ADD_PLAYER,
    attr
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

export function editPlayer(id, attr) {
  return {
    type: types.EDIT_PLAYER,
    data: {id, attr}
  }
}
