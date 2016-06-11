import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect  } from 'react-redux';

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

class Index extends Component {
  handleWordInput(event){
    let { receiveWordInput } = this.props;
    let text = event.nativeEvent.text
    receiveWordInput(text);
  }
  render() {
    console.log('here????????', );
    return (
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
    );
  }
}

module.exports = connect(
                   mapStateToProps,
                   mapDispatchToProps
                 )(Index);
