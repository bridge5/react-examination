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

export const getPosition = () => (dispatch) => {
  setTimeout(() => {
    console.log(1)
    dispatch({
      type: types.GET_POSITION,
      positionData: ['SF', 'PG']
    })
  }, 3000);
}
