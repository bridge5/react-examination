import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import PageList from './components/PageList'
import shallow from 'enzyme'

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<App />, div);
});

describe('PageList component',()=>{
  const props = {
    totalPageNumber:6,
    curPageNumber:1,
  }
})


