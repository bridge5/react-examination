import * as types from '../constants/ActionTypes';

const initialState = {
  playersById: [
    {
      name: 'LeBron James1',
      team: 'LOS ANGELES LAKERS',
      position: 'SF',
      starred: true,
    },
    {
      name: 'Kevin Duran2',
      team: 'GOLDEN STATE WARRIORS',
      position: 'SF',
      starred: false,
    },
    {
      name: 'Anthony Davis3',
      team: 'NEW ORLEANS PELICANS',
      position: 'PF',
      starred: false,
    },
    {
      name: 'Stephen Curry4',
      team: 'GOLDEN STATE WARRIORS',
      position: 'PG',
      starred: false,
    },
    {
      name: 'James Harden5',
      team: 'HOUSTON ROCKETS',
      position: 'SG',
      starred: false,
    },
    {
      name: 'Kawhi Leonard6',
      team: 'TORONTO RAPTORS',
      position: 'SF',
      starred: false,
    },
    {
      name: 'Kawhi Leonard7',
      team: 'TORONTO RAPTORS',
      position: 'SF',
      starred: false,
    },
    {
      name: 'Kawhi Leonard8',
      team: 'TORONTO RAPTORS',
      position: 'SF',
      starred: false,
    },
    {
      name: 'Kawhi Leonard9',
      team: 'TORONTO RAPTORS',
      position: 'SF',
      starred: true,
    },
  ],
  pageNum: 1,
  pageSize: 5,
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
            team: 'LOS ANGELES LAKERS',
            position: 'SF',
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
    case types.JUMP_PAGE:
      return {
        ...state,
        playersById: [...state.playersById],
        pageNum:action.pageNum
      };
    default:
      return state;
  }
}
