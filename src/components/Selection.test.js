import React from 'react';
import { configure, shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import toJSON from 'enzyme-to-json';
import Selection from './Selection';

configure({ adapter: new Adapter() });

describe('Selection', () => {
  test('renders without crashing', () => {
    const wrapper = shallow(<Selection />);
    expect(toJSON(wrapper)).toMatchSnapshot();
  });
});
