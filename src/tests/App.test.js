import React from 'react';
import ReactDOM from 'react-dom';
import App from '../containers/App';
import PlayerListApp from '../containers/PlayerListApp';
import playlistReducer from '../reducers/playerlist';

import { shallow, mount } from 'enzyme';


describe('App test',()=>{
    it('App should render without crashing', () => {
        const div = document.createElement('div');
        ReactDOM.render(<App />, div);
    }); 
});


describe('PlayerListApp test',()=>{
    let wrapper;
    
    beforeEach(()=>{
        wrapper = shallow(<PlayerListApp />);
    })
    
    it('PlayerListApp should render without crashing', () => {
      expect(wrapper.exists()).toBe(true);
    });
});
    
describe('Playerlist reducer test',()=>{
    const initialState = {
        selectedPage: 0,
        pageData: [],
        numberPerPage: 5,
        playersById: [
            {
                id: 1,
                name: 'LeBron James',
                team: 'LOS ANGELES LAKERS',
                position: 'SF',
                starred: true,
            },
            {
                id: 2,
                name: 'Kevin Duran',
                team: 'GOLDEN STATE WARRIORS',
                position: 'SF',
                starred: false,
            }
        ],
    };
    
    it('test reducer for ADD_PLAYER', () => {
        let state = playlistReducer(initialState,{
            type: 'ADD_PLAYER', 
            name: 'Stephen Curry',
            team: 'GOLDEN STATE WARRIORS',
            position: 'PG'
        })
        
        expect(state.playersById).toEqual([
            {
                id: 1,
                name: 'LeBron James',
                team: 'LOS ANGELES LAKERS',
                position: 'SF',
                starred: true,
            },
            {
                id: 2,
                name: 'Kevin Duran',
                team: 'GOLDEN STATE WARRIORS',
                position: 'SF',
                starred: false,
            },
            {
                id: 3,
                name: 'Stephen Curry',
                team: 'GOLDEN STATE WARRIORS',
                position: 'PG'
        }]);
    });
    
    it('test reducer for DELETE_PLAYER', () => {
        let state = playlistReducer(initialState,{
            type: 'DELETE_PLAYER', 
            id: 2
        })
        
        expect(state.playersById).toEqual([
            {
                id: 1,
                name: 'LeBron James',
                team: 'LOS ANGELES LAKERS',
                position: 'SF',
                starred: true,
            }]);
    });
    
    it('test reducer for STAR_PLAYER', () => {  
        let state = playlistReducer(initialState,{
            type: 'STAR_PLAYER', 
            id: 2
        })
        
        expect(state.playersById).toEqual([
            {
                id: 1,
                name: 'LeBron James',
                team: 'LOS ANGELES LAKERS',
                position: 'SF',
                starred: true,
            },
            {
                id: 2,
                name: 'Kevin Duran',
                team: 'GOLDEN STATE WARRIORS',
                position: 'SF',
                starred: true,
            }]);
    });
});
