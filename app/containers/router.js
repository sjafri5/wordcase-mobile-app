import React, { Component } from 'react';
import {
  Navigator,
  StyleSheet,
  Image
} from 'react-native';

import { HomePage, WordList, Quiz } from './index'

class Router extends Component {
  renderScene(route, navigator){
    switch (route.name) {
    case 'HomePage':
      return <HomePage navigator={ navigator } />;
    case 'WordList':
      return <WordList navigator={ navigator } />;
    case 'Quiz':
      return <Quiz navigator={ navigator } />;
    }
  }
  render() {
    return (
      <Image source={require('../images/bg_gradient.png')} resizeMode={'stretch'} style={Styles.imageContainer}>
      <Navigator
        debugOverlay={false}
        renderScene={ this.renderScene.bind(this) }
        initialRoute={{name: 'WordList'}}
      />
      </Image>
    );
  }
}

const Styles = StyleSheet.create({
  imageContainer: {
    flex: 1,
    margin: -2,
    width: null,
    height: null
  }
})

module.exports = Router;
