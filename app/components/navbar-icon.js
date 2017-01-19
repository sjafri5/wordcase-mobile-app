import React, { Component } from 'react';
import { Text, View, TouchableOpacity, StyleSheet } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import globalStyles from '../stylesheets/global-styles'

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

class NavbarIcon extends Component {
  constructor(props){
    super(props);
  }

  static propTypes(){
    return {
      iconName: PropTypes.string.isRequired,
      onPress: PropTypes.func,
    }
  };

  onPress(){
    this.props.onPress(this.props.label)
  };

  render() {
    const { label, iconName, onPress} = this.props;
    return (
      <TouchableOpacity onPress={this.onPress.bind(this)} style={Styles.touchableContainer}>
        <View style={Styles.iconContainer}>
          <Icon name={iconName} size={18} color="white" />
        </View>
        <View style={Styles.iconTextContainer}>
          <Text style={[Styles.textGeneral, Styles.fontSize14]}>
            {label}
          </Text>
        </View>
      </TouchableOpacity>
    );
  }
}

module.exports = NavbarIcon;
