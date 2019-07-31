import React from 'react';
import { Paginator } from "./Paginator";
import renderer from 'react-test-renderer';

it('renders without crashing', () => {
   const wrapper = renderer.create(<Paginator totalPage={20} currentPage={1} />).toJSON();
   expect(wrapper).toMatchSnapshot();
});
