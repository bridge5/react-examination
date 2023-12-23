import * as types from "../constants/ActionTypes";

export function addPlayer(playerInfo) {
  return {
    type: types.ADD_PLAYER,
    playerInfo,
  };
}

export function deletePlayer(id) {
  return {
    type: types.DELETE_PLAYER,
    id,
  };
}

export function starPlayer(id) {
  return {
    type: types.STAR_PLAYER,
    id,
  };
}

// 获取最新球员的信息
export const getLatestPlayerData = (params) => {
  return {
    type: types.GET_LATEST_PLAYER_LIST,
    ...params,
  };
};
