import React, { Component } from 'react';
import { connect  } from 'react-redux';

import Styles from './../stylesheets/home-styles';
import Button from './../components/button';

import * as homeActions from '../actions/home-actions';

import {
  Text,
  TextInput,
  View
} from 'react-native';

const mapStateToProps = (state) => {
  return {
    homePage: state.homePage
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    receiveWordInput: (text)=>{
      console.log('1', );
      dispatch(homeActions.receiveWordInput(text))
    }
  }
}

class Index extends Component {
  constructor(props) {
    super(props);
  }

  handleWordInput(text){
    let { receiveWordInput } = this.props;
    receiveWordInput(text);
  }

  handleSubmit(){

  }

  render() {
    let { homePage } = this.props;
    return (
        <View>
          <Text>
            Welcome to WordCase
          </Text>
          <TextInput
            style={Styles.numericInputField}
            placeholder={'enter word'}
            value={homePage.word}
            onChangeText= {this.handleWordInput.bind(this) }
          />
          <Button text='Define' whenTapped={this.handleSubmit.bind(this)}/>
        </View>
    );
  }
}

module.exports = connect(
                   mapStateToProps,
                   mapDispatchToProps
                 )(Index);
