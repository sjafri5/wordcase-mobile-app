import React, { Component } from 'react';
import {
  Navigator
} from 'react-native';

import { HomePage, WordList, Test } from '../containers/require-containers'

class Router extends Component {
  renderScene(route, navigator){
    switch (route.name) {
    case 'HomePage':
      return <HomePage navigator={ navigator } />;
    case 'WordList':
      return <WordList navigator={ navigator } />;
    case 'Test':
      return <Test navigator={ navigator } />;
    }
  }
  render() {
    return (
      <Navigator
        debugOverlay={false}
        renderScene={ this.renderScene.bind(this) }
        initialRoute={{name: 'HomePage'}}
      />
    );
  }
}

module.exports = Router;
