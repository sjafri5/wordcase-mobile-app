import React, { Component } from 'react';
import { View, Text, TouchableHighlight, StyleSheet } from 'react-native';

const Styles = StyleSheet.create({
  mainContainer: {
    marginTop: 20,
    flex: 1,
    flexDirection:'column'
  },
  containerHeader: {
    flex: 1,
    flexDirection: 'row',
  },
  headerMargin: {
    marginBottom: 20,
  },
  containerBodyType2: {
    flex: 11,
  },
  containerBody: {
    flex: 10,
  },
  containerFooter: {
    flex: 1,
  },

});

class Container extends Component {
  renderType1(){
    // no topbar / no navbar
    return (
      <View style={Styles.mainContainer}>
        <View style={Styles.standardSideMargins}>
          { this.props.children }
        </View>
      </View>
    );
  }

  renderType2(){
    // topbar / no navbar
    return (
      <View style={Styles.mainContainer}>
        <View style={[Styles.containerHeader, Styles.headerMargin]}>
          { this.props.children[0] }
        </View>
        <View style={[Styles.containerBodyType2, Styles.standardSideMargins]}>
          { this.props.children[1] }
        </View>
      </View>
    );
  }

  renderType3(){
    // no topbar / navbar
    return (
      <View style={Styles.mainContainer}>
        <View style={[Styles.containerBodyType2, Styles.standardSideMargins]}>
          { this.props.children[0] }
        </View>
        <View style={Styles.containerFooter}>
          { this.props.children[1] }
        </View>
      </View>
    );
  }

  renderType4(){
    //  topbar / navbar

    return (
      <View style={Styles.mainContainer}>
        <View style={[Styles.containerHeader,  this.props.headerMargins && Styles.headerMargin]}>
          { this.props.children[0] }
        </View>
        <View style={Styles.containerBody}>
          { this.props.children[1] }
        </View>
        <View style={Styles.containerFooter}>
          { this.props.children[2] }
        </View>
      </View>
    );
  }

  render() {
    switch (this.props.layoutType) {
      case 'type1':
        return this.renderType1()
      case 'type2':
        return this.renderType2()
      case 'type3':
        return this.renderType3()
      case 'type4':
        return this.renderType4()
    }
  };
};

module.exports = Container;
