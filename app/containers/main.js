import React, { Component } from 'react';
import { createStore, applyMiddleware, combineReducers  } from 'redux';
import { Provider } from 'react-redux';
import Router from './router'
import thunk from 'redux-thunk';
const createStoreWithMiddleware = applyMiddleware(thunk)(createStore);
import * as reducers from '../reducers/index';
const reducer = combineReducers(reducers);
const store = createStoreWithMiddleware(reducer);


class Wordcase extends Component {
  handleWordInput(event){
    let { receiveWordInput } = this.props;
    let text = event.nativeEvent.text
    receiveWordInput(text);

  }
  render() {
    return (
      <Provider store={store}>
        <Router />
      </Provider>
    );
  }
}

module.exports = Wordcase;
