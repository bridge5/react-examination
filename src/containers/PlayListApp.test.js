import React from "react";
import { PlayerListAppView } from "./PlayerListApp";
import { shallow } from "enzyme";
import { initialState } from "../reducers/playerlist";

const props = {
  playerlist: initialState.playersById,
  handleShow: jest.fn(),
  addPlayer: jest.fn(),
  deletePlayer: jest.fn(),
  starPlayer: jest.fn()
};

const setup = () => {
  const wrapper = shallow(<PlayerListAppView {...props} />);
  return {
    props,
    wrapper
  };
};

it("should has 3 Button", () => {
  const { wrapper } = setup();
  expect(wrapper.find("Button").length).toBe(3);
});

it("click button show", () => {
  const { wrapper } = setup();
  wrapper
    .find("Button")
    .at(0)
    .simulate("click");
  expect(props.handleShow).toBeCalled();
});

it("click button show", () => {
  const { wrapper } = setup();
  wrapper
    .find("Button")
    .at(1)
    .simulate("click");
  wrapper
    .find("Button")
    .at(2)
    .simulate("click");
  expect(props.handleShow).toHaveBeenCalledTimes(3);
});
