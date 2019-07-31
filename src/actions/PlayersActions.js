import * as types from '../constants/ActionTypes';

export function addPlayer(name, team, position) {
  return {
    type: types.ADD_PLAYER,
    name,
    team,
    position,
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
