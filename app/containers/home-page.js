import React, { Component } from 'react';
import { connect  } from 'react-redux';

import Styles from './../stylesheets/home-styles';
import Button from './../components/button';
import NavBar from './../containers/nav-bar';

import ProgressBar from 'ProgressBarAndroid';
import _ from 'underscore';

import Api from './../utils/api';
import Async from './../utils/async';

import * as homeActions from '../actions/home-actions';
import * as wordActions from '../actions/word-actions';

import {
  Text,
  TextInput,
  View,
  AsyncStorage,
  ActionAlert,
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
    actionAlert: (message)=>{
      dispatch(homeActions.actionAlert(message))
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
    let { homePage, resetWordBox, actionAlert } = this.props;
    let word = {}
    word[homePage.submittedWord] = homePage.definitions.slice(0,2);
    Async.cacheWord(word);
    resetWordBox()
    actionAlert('Word Stored');
  }

  handleDiscard(){
    let { resetWordBox, actionAlert} = this.props;
    resetWordBox()
    actionAlert('Word Deleted');
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
              value={homePage.word}
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
