'use strict';

import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect  } from 'react-redux';
import _ from 'underscore';

import NavBar from './../containers/nav-bar';
import Styles from './../stylesheets/word-list-styles';

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
  render(){
    let { navigator } = this.props;

    return (
      <View style={Styles.container}>
        <NavBar navigator={ navigator } />
        <Text>
          this is the word list 
        </Text>
      </View>
    )
  }
}

module.exports = connect(
                   mapStateToProps,
                   mapDispatchToProps
                 )(WordList);
