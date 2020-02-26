import React from 'react';
import { shallow } from 'enzyme';
import Pagination from '../src/components/Pagination';
const fn = jest.fn();
const props = {
  pageSize: 5,
  currentPage: 1,
  total: 60,
  onCurrentChange: fn,
}

test('click btn-next',  () => {
  const wrapper = shallow(
    <Pagination {...props} />
  );
  const next = wrapper.find('[data-test="btn-next"]');
  next.simulate('click');
  expect(wrapper.state('currentPage')).toEqual(props.currentPage + 1);
});

test('when the first page is current page, click btn-prev will no effective', ()=>{
  const wrapper = shallow(
    <Pagination {...props} />
  );
  const prev =  wrapper.find('[data-test="btn-prev"]');
  prev.simulate('click');
  expect(fn).not.toHaveBeenCalled();
});

test('when totalPage > 7, li with textContent "..." will appear  ',  () => {
  const wrapper = shallow(
    <Pagination {...props} />
  );
  const nextMore = wrapper.find('[data-test="next-more"]')
  expect(nextMore.type()).toEqual('li');
  expect(nextMore.text()).toBe('...');
});