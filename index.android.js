'use strict';

import React, { Component } from 'react';
import Main from './app/containers/main';
import { AppRegistry } from 'react-native';

console.disableYellowBox = true;

AppRegistry.registerComponent('Wordcase', () => Main);
