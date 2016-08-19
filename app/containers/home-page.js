import React, { Component } from 'react';
import { connect  } from 'react-redux';

import { Button } from '../components/require-components';
import { NavBar } from './require-containers';
import { Api, Async } from '../utils/require-utils';

import Styles from './../stylesheets/home-styles';
import ProgressBar from 'ProgressBarAndroid';
import _ from 'underscore';


import * as homeActions from '../actions/home-actions';
import * as wordActions from '../actions/word-actions';

import {
  Text,
  TextInput,
  View,
  AsyncStorage,
  ActionAlert,
  ToastAndroid,
  ScrollView
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
    receiveDefinition: (definitions)=>{
      dispatch(homeActions.receiveDefinition(definitions))
    },
    resetWordBox: ()=>{
      dispatch(wordActions.resetWordBox())
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
    let { clearTextField, homePage, submitWord, fetchDefinition, receiveDefinition } = this.props;

    submitWord();
    fetchDefinition();
    Api.getDefinition(homePage.wordInputField).then((response)=>{
      receiveDefinition(response);
    })
  }

  _renderDefinitions() {
    let { fetching, submitted, submittedWord, definitions } = this.props.homePage;
    if (fetching){
      return (
        <View style={Styles.definitionsContainer}>
          <ProgressBar />
        </View>
      );
    }
    else if (submitted) {
      return (
        <ScrollView style={Styles.definitionsContainer}>
          <View style={Styles.wordBox}>
            <Text style={Styles.submittedWord}>
              {submittedWord}:
            </Text>
            <View>
              {this._renderDefinition()}
            </View>
          </View>
          <View>
            {this._renderButtons()}
          </View>
        </ScrollView>
      )
    }
  }
  
  _renderButtons(){
    return (
      <View style={Styles.dualButtonContainer}>
        <View style={Styles.firstBtnContainer}>
          <Button text='Discard' whenTapped={this.handleDiscard.bind(this)}/>
        </View>
        <View style={Styles.secondBtnContainer}>
          <Button text='Keep' whenTapped={this.handleKeep.bind(this)}/>
        </View>
      </View>
    )
  }

  handleKeep(){
    let { homePage, resetWordBox } = this.props;
    let word = {}
    word[homePage.submittedWord] = homePage.definitions.slice(0,2);
    Async.cacheWord(word).then(()=>{
      let message = `'${homePage.submittedWord}' has been successfully stored.`
      ToastAndroid.show(message, ToastAndroid.SHORT)
    })
    resetWordBox()
  }

  handleDiscard(){
    let { resetWordBox, homePage} = this.props;
    resetWordBox()
    let message = `'${homePage.submittedWord}' has been discarded.`
    ToastAndroid.show(message, ToastAndroid.SHORT)
  }

  _renderDefinition(){
    let { definitions } = this.props.homePage

    return _.map(definitions.slice(0,2), (definition) => {
      return (
        <View style={Styles.definitionContainer}>
          <Text style={Styles.definitionText}>
            -- {definition.definition}
          </Text>
          
          {this._renderSynonyms(definition)}
        </View>
      );
    });
  };

  _renderSynonyms(definition){
    if (definition.synonyms) {
      return (
        <Text style={Styles.definitionText}>
          Synonyms: {definition.synonyms.join(", ")}
        </Text>
      )
    }
  }

  render() {
    let { homePage, navigator } = this.props;
    return (
        <View style={Styles.container}>
          <NavBar navigator={ navigator } />
          <View style={Styles.inputContainer}>
            <Text style={Styles.header}>
              Lookup a word:
            </Text>
            <TextInput
              style={Styles.numericInputField}
              placeholder={'e.g. cacophony'}
              value={homePage.wordInputField}
              onChangeText= {this.handleWordInput.bind(this) }
            />
          </View>

          <Button text='Define' whenTapped={this.handleSubmit.bind(this)}/>
          {this._renderDefinitions()}
        </View>
    );
  }
}

module.exports = connect(
                   mapStateToProps,
                   mapDispatchToProps
                 )(Index);
