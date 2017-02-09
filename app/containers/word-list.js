'use strict';

import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect  } from 'react-redux';
import _ from 'underscore';


var GiftedListView = require('react-native-gifted-listview');
import { NavBar } from './../containers/require-containers';
import { Async } from '../utils/require-utils';
import { Container, LeadPanel, ModalContent } from '../components/index';
import NavigationBar from './navigation-bar';
import * as wordListActions from '../actions/word-list-actions';

import {
    View,
    Text,
    Modal,
    TouchableHighlight,
    Picker,
    UIManager
} from 'react-native'

UIManager.setLayoutAnimationEnabledExperimental && UIManager.setLayoutAnimationEnabledExperimental(true);

const mapStateToProps = (state) => {
  return {
    wordList: state.wordList,
    modal: state.modal
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    initializeWordList: (wordList)=>{
      dispatch(wordListActions.initializeWordList(wordList))
    },
    toggleModal: ()=>{
      dispatch(wordListActions.toggleModal())
    },
    displayWord: (word)=>{
      dispatch(wordListActions.displayWord(word))
    }
  }
}

const Styles = {
  separator: {
    height: 1, 
    backgroundColor: '#ccc'
  },
}

class WordList extends Component {

  componentWillMount(){
    let { initializeWordList } = this.props;

    Async.fetchWordList().then((response)=>{
      let wordList = JSON.parse(response)
      initializeWordList(wordList)
    })
  }
  
  renderWords(){
    let { wordList } = this.props
    let words = Object.keys(wordList.words).sort();
    return _.map(words, (word) => {
      return <Picker.Item label={word} value={word} />
    })
  }

  _onFetch(page = 1, callback, options) {
    Async.fetchWordList().then((response)=>{
      let wordList = JSON.parse(response)
      console.log('wordlist', wordList);
      let words = Object.keys(wordList);
      callback(words);
      //initializeWordList(wordList)
    })
  }

  renderScroll(){
    const { subTransaction } = this.props;

    return <View style={Styles.container}>
      <View style={Styles.navBar} />
      <GiftedListView
        rowView={this._panel.bind(this)}
        onFetch={this._onFetch}
        firstLoader={true} // display a loader for the first fetching
        pagination={false} // enable infinite scrolling using touch to load more
        refreshable={true} // enable pull-to-refresh for iOS and touch-to-refresh for Android
        withSections={false} // enable sections
        renderSeparator={this._renderSeparatorView}
        refreshableTintColor="blue"
      />
      </View> 
  };

  _panel(word){
    console.log('rowData', word);
    return <LeadPanel 
             leftContent={word} 
             onPress={(word) => this._openDefinition(word)}
           />
  };

  _openDefinition(word){
    const { toggleModal } = this.props;
    
    toggleModal();
    console.log('word ohm', word);
  }

  _renderSeparatorView(id) {
    return <View style={Styles.separator} />
  };

  renderModal(){
    return (
        <Modal
          animationType={"fade"}
          transparent={true}
          visible={this.props.modal.modalOpen}
          onRequestClose={() => {alert("Modal has been closed.")}}
          >
          <ModalContent onCancel={false} />
        </Modal>
    );
  }

  render(){
    let { navigator, wordList, displayWord } = this.props;
    let { words, selectedWord } = wordList;
    let definition;
    console.log('worsadfasdfasfdasfasfd', this.props.modal);

    if (words[selectedWord] instanceof Array) {
      definition = words[selectedWord][0].definition
    }

    return (
      <Container layoutType={'type3'} sideMargins={false}>
        <View>
          { this.renderModal() }
          {this.renderScroll()}
        </View>
        <NavigationBar navigator={navigator} currentScene={'Dashboard'} />
      </Container>
    )
  }
}
module.exports = connect(
                   mapStateToProps,
                   mapDispatchToProps
                 )(WordList);
