import * as types from '../constants/ActionTypes'; 

const initialState = {
  currentPage: 1,
  onlySF_PG: false,
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
    case types.NEXT_PAGE: 
      let pages = Math.ceil(state.playersById.length / 5);
      let current = state.currentPage;
      return {
        ...state,
        currentPage: current === pages ? current : current + 1
      };
    case types.PRE_PAGE: 
      let current = state.currentPage;
      return {
        ...state,
        currentPage: current === 1 ? 1 : current - 1
      };
    case types.TOGGLE_SF_PG:
      return {
        ...state,
        onlySF_PG: !state.onlySF_PG
      }
    default:
      return state;
  }
}
