import * as types from '../constants/ActionTypes';

export function addPlayer(name) {
  return (dispatch, getState) => {
    dispatch({
      type: types.ADD_PLAYER,
      name,
    });
    const { playerlist: { playersById } } = getState();
    dispatch({
      type: types.PAGINATE_PLAYER,
      list: playersById,
    });
  };
}

export function deletePlayer(data) {
  return {
    type: types.DELETE_PLAYER,
    data,
  };
}

export function starPlayer(data) {
  return {
    type: types.STAR_PLAYER,
    data,
  };
}

export function paginatePlayer(list) {
  return {
    type: types.PAGINATE_PLAYER,
    list,
  };
}

export function clickPage(page) {
  return {
    type: types.CLICK_PAGE,
    page,
  };
}
