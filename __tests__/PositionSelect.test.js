import React from 'react';
import { shallow } from 'enzyme';
import PositionSelect from '../src/components/PositionSelect';


test('when execution onChange event, state.value will be changed', () => {
  const wrapper = shallow(
    <PositionSelect onChange={jest.fn()} />
  );
  const select = wrapper.find('select');
  const TEST_POSITION = 'SF';
  select.simulate('change', {
    target: { value: TEST_POSITION }
  });
  expect(wrapper.state('value')).toBe(TEST_POSITION);
})