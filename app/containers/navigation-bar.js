import React, { Component } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import globalStyles from '../stylesheets/global-styles';
import { NavbarIcon } from '../components/index';

const Styles = StyleSheet.create(Object.assign({}, globalStyles, {
  navbarContainer: {
    flex: 0.15,
    alignItems: 'center',
    flexDirection: 'column',
    justifyContent: 'center',
  },
  iconsContainer: {
    alignItems: 'center',
    flexDirection: 'column',
    justifyContent: 'center',
    flex: 1,
    flexDirection: 'row',
  },
  touchableContainer: {
    flex: 1,
    alignItems: 'center',
    flexDirection: 'column',
    justifyContent: 'center',
  },
  iconContainer: {
    flex: 1,
    justifyContent: 'flex-end',
  },
  navTextContainer: {
    justifyContent: 'center',
    alignSelf: 'stretch',
    flex: 1,
  },
  iconTextContainer: {
    flex: 1,
    justifyContent: 'flex-start',
  }
}));

class NavigationBar extends Component {
  _handlePress(label){
    if (label == this.props.currentScene ) return;
    else if (label == 'Search') {
      this._handleSceneChange('HomePage')
    }
    else if (label == 'Words') {
      this._handleSceneChange('WordList')
    }
    else if (label == 'Quiz') {
      this._handleSceneChange(label)
    }
  };

  _handleSceneChange(name) {
    this.props.navigator.resetTo({name: name})
  }

  render() {
    return (
      <View style={Styles.navbarContainer} >
        <View style={Styles.iconsContainer} >
          <NavbarIcon label={'Search'} iconName={'search'} onPress={(scene) => this._handlePress(scene)} />
          <NavbarIcon label={'Words'} iconName={'pencil'}  onPress={(scene) => this._handlePress(scene)} />
          <NavbarIcon label={'Quiz'} iconName={'cog'}  onPress={(scene) => this._handlePress(scene)} />
        </View>
      </View>
    );
  };
};

module.exports = NavigationBar;
