/*
 * @author: Vision
 * @Date: 2020-02-26 09:52:06
 * @LastEditors: vision
 * @LastEditTime: 2020-02-27 14:05:06
 */
import React, { Component } from "react";
import { combineReducers, createStore } from "redux";
import { Provider } from "react-redux";

import PlayerListApp from "./PlayerListApp";
import * as reducers from "../reducers";

const reducer = combineReducers(reducers);
const store = createStore(reducer);

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
