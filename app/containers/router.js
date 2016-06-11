import React, { Component } from 'react';
import {
  Navigator
} from 'react-native';

import Index from '../containers/index';

class Router extends Component {
  renderScene(route, nav){
    switch (route.name) {
    case 'Index':
      return <Index />;
    }
  }
  render() {
    console.log('HERE>', );
    return (
      <Navigator
        debugOverlay={false}
        renderScene={this.renderScene}
        initialRoute={{name: 'Index'}}
      />
    );
  }
}

module.exports = Router;
