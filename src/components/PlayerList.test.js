import React from "react";
import ReactDOM from "react-dom";
import { PlayerList } from "./PlayerList";
import { initialState } from "../reducers/playerlist";
import { mount } from "enzyme";

const props = {
  players: initialState.playersById,
  actions: {
    starPlayer: () => {}
  }
};

const setup = () => {
  const wrapper = mount(<PlayerList {...props} />);
  return {
    props,
    wrapper
  };
};

it("should has Button", () => {
  const { wrapper } = setup();
  expect(wrapper.find("small").length).toBe(5);
});

it('click page 2', () => {
  const { wrapper } = setup();
  wrapper.find('a').forEach(item=>{
    if(item.text() === '2'){
      item.simulate('click');
    }
  })
  expect(wrapper.find("small").length).toBe(5);
});


it('click page 3', () => {
  const { wrapper } = setup();
  wrapper.find('a').forEach(item=>{
    if(item.text() === '3'){
      item.simulate('click');
    }
  })
  expect(wrapper.find("small").length).toBe(1);
});


it('click page 3 and 1', () => {
  const { wrapper } = setup();
  wrapper.find('a').forEach(item=>{
    if(item.text() === '3'){
      item.simulate('click');
    }
  })
  wrapper.find('a').forEach(item=>{
    if(item.text() === '1'){
      item.simulate('click');
    }
  })
  expect(wrapper.find("small").length).toBe(5);
});