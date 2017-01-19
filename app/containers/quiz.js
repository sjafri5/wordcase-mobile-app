'use strict';

import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect  } from 'react-redux';
import _ from 'underscore';

import { Container } from '../components/index';
import NavigationBar from './navigation-bar';
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
      <Container layoutType={'type3'}>
        <View>
          <Text>
            this is the Quiz page
          </Text>
        </View>
        <NavigationBar navigator={navigator} currentScene={'Dashboard'} />
      </Container>
    )
  }
}

module.exports = connect(
                   mapStateToProps,
                   mapDispatchToProps
                 )(Test);
