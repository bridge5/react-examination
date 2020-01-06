import React from "react";
import { shallow, configure } from "enzyme";
import Pagination from "./Pagination";
import Adapter from "enzyme-adapter-react-16";

configure({ adapter: new Adapter() });
describe("pagination test", () => {
  const mockArray = Array.from(Array(36).keys());
  const wrapper = shallow(
    <Pagination page={4} setPage={() => {}} players={mockArray} />
  );
  it("test pagination display", () => {
    expect(wrapper.find("div").children()).toHaveLength(8);
  });
});
