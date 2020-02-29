import * as types from '../constants/ActionTypes';

export function prevPage() {
    return {
        type: types.PREV_PAGE
    }
}

export function nextPage() {
    return {
        type: types.NEXT_PAGE
    }
}

export function goPage(pageNum) {
    return {
        type: types.GO_PAGE,
        pageNum
    }
}