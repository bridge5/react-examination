import React, { Component } from 'react';
import { combineReducers, createStore } from 'redux';
import { Provider } from 'react-redux';

import PlayerListApp from './PlayerListApp';
import * as reducers from '../reducers';

const reducer = combineReducers(reducers);
// const store = createStore(reducer);

const store = createStore(
  reducer, /* preloadedState, */
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);

export default class App extends Component {
  render() {
    return (
      <div>
        <Provider store={store}>
          <PlayerListApp />
        </Provider>
      </div>
    );
  }
}
