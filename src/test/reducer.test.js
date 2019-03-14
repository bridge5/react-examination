import React from 'react';
import { configure} from 'enzyme';
import chai, { expect } from 'chai';
import Reducer from '../reducers/playerlist';
import * as types from '../constants/ActionTypes';

import Adapter from 'enzyme-adapter-react-16';

configure({ adapter: new Adapter() });

describe('reducer', function() {

  const initialState = {
    playersById: [
      {
        id: 0,
        name: 'LeBron James',
        team: 'LOS ANGELES LAKERS',
        position: 'SF',
        starred: true,
      },
      {
        id: 1,
        name: 'Kevin Duran',
        team: 'GOLDEN STATE WARRIORS',
        position: 'SF',
        starred: false,
      },
      {
        id: 2,
        name: 'Anthony Davis',
        team: 'NEW ORLEANS PELICANS',
        position: 'PF',
        starred: false,
      },
      {
        id: 3,
        name: 'Stephen Curry',
        team: 'GOLDEN STATE WARRIORS',
        position: 'PG',
        starred: false,
      },
      {
        id: 4,
        name: 'James Harden',
        team: 'HOUSTON ROCKETS',
        position: 'SG',
        starred: false,
      },
      {
        id: 5,
        name: 'Kawhi Leonard',
        team: 'TORONTO RAPTORS',
        position: 'SF',
        starred: false,
      },
    ],
    idCounter: 6
  };

  describe('Add Player', function(){

    const action = {
      type: types.ADD_PLAYER,
      name: 'new_player'
    }

    const nextState = Reducer(initialState, action);
    it('Should have 7 players', () => {
      const playersLength = nextState.playersById.length;
      expect(playersLength).to.be.equal(7);
    });

    it("New player's name should be 'new_player'", () => {
      const newPlayer = nextState.playersById[6];
      expect(newPlayer.name).to.be.equal('new_player');
    })

    it("New player's id should be 6", () => {
      const newPlayer = nextState.playersById[6];
      expect(newPlayer.id).to.be.equal(6);
    })

    const oneMoreAction = {
      type: types.ADD_PLAYER,
      name: 'new_player2',
    }

    const newestState = Reducer(nextState, oneMoreAction);
    it("new_player2's id should be 7", () => {
      const newPlayer = newestState.playersById[7];
      expect(newPlayer.id).to.be.equal(7);
    })

  })

  describe('Delete Player', () => {
    const action = {
      type: types.DELETE_PLAYER,
      id: 0
    }
    const nextState = Reducer(initialState, action)
    it('LeBron James should be deleted', ()=>{
      const findLeBron = nextState.playersById.filter((player) => player.name==='LeBron James')[0]
      expect(findLeBron).to.be.undefined
    })

    const oneMoreAction = {
      type: types.DELETE_PLAYER,
      id: 3
    }
    const newestState = Reducer(nextState, oneMoreAction)
    it('There should be 4 players in the list', () => {
      const playersLength = newestState.playersById.length
      expect(playersLength).to.be.equal(4)
    })
  })

  describe('Star Player', () => {
    const action = {
      type: types.STAR_PLAYER,
      id: 0
    }
    const nextState = Reducer(initialState, action)
    it('LeBron James should be unstarred', ()=>{
      const findLeBron = nextState.playersById.filter((player) => player.name==='LeBron James')[0]
      expect(findLeBron.starred).to.be.false
    })

    const oneMoreAction = {
      type: types.STAR_PLAYER,
      id: 3
    }
    const newestState = Reducer(nextState, oneMoreAction)
    it('Stephen Curry should be starred', () => {
      const findSteph = newestState.playersById.filter((player) => player.name==='Stephen Curry')[0]
      expect(findSteph.starred).to.be.true
    })
  })

})