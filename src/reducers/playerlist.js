import * as types from '../constants/ActionTypes';

const initialState = {
  playersById: [
    {
      name: 'LeBron James',
      team: 'LOS ANGELES LAKERS',
      position: 'SF',
      starred: true,
      id: 1
    },
    {
      name: 'Kevin Duran',
      team: 'GOLDEN STATE WARRIORS',
      position: 'SF',
      starred: false,
      id: 2
    },
    {
      name: 'Anthony Davis',
      team: 'NEW ORLEANS PELICANS',
      position: 'PF',
      starred: false,
      id: 3
    },
    {
      name: 'Stephen Curry',
      team: 'GOLDEN STATE WARRIORS',
      position: 'PG',
      starred: false,
      id: 5
    },
    {
      name: 'James Harden',
      team: 'HOUSTON ROCKETS',
      position: 'SG',
      starred: false,
      id: 6
    },
    {
      name: 'Kawhi Leonard',
      team: 'TORONTO RAPTORS',
      position: 'SF',
      starred: false,
      id: 7
    },
  ],
};

export default function players(state = initialState, action) {
  switch (action.type) {
    case types.ADD_PLAYER:
      const old = state.playersById || [];
      let newId = 1;
      if (old.length) {
        newId = Math.max.apply(null, old.map(item => item.id)) + 1;
      }
      const newPlayer = {
        name: action.attr.name,
        team: 'LOS ANGELES LAKERS',
        position: action.attr.position,
        starred: false,
        id: newId
      }
      old.unshift(newPlayer);
      return {
        ...state,
        playersById: old,
      };
    case types.DELETE_PLAYER:
      const lefts = state.playersById.filter((item) => item.id !== action.id);
      return {
        ...state,
        playersById: lefts,
      };
    case types.STAR_PLAYER:
      let players = [...state.playersById];
      let player = players.find((item) => item.id === action.id);
      player.starred = !player.starred;
      return {
        ...state,
        playersById: players,
      };
    case types.EDIT_PLAYER:
      const { id, attr } = action.data;
      const all = [...state.playersById];
      let curPlayer = all.find((item) => item.id === id);
      curPlayer = {...curPlayer, ...attr};
      return {
        ...state,
        playersById: [...all, curPlayer],
      }
    default:
      return state;
  }
}
