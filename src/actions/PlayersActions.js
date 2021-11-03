import * as types from '../constants/ActionTypes';

export function addPlayer(name) {
    return {
        type: types.ADD_PLAYER,
        name,
    };
}

export function deletePlayer(name) {
    return {
        type: types.DELETE_PLAYER,
        name,
    };
}

export function starPlayer(id) {
    return {
        type: types.STAR_PLAYER,
        id,
    };
}

export function selectPosition(value) {
    return {
        type: types.SELECT_PLAYER,
        position: value
    }
}
export function currentPageChange(current){
    return {
        type:types.CURRENT_PAGE,
        current:current
    }
}
