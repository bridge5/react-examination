import * as types from '../constants/ActionTypes';

export function addPlayer(name,position) {
  return {
    type: types.ADD_PLAYER,
    name,
    position
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
