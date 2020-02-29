import * as types from '../constants/ActionTypes';

export function addPlayer(payload) {
  return {
    type: types.ADD_PLAYER,
    ...payload
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
