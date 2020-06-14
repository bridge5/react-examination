/* eslint-disable no-case-declarations */
import * as types from "../constants/ActionTypes";

const initialState = {
  current: 0,
  pageSize: 5,
  positionList: [{ position: "SF" }, { position: "PG" }],
  playersById: [
    {
      name: "LeBron James",
      team: "LOS ANGELES LAKERS",
      position: "SF",
      starred: true
    },
    {
      name: "Kevin Duran",
      team: "GOLDEN STATE WARRIORS",
      position: "SF",
      starred: false
    },
    {
      name: "Anthony Davis",
      team: "NEW ORLEANS PELICANS",
      position: "PF",
      starred: false
    },
    {
      name: "Stephen Curry",
      team: "GOLDEN STATE WARRIORS",
      position: "PG",
      starred: false
    },
    {
      name: "James Harden",
      team: "HOUSTON ROCKETS",
      position: "SG",
      starred: false
    },
    {
      name: "Kawhi Leonard",
      team: "TORONTO RAPTORS",
      position: "SF",
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
            name: action.name,
            team: "LOS ANGELES LAKERS",
            position: state.positionList[action.optionId].position
          }
        ]
      };
    case types.DELETE_PLAYER:
      return {
        ...state,
        playersById: state.playersById.filter(
          (item, index) => index !== action.id
        )
      };
    case types.STAR_PLAYER:
      const playerlist = [...state.playersById];
      const player = playerlist.find(
        (item, index) => index === action.id + state.current * state.pageSize
      );

      player.starred = !player.starred;
      return {
        ...state,
        playersById: playerlist
      };
    case types.CHANGE_PAGE:
      return {
        ...state,
        current: action.current
      };

    default:
      return state;
  }
}
