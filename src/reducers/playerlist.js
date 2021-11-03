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
    position: '全部类型',
    currentPage: 1
};

export default function players(state = initialState, action) {
    switch (action.type) {
        case types.ADD_PLAYER:
            return {
                ...state,
                currentPage: 1,
                playersById: [
                    ...state.playersById,
                    {
                        name: action.name,
                        team: 'LOS ANGELES LAKERS',
                        position: 'SF',
                    },
                ],
            };
        case types.DELETE_PLAYER:
            return {
                ...state,
                currentPage: 1,
                playersById: state.playersById.filter(
                    (item, index) => item.name !== action.name,
                ),
            };
        case types.STAR_PLAYER:
            let players = [...state.playersById];
            let player = players.find((item, index) => index === action.id);
            player.starred = !player.starred;
            return {
                ...state,
                playersById: players,
            };
        case types.SELECT_PLAYER:
            return {
                ...state,
                currentPage: 1,
                position: action.position
            };
        case types.CURRENT_PAGE:
            return {
                ...state,
                currentPage: action.current
            }
        default:
            return state;
    }
}
