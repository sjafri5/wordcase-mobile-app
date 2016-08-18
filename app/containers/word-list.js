'use strict';

import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect  } from 'react-redux';
import _ from 'underscore';

import NavBar from './../containers/nav-bar';
import Styles from './../stylesheets/word-list-styles';

import Async from '../utils/async';

import {
    View,
    Text,
    UIManager
} from 'react-native'

UIManager.setLayoutAnimationEnabledExperimental && UIManager.setLayoutAnimationEnabledExperimental(true);

const mapStateToProps = (state) => {
  return {
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
  }
}

class WordList extends Component {
  constructor(props) {
    super(props);
  }

  componentWillMount(){
    Async.fetchWordList().then((wordList)=>{
      console.log('weodafasfsdfa', wordList);
    })
  }
  
  renderWords(){

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
