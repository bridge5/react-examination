import * as types from '../constants/ActionTypes';

export function addPlayer(info) {
  return {
    type: types.ADD_PLAYER,
    info,
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
