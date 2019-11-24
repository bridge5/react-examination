import React from "react";
import renderer from "react-test-renderer";
import { Paginator } from "./Paginator";

describe("Paginator spec", () => {
  it("render Paginator correctly", () => {
    const mockChangePage = jest.fn();
    const wrapper = renderer
      .create(
        <Paginator totalPage={2} currentPage={1} changePage={mockChangePage} />
      )
      .toJSON();
    expect(wrapper).toMatchSnapshot();
  });
});
