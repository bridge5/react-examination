import * as actions from '../actions/PaginationActions';
import * as types from '../constants/ActionTypes';
import players from '../reducers/playerlist';

describe('actions', () => {
    it('prev page', () => {
        expect(actions.prevPage()).toEqual({ type: types.PREV_PAGE });
    });
    it('next page', () => {
        expect(actions.nextPage()).toEqual({ type: types.NEXT_PAGE });
    });
    it('go page', () => {
        expect(actions.goPage(3)).toEqual({ type: types.GO_PAGE, pageNum: 3 });
    });
});

describe('reducer', () => {
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
            }
        ],
        pageNum: 1
    }
    it('prev page', () => {
        const prevState = {
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
                }
            ],
            pageNum: 1
        }
        initialState.pageNum = 2;
        expect(players(initialState, { type: types.PREV_PAGE })).toEqual(prevState);
        initialState.pageNum = 1;
        expect(players(initialState, { type: types.PREV_PAGE })).toEqual(prevState);
    });

    it('next page', () => {
        const nextState = {
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
                }
            ],
            pageNum: 2
        }
        expect(players(initialState, { type: types.NEXT_PAGE })).toEqual(nextState);
        initialState.pageNum = 2;
        expect(players(initialState, { type: types.NEXT_PAGE })).toEqual(nextState);
        initialState.pageNum = 1;
    });

    it('go page', () => {
        const goPageState = {
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
                }
            ],
            pageNum: 2
        }
        expect(players(initialState, { type: types.GO_PAGE, pageNum: 2 })).toEqual(goPageState);
    });
});