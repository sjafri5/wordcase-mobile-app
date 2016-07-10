import React, { Component } from 'react';
import { createStore, applyMiddleware, combineReducers  } from 'redux';
import { Provider } from 'react-redux';
import Router from './router'
import thunk from 'redux-thunk';
const createStoreWithMiddleware = applyMiddleware(thunk)(createStore);
import * as reducers from '../reducers/index';
const reducer = combineReducers(reducers);
const store = createStoreWithMiddleware(reducer);

import Async from './../utils/async';

class Wordcase extends Component {
  componentWillMount(){
    Async.createWordList();
  };

  render() {
    return (
      <Provider store={store}>
        <Router />
      </Provider>
    );
  }
}

module.exports = Wordcase;
