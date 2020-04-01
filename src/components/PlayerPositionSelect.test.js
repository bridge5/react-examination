import React from "react";
import Adapter from 'enzyme-adapter-react-16'
import { shallow, configure } from 'enzyme'
configure({ adapter: new Adapter() });

import PlayerPositionSelect from "./PlayerPositionSelect";

describe("<PlayerPositionSelect />", () => {
  it("PlayerPositionSelect", () => {
    const renderer = shallow(<PlayerPositionSelect />);
    expect(renderer.text()).toEqual("CPGSGSFPF");
  });
});