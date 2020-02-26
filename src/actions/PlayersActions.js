/*
 * @author: Vision
 * @Date: 2020-02-26 09:52:06
 * @LastEditors: vision
 * @LastEditTime: 2020-02-26 16:29:12
 */
import * as types from "../constants/ActionTypes";

export function addPlayer(name) {
  return {
    type: types.ADD_PLAYER,
    name,
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

export function changeShowPosition() {
  return {
    type: types.CHANGE_POSITION_VISIBLE,
  };
}
