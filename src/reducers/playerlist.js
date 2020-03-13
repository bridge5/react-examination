import * as types from '../constants/ActionTypes';

const calculateCurrentPlayers = (playersById = [], currentPage = 1, pageSize = 5) => {
  let startIndex = (currentPage - 1) * pageSize;
  let len = playersById.length;
  let endIndex = len > startIndex + pageSize ? startIndex + pageSize - 1 : len - 1;
  console.log(startIndex, endIndex);
  playersById.forEach((item, index) => {
    item.current = index >= startIndex && index <= endIndex;
  });
  return playersById;
}
const playersById = [
  {
    name: 'LeBron James',
    team: 'LOS ANGELES LAKERS',
    position: 'SF',
    starred: true,
    current: false
  },
  {
    name: 'Kevin Duran',
    team: 'GOLDEN STATE WARRIORS',
    position: 'SF',
    starred: false,
    current: false
  },
  {
    name: 'Anthony Davis',
    team: 'NEW ORLEANS PELICANS',
    position: 'PF',
    starred: false,
    current: false
  },
  {
    name: 'Stephen Curry',
    team: 'GOLDEN STATE WARRIORS',
    position: 'PG',
    starred: false,
    current: false
  },
  {
    name: 'James Harden',
    team: 'HOUSTON ROCKETS',
    position: 'SG',
    starred: false,
    current: false
  },
  {
    name: 'Kawhi Leonard',
    team: 'TORONTO RAPTORS',
    position: 'SF',
    starred: false,
    current: false
  }
];
const initialState = {
  playersById: calculateCurrentPlayers(playersById)
}

export default function players(state = initialState, action) {
  let playersById = [];
  switch (action.type) {
    case types.ADD_PLAYER:
      playersById = [
        {
          name: action.name,
          team: 'LOS ANGELES LAKERS',
          position: 'SF',
          starred: false,
          current: false
        },
        ...state.playersById
      ];
      return {
        playersById: calculateCurrentPlayers(playersById),
        init_currentPage: 1,
        init_pageSize: 5
      };
    case types.DELETE_PLAYER:
      playersById = state.playersById.filter(
        (item, index) => index !== action.id,
      );
      return {
        playersById: calculateCurrentPlayers(playersById),
        init_currentPage: 1,
        init_pageSize: 5
      };
    case types.STAR_PLAYER:
      playersById = state.playersById;
      let player = playersById.find((item, index) => index === action.id);
      player.starred = !player.starred;
      return {
        playersById
      };
    case types.CURRENT_PLAYER:
      playersById = state.playersById;
      let {currentPage, pageSize} = action;
      return {
        playersById: calculateCurrentPlayers(playersById, currentPage, pageSize)
      };

    default:
      return state;
  }
}
