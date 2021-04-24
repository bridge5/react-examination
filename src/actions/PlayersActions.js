import * as types from "../constants/ActionTypes";

export function addPlayer(newPlayer) {
  return {
    type: types.ADD_PLAYER,
    newPlayer,
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

export const filterPlayer = (position) => {
  return {
    type: types.FILTER_PLAYER,
    position,
  };
};
