import React, { Component } from 'react';
import { applyMiddleware,combineReducers, createStore } from 'redux';
import { Provider } from 'react-redux';
import { createEpicMiddleware } from 'redux-observable';
import { composeWithDevTools } from 'redux-devtools-extension'
import { rootEpic } from '../Epics';

import PlayerListApp from './PlayerListApp';
import * as reducers from '../reducers';

//  实例化一个epic异常流框架
const epicMiddleware = createEpicMiddleware();
const reducer = combineReducers(reducers);
const store = createStore(reducer, composeWithDevTools(applyMiddleware(epicMiddleware)))

epicMiddleware.run(rootEpic);


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
