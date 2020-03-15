import * as types from '../constants/ActionTypes';

const initialState = {
    page: 1
};

export default function players(state = initialState, action) {
  switch (action.type) {
    case types.CURRENT_PAGE:
      return {page: action.page}

    default:
      return state;
  }
}
