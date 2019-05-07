import reducers from '../playerlist';
import * as types from '../../constants/ActionTypes';

describe('playerlist reducer', () => {
  const initialState = {
    pageNumber: 1,
    filterType: "ALL",
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

  test("test ADD_PLAYER", () => {
    const action = {
      type: types.ADD_PLAYER,
      name: 'Jordan',
    };
    let state = reducers(initialState, action)
    expect(state).toEqual({
      ...initialState,
      playersById: [
        ...initialState.playersById,
        {
          name: "Jordan",
          team: "LOS ANGELES LAKERS",
          position: "SF",
          starred: false
        }
      ]
    })
  })

  test("test DELETE_PLAYER", () => {
    const action = {
      type: types.DELETE_PLAYER,
      id: 0
    };

    const state = reducers(initialState, action)
    expect(state).toEqual({
      ...initialState,
      playersById: initialState.playersById.filter((player, index) => index !== 0)
    })
  })

})
