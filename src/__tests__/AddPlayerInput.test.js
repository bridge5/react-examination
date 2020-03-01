import React from 'react';
import AddPlayerInput from '../components/AddPlayerInput';
import renderer from 'react-test-renderer';
import TestUtils from 'react-dom/test-utils';
import ReactDOM from 'react-dom';
import { addPlayer } from "../actions/PlayersActions";

const player = [
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
]

describe('AddPlayerInput', function() { 
  var AppElement = TestUtils.renderIntoDocument(<AddPlayerInput addPlayer={addPlayer}></AddPlayerInput>); 
  var DomElement = ReactDOM.findDOMNode(AppElement); 
  var input = DomElement.getElementsByTagName('input')[0]; 
  var submitBtn = DomElement.getElementsByTagName('input')[1]; 

  it('renders correctly', () => {
    const tree = renderer
      .create(<AddPlayerInput addPlayer={addPlayer}></AddPlayerInput>)
      .toJSON();
    expect(tree).toMatchSnapshot();
  });

  it('type should be text', function() { 
   expect(input.getAttribute('type')).toEqual('text'); 
  }); 

  it('should render 2 input', () => {
    const testRenderer = renderer.create(<AddPlayerInput addPlayer={addPlayer} />);
    const testInstance = testRenderer.root;
    expect(testInstance.findAll(node => node.type === 'input')).toHaveLength(2);
  });

  it('should empty name and set default position to SF', function() {
    TestUtils.Simulate.click(submitBtn);
    expect(AppElement.state).toEqual({
        name: "",
        position: "SF",
    });
  });
}); 
