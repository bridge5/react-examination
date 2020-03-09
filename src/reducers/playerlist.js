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
    status: "",
    index: 1,
    size: 5
};

export default function players(state = initialState, action) {
    switch (action.type) {
        case types.ADD_PLAYER:
            return {
                ...state,
                playersById: [
                    {
                        name: action.name,
                        team: 'LOS ANGELES LAKERS',
                        position: 'SF',
                    },
                    ...state.playersById,

                ],
            };
        case types.DELETE_PLAYER:
            //删除之后重新确定页码
            let list = state.playersById.filter((item, index) => index !== action.id);
            let index = state.index, size = state.size;
            let len = list.length;
            let currList = [];
            if (len > 0) {
                currList = list.slice((index - 1) * size, size * index);
            }
            return {
                ...state,
                playersById: list,
                index:currList.length===0?(index>1?index-1:1):index

            };
        case types.STAR_PLAYER:
            let players = [...state.playersById];
            let player = players.find((item, index) => index === action.id);
            player.starred = !player.starred;
            return {
                ...state,
                playersById: players,
            };
        case types.TAB_STATUS_SWITCH:
            return {
                ...state,
                status: action.itemType
            };

        case types.PAGE_CHANGE_INDEX:
            return {
                ...state,
                index: action.index
            };

        default:
            return state;
    }
}
