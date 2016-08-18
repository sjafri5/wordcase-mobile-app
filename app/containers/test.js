'use strict';

import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect  } from 'react-redux';
import _ from 'underscore';

import NavBar from './../containers/nav-bar';
import Styles from './../stylesheets/test-styles';

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

class Test extends Component {
  constructor(props) {
    super(props);
  }
  render(){
    let { navigator } = this.props;

    return (
      <View style={Styles.container}>
        <NavBar navigator={ navigator } />
        <Text>
          this is the test page
        </Text>
      </View>
    )
  }
}

module.exports = connect(
                   mapStateToProps,
                   mapDispatchToProps
                 )(Test);
