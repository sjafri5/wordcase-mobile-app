'use strict';

import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect  } from 'react-redux';
import _ from 'underscore';

import { NavBar } from './../containers/require-containers';
import { Async } from '../utils/require-utils';
import Styles from './../stylesheets/word-list-styles';
import * as wordListActions from '../actions/word-list-actions';

import {
    View,
    Text,
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
    }
  }
}

class WordList extends Component {
  constructor(props) {
    super(props);
  }

  componentWillMount(){
    let { initializeWordList } = this.props;

    Async.fetchWordList().then((response)=>{
      let wordList = JSON.parse(response)
      initializeWordList(wordList)
    })
  }
  
  renderWords(){
    let { wordList } = this.props
    let words = Object.keys(wordList)
    return _.map(words, (word) => {
      return <View>
          <Text>
            { word }
          </Text>
          <Text>
            { wordList[word].definition }
          </Text>
      </View>
    })

  }

  render(){
    let { navigator } = this.props;

    return (
      <View style={Styles.container}>
        <NavBar navigator={ navigator } />
        <Text>
          Your Words:
        </Text>
        <View>
          { this.renderWords() }
        </View>
      </View>
    )
  }
}

module.exports = connect(
                   mapStateToProps,
                   mapDispatchToProps
                 )(WordList);
