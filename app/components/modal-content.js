import React, { Component } from 'react';
//import modalStyles from '../stylesheets/modal-styles'
//import Styles from '../stylesheets/dashboard-styles'
import Button from './button'
import Colors from '../stylesheets/colors'


import {
  View,
  Text,
  TouchableHighlight,
  StyleSheet
} from 'react-native';

const modalStyles = StyleSheet.create({
  outerContainer: {
    flex: 1,
    justifyContent: 'center',
    padding: 20,
  },
  innerContainer: {
    height: 400,
  },
  textContainer: {
    marginBottom: 20
  },
  modalHeaderContainer:{
    marginBottom: 10
  },
  modalSubheaderContainer:{
  },
  paragraph1: {
    flex: 0.15,
    paddingBottom: 20
  },
  paragraph2: {
    flex: 0.35,
  },
  paragraph3: {
    flex: 0.4,
  },
  modalSubheader: {
    fontFamily: 'SourceSansPro-Regular',
    color: Colors.DarkGray,
    fontSize: 20
  },
  paragraphSpacing: {
    marginTop: 20,
  },
  modalHeader: {
    fontFamily: 'SourceSansPro-Regular',
    color: Colors.MidGray,
    fontSize: 24
  },
  textGeneral: {
    fontFamily: 'SourceSansPro-Regular',
  },
  buttonContainer: {
    justifyContent: 'flex-end',
    alignSelf: 'stretch',
    flex: 0.5,
  },
  modalBackgroundStyle: {
   backgroundColor: 'rgba(255, 255, 255, 0.4)'
  },
  innerContainerTransparentStyle: {
    backgroundColor: 'white', 
    padding: 20
  }
})

class ModalContent extends Component {
  render() {
    let { onCancel } = this.props;
    return (
        <View style={[modalStyles.outerContainer, modalStyles.modalBackgroundStyle]}>
          <View style={[modalStyles.innerContainer, modalStyles.innerContainerTransparentStyle]}>
            <View style={[modalStyles.textContainer, modalStyles.paragraph2]}>
              <View style={modalStyles.modalHeaderContainer}>
                <Text style={[modalStyles.textGeneral, modalStyles.modalHeader]}>
                  My Word
                </Text>
              </View>
              <View style={modalStyles.modalSubheaderContainer}>
                <Text style={[modalStyles.textGeneral, modalStyles.modalSubheader]}>
                  This is the main definition of the word.
                </Text>
              </View>
            </View>
            <View style={modalStyles.buttonContainer}>
              <Button
                name={'Ok'}
                type={'buttonPrimary'}
                onPress={onCancel}
                />
            </View>
          </View>
        </View>
    );
  }
}

module.exports = ModalContent;
