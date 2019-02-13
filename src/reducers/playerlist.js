import * as types from '../constants/ActionTypes';
import { DEFAULT_PAGE, PER_LIST_ITEMS, DEFAULT_PLAYERS } from '../constants/';

const defaultPlayers = DEFAULT_PLAYERS;
const initialState = {
  filteredPlayers: defaultPlayers,
  currentPlayers: [],
  currentPage: DEFAULT_PAGE,
};

export default function players(state = initialState, action) {
  switch (action.type) {
    case types.FILTER_PLAYER:
      const filteredPlayers = action.position === 'ALL'
        ? defaultPlayers
        : defaultPlayers.filter(playerById => playerById.position === action.position)
      const currentPlayers = action.position === 'ALL'
        ? defaultPlayers
        : defaultPlayers.filter(playerById => playerById.position === action.position)
      const currentPage = 1
      return {
        ...state,
        filteredPlayers,
        currentPlayers,
        currentPage
      };

    case types.ADD_PLAYER:
      const newPlayer = {
        name: action.name,
        team: 'LOS ANGELES LAKERS',
        position: 'SF',
      }
      return {
        ...state,
        filteredPlayers: [
          ...state.filteredPlayers,
          newPlayer,
        ],
        currentPlayers: state.currentPlayers.length < PER_LIST_ITEMS
          ? [...state.currentPlayers, newPlayer]
          : [...state.currentPlayers]
      };
    case types.DELETE_PLAYER:
      return {
        ...state,
        filteredPlayers: state.filteredPlayers.filter(
          (item, index) => index !== action.id,
        ),
        currentPlayers: state.filteredPlayers.filter(
          (item, index) => index !== action.id,
        ),
      };
    case types.STAR_PLAYER:
      let players = [...state.filteredPlayers];
      let player = players.find((item, index) => index === action.id);
      player.starred = !player.starred;
      return {
        ...state,
        filteredPlayers: players,
      };

    case types.SET_CURRENT_PLAYERS:
      return {
        ...state,
        currentPlayers: action.currentPlayers,
      };
      
    case types.SET_CURRENT_PAGE:
      return {
        ...state,
        currentPage: action.currentPage,
      };

    default:
      return state;
  }
}
