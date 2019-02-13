import * as types from '../constants/ActionTypes';

const initialState = {
  selectedPage: 0,
  pageData: [],
  numberPerPage: 5,
  playersById: [
    {
      id: 1,
      name: 'LeBron James',
      team: 'LOS ANGELES LAKERS',
      position: 'SF',
      starred: true,
    },
    {
      id: 2,
      name: 'Kevin Duran',
      team: 'GOLDEN STATE WARRIORS',
      position: 'SF',
      starred: false,
    },
    {
      id: 3,
      name: 'Anthony Davis',
      team: 'NEW ORLEANS PELICANS',
      position: 'PF',
      starred: false,
    },
    {
      id: 4,
      name: 'Stephen Curry',
      team: 'GOLDEN STATE WARRIORS',
      position: 'PG',
      starred: false,
    },
    {
      id: 5,
      name: 'James Harden',
      team: 'HOUSTON ROCKETS',
      position: 'SG',
      starred: false,
    },
    {
      id: 6,
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
            id: state.playersById.length + 1,
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
          (item, index) => item.id !== action.id,
        ),
      };
    case types.STAR_PLAYER:
      let players = [...state.playersById];
      let player = players.find((item, index) => item.id === action.id);
      player.starred = !player.starred;
      return {
        ...state,
        playersById: players,
      };

    default:
      return state;
  }
}
