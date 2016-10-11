'use strict';
import React from 'react';
import Colors from './colors';

import {
    StyleSheet,
    PixelRatio
} from 'react-native';

var Styles = StyleSheet.create({
  wrapper: {},
  slide1: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#9DD6EB',

  },
  slide2: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#97CAE5',

  },
  slide3: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#92BBD9',

  },
  text: {
    color: '#fff',
    fontSize: 30,
    fontWeight: 'bold',

  }
})

module.exports = Styles;
