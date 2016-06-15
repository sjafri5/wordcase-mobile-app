'use strict';
import React from 'react-native';
import Colors from './colors';

var {
    StyleSheet,
    PixelRatio
} = React;

var Styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  inputContainer: {
    marginTop: 20,
    marginBottom: 30,
    marginLeft: 15,
    marginRight: 15,
  },
  header: {
    marginBottom: 10,
    color: Colors.buttonBlue,
    fontSize: 17,
    fontFamily: 'Roboto Bold',
    fontWeight: 'bold'
  },
  submittedWord: {
    marginBottom: 10,
    color: Colors.black,
    fontSize: 25,
    fontFamily: 'Roboto Bold',
    fontWeight: 'bold'
  },
  definitionText: {
    marginBottom: 10,
    color: Colors.black,
    fontSize: 15,
    fontFamily: 'Roboto Bold',
  },
  definitionsContainer: {
    marginTop: 20,
    marginBottom: 30,
    marginLeft: 15,
    marginRight: 15,
  },
  definitionContainer: {
    marginBottom: 25,
    marginLeft: 15,
    marginRight: 15,
  },
})

module.exports = Styles;
