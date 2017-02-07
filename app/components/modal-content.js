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
    height: 200,
  },
  innerContainerDeleteAcct:{
    flexDirection: 'column',
    height: 430
  },
  innerContainerDeleteAcct:{
    flexDirection: 'column',
    height: 300
  },
  innerContainerInfoModal: {
    flexDirection: 'column',
    height: 500
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
          <View style={[modalStyles.innerContainerInfoModal, modalStyles.innerContainerTransparentStyle]}>
            <View style={[modalStyles.textContainer, modalStyles.paragraph1]}>
              <View style={modalStyles.modalSubheaderContainer}>
                <Text style={[modalStyles.textGeneral, modalStyles.modalSubheader]}>
                  Cash Tank asks you put your spending in one of two categories:
                </Text>
              </View>
            </View>
            <View style={[modalStyles.textContainer, modalStyles.paragraph2]}>
              <View style={modalStyles.modalHeaderContainer}>
                <Text style={[modalStyles.textGeneral, modalStyles.modalHeader]}>
                  Necessary
                </Text>
              </View>
              <View style={modalStyles.modalSubheaderContainer}>
                <Text style={[modalStyles.textGeneral, modalStyles.modalSubheader]}>
                  Bills and payments that don't feel optional
                </Text>
              </View>
            </View>
            <View style={[modalStyles.textContainer, modalStyles.paragraph3]}>
              <View style={modalStyles.modalHeaderContainer}>
                <Text style={[modalStyles.textGeneral, modalStyles.modalHeader]}>
                  Discretionary
                </Text>
              </View>
              <View style={modalStyles.modalSubheaderContainer}>
                <Text style={[modalStyles.textGeneral, modalStyles.modalSubheader]}>
                  Money you spend because you want to. Not because someone is telling you to. Coffee, movies, a third pair of jeans.
                </Text>
                <Text style={[modalStyles.textGeneral, modalStyles.modalSubheader, modalStyles.paragraphSpacing]}>
                  Ballpark guesses are just fine in Cash Tank.
                </Text>
              </View>
            </View>
            <View style={modalStyles.buttonContainer}>
              <Button
                name={'Will Do!'}
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
