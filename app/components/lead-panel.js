import React, { Component } from 'react';
import Colors from '../stylesheets/colors';
import Icon from 'react-native-vector-icons/FontAwesome';

import {
  View,
  Text,
  TouchableHighlight,
  StyleSheet,
  PixelRatio
} from 'react-native';

const Styles = StyleSheet.create({
  checkBoxContainer: {
    alignItems: 'flex-start',
    justifyContent: 'center', 
    marginRight: 15,
  },
  panelText:{
    fontSize: 14
  },
  rightViewContent: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  },
  transactionsAmountText:{
    marginRight: 6.5
  },
  transactionPanel: {
    height: 50,
    justifyContent: 'center',
    padding: 5,
  },
  selectableRow: {
    flex: 1,
    flexDirection: 'row',
  },
  splitViewLeft: {
    alignItems: 'flex-start',
    justifyContent: 'center',
    marginLeft: 5,
    flex: 0.5,
  },
  splitViewRight: {
    alignItems: 'flex-end',
    justifyContent: 'center',
    marginRight: 5,
    flex: 0.5,
  },
  textGeneral: {
    fontFamily: 'SourceSansPro-Regular',
    color: Colors.white
  },
})

class LeadPanel extends Component {
  constructor(props){
    super(props);
  }

  renderRightArrow(){
    return <Icon name={'angle-right'} size={18} color="white" style={Styles.icon}/>
  }

  render() {
    let { leftContent, rightContent, onPress, transaction, selectable, isGifted } = this.props;
    return (
      <TouchableHighlight
       onPress={() => onPress(leftContent)}
       underlayColor={'transparent'}
       style={[Styles.transactionPanel, !isGifted && Styles.panelBorder]}
      >
        <View style={Styles.selectableRow}>
          { selectable ? this.renderCheckBox() : null }
          <View style={Styles.splitViewLeft}>
            <Text
              numberOfLines={1}
              style={[Styles.textGeneral, Styles.panelText]}>
                { leftContent }
            </Text>
          </View>
          <View style={Styles.splitViewRight}>
            { this.renderRightArrow() }
          </View>
        </View>
      </TouchableHighlight>
    );
  }
}

module.exports = LeadPanel;
