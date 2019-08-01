import React from 'react';
import { buildPageButtons, Paginator } from './Paginator';
import renderer from 'react-test-renderer';

it('renders without crashing', () => {
  const wrapper = renderer
    .create(<Paginator totalPage={20} currentPage={1} />)
    .toJSON();
  expect(wrapper).toMatchSnapshot();
});

it('should render pageButton size must be 5', () => {
  const pageButtons = buildPageButtons(1, 10);
  expect(pageButtons.size).toBe(5);
});
