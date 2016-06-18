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
    marginTop: 10,
    marginBottom: 10,
    marginLeft: 15,
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
  wordBox: {
    borderRadius: 5,
    backgroundColor: '#853962',
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
  dualButtonContainer: {
    marginTop: 15,
    marginBottom: 15,
    flex: 1,
    flexDirection: 'row'
  },
  firstBtnContainer: {
    flex: 0.5,
    alignSelf: 'flex-start'
  },
  secondBtnContainer: {
    flex: 0.5,
    alignSelf: 'flex-end'
  },
})

module.exports = Styles;
