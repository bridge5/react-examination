import React, { Component } from 'react';
import {
  combineReducers, createStore, applyMiddleware, compose,
} from 'redux';
import thunk from 'redux-thunk';
import { Provider } from 'react-redux';

import PlayerListApp from './PlayerListApp';
import * as reducers from '../reducers';

let composeEnhancers = typeof window !== 'undefined'
    ? window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__
    : null;
composeEnhancers = composeEnhancers || compose;
/* eslint-enable */

const reducer = combineReducers(reducers);
const store = createStore(reducer,
  composeEnhancers(applyMiddleware(thunk)));

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
