import React, { Component } from 'react';
import { connect  } from 'react-redux';

import Styles from './../stylesheets/home-styles';
import Button from './../components/button';

import Api from './../utils/api';

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
      dispatch(homeActions.receiveWordInput(text))
    },
    submitWord: ()=>{
      dispatch(homeActions.submitWord())
    },
    fetchDefinition: ()=>{
      dispatch(homeActions.fetchDefinition())
    },
    receiveDefinition: (definition)=>{
      dispatch(homeActions.receiveDefinition(definition))
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
    let { homePage, submitWord, fetchDefinition, receiveDefinition } = this.props;

    submitWord();
    fetchDefinition();
    Api.getDefinition(homePage.word).then((response)=>{
      let definition = response.results[0].definition
      receiveDefinition(definition);
    })
  }

  _renderDefinition() {
    let { submitted, word, definition } = this.props.homePage;
    if (submitted) {
      return (
        <View>
          <Text>
            {word}:
          </Text>
          <View>
            <Text>
              {definition}
            </Text>
          </View>
        </View>
      )
    }
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
          {this._renderDefinition()}
        </View>
    );
  }
}

module.exports = connect(
                   mapStateToProps,
                   mapDispatchToProps
                 )(Index);
