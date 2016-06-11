import React, { Component } from 'react';
import {
  Navigator
} from 'react-native';

import HomePage from '../containers/home-page';

class Router extends Component {
  renderScene(route, nav){
    switch (route.name) {
    case 'Index':
      return <HomePage />;
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
