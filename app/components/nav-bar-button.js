'use strict';

import React, { Component } from 'react';
import Styles from './../stylesheets/nav-bar-styles';

import {
    Text,
    View,
    TouchableHighlight
} from 'react-native'

class NavBarButton extends Component {
  render() {
    let { name } = this.props;
    return (
      <View>
       <Text multiline={true} allowFontScaling={true} style={Styles.panelText}>
         {name}
       </Text>
     </View>
    )
  }
}

module.exports = NavBarButton;
