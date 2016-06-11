'use strict';

import React, { Component } from 'react';
import Styles from '../stylesheets/button-styles'
//import styles from '../stylesheets/styles';
//import Colors from '../stylesheets/colors';

import {
  Text,
  View,
  TouchableHighlight,
} from 'react-native';

class Button extends Component {
  render() {
    return (
       <TouchableHighlight
         style={[Styles.submitButton, Styles.marginTop]} 
         underlayColor={'#202020'}
         onPress={ () => this.props.whenTapped()}
       >
        <Text style={Styles.submitButtonText}>
          {this.props.text}
        </Text>
      </TouchableHighlight>
      );
  }
};

module.exports = Button;
