'use strict';

import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect  } from 'react-redux';
import _ from 'underscore';

import { NavBar } from './../containers/require-containers';
import { Async } from '../utils/require-utils';
import GStyles from '../stylesheets/global-styles';
import Styles from '../stylesheets/word-list-styles';
import * as wordListActions from '../actions/word-list-actions';

import {
    View,
    Text,
    Picker,
    UIManager
} from 'react-native'

UIManager.setLayoutAnimationEnabledExperimental && UIManager.setLayoutAnimationEnabledExperimental(true);

const mapStateToProps = (state) => {
  return {
    wordList: state.wordList
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    initializeWordList: (wordList)=>{
      dispatch(wordListActions.initializeWordList(wordList))
    },
    displayWord: (word)=>{
      dispatch(wordListActions.displayWord(word))
    }
  }
}

class WordList extends Component {
  constructor(props) {
    super(props);
  }

  getInitialState(){
    return {
      language: 'java'
    }
  }

  componentWillMount(){
    let { initializeWordList } = this.props;
    this.setState({
      language: 'java'
    })

    Async.fetchWordList().then((response)=>{
      let wordList = JSON.parse(response)
      initializeWordList(wordList)
    })
  }
  
  renderWords(){
    let { wordList } = this.props
    let words = Object.keys(wordList.words)
    return _.map(words, (word) => {
      return <Picker.Item label={word} value={word} />
    })
  }

  render(){
    let { navigator, wordList, displayWord } = this.props;
    let { words, selectedWord } = wordList;
    let definition;

    if (words[selectedWord] instanceof Array) {
      definition = words[selectedWord][0].definition
    }

    return (
      <View style={GStyles.container}>
        <NavBar navigator={ navigator } />
        <View>
          <View style={GStyles.centered}>
            <Text style={GStyles.header}>
              Select a Word from your list to view its definition:
            </Text>
          </View>
          <View>
            <View style={Styles.pickerContainer}>
              <Picker
                selectedValue={ wordList.selectedWord }
                onValueChange={(word) => displayWord(word)}
                >
                { this.renderWords() }
              </Picker>
            </View>
            <View style={[Styles.definitionContainer]}>
              <Text style={[GStyles.wordHeader]}>
                Definition:
              </Text>
              <View style={GStyles.centered}>
                <Text>
                  {definition}
                </Text>
              </View>
            </View>
          </View>
        </View>
      </View>
    )
  }
}

module.exports = connect(
                   mapStateToProps,
                   mapDispatchToProps
                 )(WordList);
