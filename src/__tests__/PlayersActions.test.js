import * as actions from '../actions/PlayersActions'
import * as types from '../constants/ActionTypes';

describe('actions', () => {
  it('should create an action to add a player', () => {
    const name = 'testingname'
    const position = 'PG'
    const expectedAction = {
      type: types.ADD_PLAYER,
      name,
      position
    }
    expect(actions.addPlayer(name, position)).toEqual(expectedAction)
  })
})