import * as types from '../constants/ActionTypes';
import {nanoid} from 'nanoid'

const initialState = {
  defaultPosition: 'SG',
  playersById: [
    {
      id: nanoid(),
      name: 'LeBron James',
      team: 'LOS ANGELES LAKERS',
      position: 'SF',
      starred: true,
    },
    {
      id: nanoid(),
      name: 'Kevin Duran',
      team: 'NEW YORK BROOKLYN',
      position: 'SF',
      starred: false,
    },
    {
      id: nanoid(),
      name: 'Anthony Davis',
      team: 'NEW ORLEANS PELICANS',
      position: 'PF',
      starred: false,
    },
    {
      id: nanoid(),
      name: 'Stephen Curry',
      team: 'GOLDEN STATE WARRIORS',
      position: 'PG',
      starred: false,
    },
    {
      id: nanoid(),
      name: 'James Harden',
      team: 'HOUSTON ROCKETS',
      position: 'SG',
      starred: false,
    },
    {
      id: nanoid(),
      name: 'Kawhi Leonard',
      team: 'TORONTO RAPTORS',
      position: 'SF',
      starred: false,
    },
    {
      id: nanoid(),
      name: 'Kyrie Ivring',
      team: 'NEW YORK BROOKLYN',
      position: 'PG',
      starred: false,
    },
    {
      id: nanoid(),
      name: "Shaquille O'Neal",
      team: 'LOS ANGELES LAKERS',
      position: 'C',
      starred: false,
    },
    {
      id: nanoid(),
      name: 'CHIRS PAUL',
      team: 'PHOENIX',
      position: 'PG',
      starred: false,
    },
  ],
};

export default function players(state = initialState, action) {
  // console.log(action)
  switch (action.type) {
    case types.ADD_PLAYER:
      return {
        ...state,
        playersById: [
          ...state.playersById,
          {
            id: nanoid(),
            name: action.name,
            team: 'LOS ANGELES LAKERS',
            position: state.defaultPosition,
            starred: false,
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
    case types.SELECT_POSITION:
      return {
        ...state,
        defaultPosition: action.position,
      };

    default:
      return state;
  }
}
