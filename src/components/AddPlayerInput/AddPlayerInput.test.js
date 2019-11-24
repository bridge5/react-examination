import React from "react";
import AddPlayerInput from "./AddPlayerInput";
import { mount } from "enzyme";
import renderer from "react-test-renderer";

describe("AddPlayerInput spec", () => {
  it("render AddPlayerInput correctly", () => {
    const mockAddPlayer = jest.fn();
    const wrapper = renderer
      .create(<AddPlayerInput addPlayer={mockAddPlayer} />)
      .toJSON();
    expect(wrapper).toMatchSnapshot();
  });

  it("should trigger addPlayer correctly", () => {
    const mockAddPlayer = jest.fn();
    const wrapper = mount(<AddPlayerInput addPlayer={mockAddPlayer} />);
    const button = wrapper.find("button").at(0);
    button.simulate("click");
    expect(mockAddPlayer).toBeCalled();
  });
});
