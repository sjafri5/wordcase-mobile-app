import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { createStore, applyMiddleware, combineReducers  } from 'redux';
import { connect  } from 'react-redux';
import { Provider } from 'react-redux';
import thunk from 'redux-thunk';
const createStoreWithMiddleware = applyMiddleware(thunk)(createStore);
import * as reducers from '../reducers/index';
const reducer = combineReducers(reducers);
const store = createStoreWithMiddleware(reducer);

import Styles from './../stylesheets/home-styles';
import * as homeActions from '../actions/home-actions';

import {
  Text,
  TextInput,
  View
} from 'react-native';

const mapStateToProps = (state) => {
  return {
    //login: state.login,
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    receiveWordInput: (text)=>{
      dispatch(homeActions.receiveWordInput(text))
    },
  }
}
class Wordcase extends Component {
  handleWordInput(event){
    let { receiveWordInput } = this.props;
    let text = event.nativeEvent.text
    receiveWordInput(text);

  }
  render() {
    return (
      <Provider store={store}>
        <View>
          <Text>
            Welcome to WordCase
          </Text>
          <TextInput
            style={Styles.numericInputField}
            placeholder={'enter word'}
            value={''}
            onChange= {this.handleChangeEvent}
          />
        </View>
      </Provider>
    );
  }
}

module.exports = connect(
                   mapStateToProps,
                   mapDispatchToProps
                 )(Wordcase);
