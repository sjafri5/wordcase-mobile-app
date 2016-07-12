'use strict';
import React from 'react';
import Colors from './colors';

import {
    StyleSheet,
    PixelRatio
} from 'react-native';

var Styles = StyleSheet.create({
  menuIconContainer: {
    flex:1,
    flexDirection:'row',
    justifyContent: 'center',
    height: 60,
    backgroundColor: Colors.white,
    paddingRight: 10,
    paddingLeft: 10,
  },
  menuIconButton: {
    flex:0.5,
    flexDirection:'column',
    justifyContent: 'center',
    alignItems:'flex-end',
  },
  menuIconButton2: {
    flex:0.5,
    flexDirection:'column',
    justifyContent: 'center',
    alignItems:'flex-start',
  },
  menuBase: {
    borderTopColor: Colors.gray31,
    borderTopWidth: 1,
    backgroundColor: Colors.slateGray,
    flex: 1,
  },
  menuExpanded: {
    flex: 1,
    height: 150
  },
  sokowatchIconImage: {
    width: 20,
    height: 35
  },
  menuIconImage: {
    width: 35,
    height: 35
  },
  navBarPanel: {
    borderBottomColor: 'white',
    borderBottomWidth: 1,
    height: 50,
    flexDirection:'row',
    alignItems:'center',
    paddingLeft: 20,
  },
  panelText: {
    paddingLeft: 20,
    paddingRight: 20,
    color: 'white',
    fontSize: 20,
    textAlign: 'left'
  },
})

module.exports = Styles;
