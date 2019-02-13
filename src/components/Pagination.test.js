import React from 'react';
import { shallow } from 'enzyme'
import Pagination from './Pagination';
import PaginationItem from './PaginationItem';
import { DEFAULT_PLAYERS } from '../constants/';

const setup = (moreProps = {}) => {
  const defaultPlayers = DEFAULT_PLAYERS
  const props = {
    totalItems: defaultPlayers.length,
    onPageChanged: jest.fn(),
    ...moreProps
  }

  const wrapper = shallow(<Pagination {...props} />)
  return {
    props,
    wrapper
  }
}

it('should render with totalItems and onPageChanged callback function correctly without crash', () => {
  const { wrapper } = setup()
  expect(wrapper).toMatchSnapshot()
});

it('getTotalPages() - should PaginationItem component render correct number by perListItems default props', () => {
  const { wrapper } = setup()
  const totalPages = wrapper.instance().getTotalPages().length
  expect(wrapper.find(PaginationItem)).toHaveLength(totalPages)
})

it('getTotalPages() - should PaginationItem component render correct number by perListItems props', () => {
  const moreProps1 = { perListItems: 2 }
  const pagination1 = setup(moreProps1)
  const correctPages1 = (pagination1.props.totalItems % pagination1.props.perListItems)
    ? parseInt(pagination1.props.totalItems / pagination1.props.perListItems, 10) + 1
    : parseInt(pagination1.props.totalItems / pagination1.props.perListItems, 10)
  const totalPages1 = pagination1.wrapper.instance().getTotalPages().length
  expect(totalPages1).toEqual(correctPages1)

  const moreProps2 = { perListItems: 5 }
  const pagination2 = setup(moreProps2)
  const correctPages2 = (pagination2.props.totalItems % pagination2.props.perListItems)
    ? parseInt(pagination2.props.totalItems / pagination2.props.perListItems, 10) + 1
    : parseInt(pagination2.props.totalItems / pagination2.props.perListItems, 10)
  const totalPages2 = pagination2.wrapper.instance().getTotalPages().length
  expect(totalPages2).toEqual(correctPages2)
})
