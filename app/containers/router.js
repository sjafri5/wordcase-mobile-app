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
    return (
      <Navigator
        debugOverlay={false}
        renderScene={ this.renderScene.bind(this) }
        initialRoute={{name: 'Index'}}
      />
    );
  }
}

module.exports = Router;
