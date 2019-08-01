import React from 'react';
import AddPlayerInput from './AddPlayerInput';
import renderer from 'react-test-renderer';
import { mount, shallow } from 'enzyme';

it('renders without crashing', () => {
  const spy = jest.fn();
  const wrapper = renderer.create(<AddPlayerInput addPlayer={spy} />).toJSON();
  expect(wrapper).toMatchSnapshot();
});

it('should trigger fn when button clicked', () => {
  const spy = jest.fn();
  const wrapper = mount(<AddPlayerInput addPlayer={spy} />);
  const button = wrapper.find('button').at(0);
  button.simulate('click');
  expect(spy.mock.calls.length).toBe(1);
});
