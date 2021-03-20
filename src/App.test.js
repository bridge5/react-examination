import React from 'react';
import ReactDOM from 'react-dom';
import App from './containers/App';
import Enzyme,{shallow} from 'enzyme';
import Pagination from './components/Pagination';

import Adapter from 'enzyme-adapter-react-16'; 

Enzyme.configure({ adapter: new Adapter() });

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<App />, div);
});

test('pageComponent',()=>{
  const pageComponent = shallow(<Pagination currentPage={1} changePage={() => {}} size={2} />);
})
