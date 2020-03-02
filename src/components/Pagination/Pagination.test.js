import React from 'react';
import { shallow } from 'enzyme';
import Pagination from './Pagination';

describe('Pagination feature', () => {
  it('render Paginator correctly', () => {
    const mockChangePage = jest.fn();
    const wrapper = shallow(
      <Pagination
        currentPageIndex={1}
        totalPageIndex={2}
        changePage={mockChangePage}
      />
    );
    expect(wrapper).toMatchSnapshot();
  });
});
