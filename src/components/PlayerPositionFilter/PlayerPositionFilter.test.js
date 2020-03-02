import React from 'react';
import { shallow } from 'enzyme';
import PlayerPositionFilter from './PlayerPositionFilter';

describe('PlayerPositionFilter feature', () => {
  it('render PlayerPositionFilter correctly', () => {
    const wrapper = shallow(<PlayerPositionFilter />);
    expect(wrapper).toMatchSnapshot();
  });
});
