import * as types from '../constants/ActionTypes';

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
  pagination: {
    page: 1,
    pageSize: 5,
    total: 0,
  },
  curPosition: undefined,
  searchList: [],
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
    case types.SELECT_OPTION:
      return {
        ...state,
        curPosition: action.position
      };
    case types.PAGE_CHANGE:
      return {
        ...state,
        pagination: {
          ...state.pagination,
          page: action.payload.page,
          pageSize: action.payload.pageSize,
        }
      }
    case types.LISTS:
      const lists = action.payload.position ? state.playersById.filter(
        (item) => item.position === action.payload.position,
      ) : state.playersById.slice();
      console.log('action.payload', action.payload);
      const index = (action.payload.page - 1) * action.payload.pageSize;
      const end = (action.payload.page - 1) * action.payload.pageSize + action.payload.pageSize;
      const total = lists.length;
      return {
        ...state,
        searchList: lists.slice(index, end),
        pagination: {
          ...state.pagination,
          total,
        }
      }
    default:
      return state;
  }
}
