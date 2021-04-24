import { v4 as uuidv4 } from "uuid";
import * as types from "../constants/ActionTypes";
import { POS_TYPES } from "../constants/posTypes";
import { initialState } from "./initData";

export default function players(state = initialState, action) {
  switch (action.type) {
    case types.ADD_PLAYER:
      return {
        ...state,
        playersById: [
          ...state.playersById,
          {
            id: uuidv4(),
            name: action.newPlayer.name,
            team: "LOS ANGELES LAKERS",
            position: action.newPlayer.position || POS_TYPES.SF,
            starred: false,
          },
        ],
      };
    case types.DELETE_PLAYER:
      return {
        ...state,
        playersById: state.playersById.filter((item) => item.id !== action.id),
      };
    case types.STAR_PLAYER:
      let players = [...state.playersById];
      let player = players.find((item) => item.id === action.id);
      player.starred = !player.starred;
      return {
        ...state,
        playersById: players,
      };

    case types.FILTER_PLAYER:
      console.log(state);
      return {
        ...state,
        showPosition: action.position,
      };

    default:
      return state;
  }
}
