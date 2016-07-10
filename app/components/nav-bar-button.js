'use strict';

import React from 'react-native';
import Styles from './../stylesheets/nav-bar-styles';

var {
    Text,
    View,
    TouchableHighlight
} = React;

var NavBarButton = React.createClass({
  render: function() {
    let { name } = this.props;
    return <View>
       <Text multiline={true} allowFontScaling={true} style={Styles.panelText}>
         {name}
       </Text>
     </View>;
  }
});

module.exports = NavBarButton;
