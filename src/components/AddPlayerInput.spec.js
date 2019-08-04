import React from 'react';
import { shallow, configure } from 'enzyme';
import AddPlayerInput from './AddPlayerInput';
import Adapter from 'enzyme-adapter-react-16';

configure({adapter: new Adapter()});
describe("test AddPlayerInput", () => {
  const addPlayer = jest.fn();
  const wrapper = shallow(<AddPlayerInput addPlayer={addPlayer} />)
  it("handleInputChange Fn test", () => {
    const instance = wrapper.instance();
    const spy = jest.spyOn(instance, 'handleInputChange');
    wrapper.find('input').at(0).simulate('change', { target: { name: 'test for name' }})
    instance.forceUpdate();  
    expect(spy).toHaveBeenCalledWith({ target: { name: 'test for name' }},'name');
  });                     

                                     
});