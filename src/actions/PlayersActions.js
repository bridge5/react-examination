import * as types from "../constants/ActionTypes";

export function addPlayer(name, optionId) {
  return {
    type: types.ADD_PLAYER,
    name,
    optionId
  };
}

export function deletePlayer(id) {
  return {
    type: types.DELETE_PLAYER,
    id
  };
}

export function starPlayer(id) {
  return {
    type: types.STAR_PLAYER,
    id
  };
}

export function changePage(current) {
  return {
    type: types.CHANGE_PAGE,
    current
  };
}
