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

/**
 * 
 * @param {页码} page 
 * @returns 改变当前页码
 */
const changeCurrentPageAction = (page) => ({
  type: types.CHANGE_CURRENT_PAGE,
  page
});
export function changeCurrentPage(page, tag) {
  return (dispatch, getState) => {
    const { currentPage } = getState().playerlist;

    let newPage = 0;
    if (tag) {
      newPage = page;
    } else {
      newPage = currentPage + page;
      dispatch(changeCurrentPageAction(newPage));
    }

    dispatch(changeCurrentPageAction(newPage))
  }
};

/**
 * 
 * @param {列表} list 
 * @returns 改变当前列表
 */
const changePlayerListAction = (list) => ({
  type: types.CHANGE_PLAYER_LIST,
  list
});
export function changePlayerList(value) {
  return dispatch => {
    const playerList = JSON.parse(window.localStorage.getItem('playerList'));
    let newList = [];
    if (value) {
      newList = playerList.filter(item => item.position === value);
    } else {
      newList = playerList;
    }

    dispatch(changeCurrentPageAction(0));
    dispatch(changePlayerListAction(newList));
  }
};

