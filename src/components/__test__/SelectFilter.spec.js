import React from 'react';
import { shallow } from 'enzyme';
import { SelectFilter } from '../index';

describe('<SelectFilter/>', () => {
  test('Should find option PG & SF in <SelectFilter/>', () => {
    const wrapper = shallow(
      <SelectFilter/>
    );
    expect(wrapper.find('option').at(1).prop('value')).toBe('SF')
  })
})
