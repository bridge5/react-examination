import React from 'react';
import { configure, shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import toJSON from 'enzyme-to-json';
import Pagination from './Pagination';

configure({ adapter: new Adapter() });

describe('Pagination', () => {
  test('renders without crashing', () => {
    const wrapper = shallow(<Pagination />);
    expect(toJSON(wrapper)).toMatchSnapshot();
  });
});
