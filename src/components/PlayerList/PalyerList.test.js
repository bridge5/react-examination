import React from 'react';
import PlayerList from './PlayerList';
import renderer from 'react-test-renderer';



it('renders PlayerList without data', () => {
    const mockPlayers = [];
    const mockActions = {};
    const wrapper = renderer.create(<PlayerList actions={mockActions} players={mockPlayers} />).toJSON();
    expect(wrapper).toMatchSnapshot();
});

it('renders PlayerList with mock Data', () => {
    const mockPlayers = [
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
    ];
    const mockActions = {
        starPlayer: () => true,
    };
    const wrapper = renderer.create(<PlayerList actions={mockActions} players={mockPlayers} />).toJSON();
    expect(wrapper).toMatchSnapshot();
});
