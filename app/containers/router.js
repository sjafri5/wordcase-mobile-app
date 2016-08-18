import React, { Component } from 'react';
import {
  Navigator
} from 'react-native';

import HomePage from '../containers/home-page';
import WordList from '../containers/word-list';

class Router extends Component {
  renderScene(route, navigator){
    switch (route.name) {
    case 'HomePage':
      return <HomePage navigator={ navigator } />;
    case 'WordList':
      return <WordList navigator={ navigator } />;
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
