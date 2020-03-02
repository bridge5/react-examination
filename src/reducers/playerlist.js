import * as types from '../constants/ActionTypes';

const initialState = {
  playersById: [
    {
      id: 0,
      name: 'LeBron James',
      team: 'LOS ANGELES LAKERS',
      position: 'SF',
      starred: true
    },
    {
      id: 1,
      name: 'Kevin Duran',
      team: 'GOLDEN STATE WARRIORS',
      position: 'SF',
      starred: false
    },
    {
      id: 2,
      name: 'Anthony Davis',
      team: 'NEW ORLEANS PELICANS',
      position: 'PF',
      starred: false
    },
    {
      id: 3,
      name: 'Stephen Curry',
      team: 'GOLDEN STATE WARRIORS',
      position: 'PG',
      starred: false
    },
    {
      id: 4,
      name: 'James Harden',
      team: 'HOUSTON ROCKETS',
      position: 'SG',
      starred: false
    },
    {
      id: 5,
      name: 'Kawhi Leonard',
      team: 'TORONTO RAPTORS',
      position: 'SF',
      starred: false
    }
  ]
};

export default function players(state = initialState, action) {
  switch (action.type) {
    case types.ADD_PLAYER:
      return {
        ...state,
        playersById: [
          ...state.playersById,
          {
            id: state.playersById[state.playersById.length - 1].id + 1,
            name: action.name,
            team: 'LOS ANGELES LAKERS',
            position: 'SF'
          }
        ]
      };
    case types.DELETE_PLAYER:
      let list = [...state.playersById];
      list = list.filter(item => item.id !== action.id);
      return {
        ...state,
        playersById: list
      };
    case types.STAR_PLAYER:
      let players = [...state.playersById];
      let player = players.find((item, index) => index === action.id);
      player.starred = !player.starred;
      return {
        ...state,
        playersById: players
      };

    default:
      return state;
  }
}
