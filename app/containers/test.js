'use strict';

import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect  } from 'react-redux';
import _ from 'underscore';

import NavBar from './../containers/nav-bar';
import Styles from './../stylesheets/test-styles';
import Swiper from 'react-native-swiper'

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
        <Swiper style={Styles.wrapper} showsButtons={true}>
          <View style={Styles.slide1}>
            <Text style={Styles.text}>Hello Swiper</Text>
          </View>
          <View style={Styles.slide2}>
            <Text style={Styles.text}>Beautiful</Text>
          </View>
          <View style={Styles.slide3}>
            <Text style={Styles.text}>And simple</Text>
          </View>
        </Swiper>
      </View>
    )
  }
}

module.exports = connect(
                   mapStateToProps,
                   mapDispatchToProps
                 )(Test);
