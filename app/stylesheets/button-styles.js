'use strict';
import React from 'react';
import Colors from './colors';

import {
    StyleSheet,
    PixelRatio
} from 'react-native';

var Styles = StyleSheet.create({
  submitButton: {
    marginLeft: 20,
    marginRight: 20,
    backgroundColor: Colors.buttonBlue,
    borderRadius: 2,
    height:50,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center'
  },
  submitButtonText: {
    fontFamily: 'Roboto Bold',
    fontSize: 20,
    color: Colors.white
  }
})

module.exports = Styles;
