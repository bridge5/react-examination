import React from 'react';
import { combineReducers, createStore } from 'redux';
import { Provider } from 'react-redux';

import PlayerListApp from './PlayerListApp/PlayerListApp';
import * as reducers from '../reducers';

const reducer = combineReducers(reducers);
const store = createStore(reducer);

export default () => {
  return (
    <div>
      <Provider store={store}>
        <PlayerListApp />
      </Provider>
    </div>
  );
};
