import React from 'react';
import { configure, shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import toJSON from 'enzyme-to-json';
import PlayerListApp from './PlayerList';

configure({ adapter: new Adapter() });

describe('PlayerList', () => {
  test('renders without crashing', () => {
    const wrapper = shallow(<PlayerListApp />);
    expect(toJSON(wrapper)).toMatchSnapshot();
  });
});
