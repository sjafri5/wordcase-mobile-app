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
  centered: {
    alignItems: 'center',
    justifyContent: 'center'
  },
  header: {
    marginTop: 15,
    marginBottom: 15,
    color: Colors.buttonBlue,
    textAlign: 'center',
    fontSize: 15,
    fontFamily: 'Roboto Bold',
    fontWeight: 'bold'
  },
  wordHeader: {
    marginTop: 15,
    marginBottom: 15,
    color: Colors.black,
    fontSize: 20,
    fontFamily: 'Roboto Bold',
    fontWeight: 'bold'
  },
})

module.exports = Styles;
