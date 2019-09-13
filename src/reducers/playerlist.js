import * as types from '../constants/ActionTypes';

const initialState = {
  currentPage: 0,
  pageLimit : 5,
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
      let realDltIndex = action.data.id + (action.data.page * state.pageLimit);
      let playerAfter = [...state.playersById].filter((item, index) => index !== realDltIndex);
      return {
        ...state,
        playersById: playerAfter,
      };
    case types.STAR_PLAYER:
      let players = [...state.playersById];
      let realStarIndex = action.data.id + (action.data.page * state.pageLimit);
      let player = players.find((item, index) => index === realStarIndex);
      player.starred = !player.starred;
      return {
        ...state,
        playersById: players,
      };
    case types.PAGINATE_PLAYER:
      let paginationPage = [];
      let playerlist = action.list;
      let page = 0;
      for (let i = 0; i < playerlist.length; i++) {
        if (typeof paginationPage[page] === 'undefined') {
          paginationPage[page] = [];
        }
        if (paginationPage[page].length === state.pageLimit) {
          page += 1;
          paginationPage[page] = [];
        }
        paginationPage[page].push(playerlist[i]);
      }
      return {
        ...state,
        paginationPage,
      };
    case types.CLICK_PAGE:
      return {
        ...state,
        currentPage: action.page,
      };
    default:
      return state;
  }
}
