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

export function selectOption(position) {
  return {
    type: types.SELECT_OPTION,
    position,
  }
}

export function onPageChange(page, pageSize) {
  return {
    type: types.PAGE_CHANGE,
    payload: {
      page,
      pageSize,
    }
  }
}

export function lists({page, pageSize, position}) {
  return {
    type: types.LISTS,
    payload: {
      page,
      pageSize,
      position,
    }
  }
}