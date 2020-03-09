import * as types from '../constants/ActionTypes';

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

export function switchStatus(itemType) {
    return {
        type: types.TAB_STATUS_SWITCH,
        itemType
    }
}
export function changeIndex(index) {
    return {
        type:types.PAGE_CHANGE_INDEX,
        index,
    }
}
