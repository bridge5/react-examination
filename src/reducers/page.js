import * as types from '../constants/ActionTypes';

const initialState = {
  curPage: 1,
  perCount: 5,
  totalPage: 1
};

export default function players(state = initialState, action) {
  switch (action.type) {
    case types.GET_PAGEDATA:
      return {
        ...state,
        curPage: action.curPage,
        perCount: action.perCount,
      }
    default:
      return state;
  }
}
