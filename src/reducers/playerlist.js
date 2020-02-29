import * as types from '../constants/ActionTypes';
import { options } from '../constants/Options';

const initialState = {
  playersById: [
    {
      name: 'LeBron James',
      team: 'LOS ANGELES LAKERS',
      position: 'SF',
      starred: true,
    },
    {
      name: 'Kevin Duran',
      team: 'GOLDEN STATE WARRIORS',
      position: 'SF',
      starred: false,
    },
    {
      name: 'Anthony Davis',
      team: 'NEW ORLEANS PELICANS',
      position: 'PF',
      starred: false,
    },
    {
      name: 'Stephen Curry',
      team: 'GOLDEN STATE WARRIORS',
      position: 'PG',
      starred: false,
    },
    {
      name: 'James Harden',
      team: 'HOUSTON ROCKETS',
      position: 'SG',
      starred: false,
    },
    {
      name: 'Kawhi Leonard',
      team: 'TORONTO RAPTORS',
      position: 'SF',
      starred: false,
    },
  ],
  pageNum: 1
};

export default function players(state = initialState, action) {
  switch (action.type) {
    case types.ADD_PLAYER:
      return {
        ...state,
        playersById: [
          ...state.playersById,
          {
            name: action.name,
            team: action.team,
            position: action.position,
          },
        ],
      };
    case types.DELETE_PLAYER:
      return {
        ...state,
        playersById: state.playersById.filter(
          (item, index) => index !== action.id,
        ),
      };
    case types.STAR_PLAYER:
      let players = [...state.playersById];
      let player = players.find((item, index) => index === action.id);
      player.starred = !player.starred;
      return {
        ...state,
        playersById: players,
      };
    case types.NEXT_PAGE:
      if(state.pageNum === Math.ceil(state.playersById.length / options.maxPageItem)) {
        return state;
      }
      return {
        ...state,
        pageNum: state.pageNum + 1
      }
    case types.PREV_PAGE:
      if(state.pageNum === 1) {
        return state;
      }
      return {
        ...state,
        pageNum: state.pageNum - 1
      }
    case types.GO_PAGE:
      if(state.pageNum === action.pageNum) {
        return state;
      }
      return {
        ...state,
        pageNum: action.pageNum
      }

    default:
      return state;
  }
}
