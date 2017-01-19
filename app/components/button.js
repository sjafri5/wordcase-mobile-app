import React, { Component } from 'react';
import Colors from '../stylesheets/colors'

import {
  View,
  Text,
  StyleSheet,
  TouchableHighlight
} from 'react-native';

class Button extends Component {
  render() {
    let { name, onPress, type } = this.props;
    return (
        <View style={Styles.buttonContainer}>
            <TouchableHighlight
              style={[Styles.submitButton, Styles[type]]} 
              underlayColor={type == 'buttonPrimary' ? Colors.darkGreen : 'transparent'}
              onPress={onPress} >
             <Text style={Styles.submitButtonText}>
               {name}
             </Text>
            </TouchableHighlight>
        </View>
    );
  }
}

module.exports = Button;

const Styles = StyleSheet.create({
  buttonContainer: {
    flexDirection: 'row',
  },
  submitButton: {
    height:50,
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center'
  },
  buttonPrimary: {
    backgroundColor: Colors.green,
  },
  buttonSecondary: {
    borderWidth: 2,
    borderColor: 'white',
  },
  submitButtonText: {
    fontSize: 18,
    fontFamily: 'SourceSansPro-Regular',
    color: Colors.white
  },
});

