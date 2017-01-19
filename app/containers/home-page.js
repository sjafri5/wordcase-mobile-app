import React, { Component } from 'react';
import { connect  } from 'react-redux';

import { Container, Button } from '../components/index';
import NavigationBar from './navigation-bar';
import { Api, Async, RandomWords } from '../utils/require-utils';

import globalStyles from '../stylesheets/global-styles';
import Colors from '../stylesheets/colors';
import ProgressBar from 'ProgressBarAndroid';
import _ from 'underscore';
import dismissKeyboard from 'dismissKeyboard';


import * as homeActions from '../actions/home-actions';
import * as wordActions from '../actions/word-actions';

import {
  Text,
  TextInput,
  View,
  AsyncStorage,
  ActionAlert,
  ToastAndroid,
  ScrollView,
  StyleSheet
} from 'react-native';

const mapStateToProps = (state) => {
  return {
    homePage: state.homePage
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    receiveWordInput: (text)=>{
      dispatch(homeActions.receiveWordInput(text))
    },
    submitWord: ()=>{
      dispatch(homeActions.submitWord())
    },
    fetchDefinition: ()=>{
      dispatch(homeActions.fetchDefinition())
    },
    receiveDefinition: (definitions)=>{
      dispatch(homeActions.receiveDefinition(definitions))
    },
    resetWordBox: ()=>{
      dispatch(wordActions.resetWordBox())
    }
  }
}

class Dashboard extends Component {
  constructor(props) {
    super(props);
  };

  handleWordInput(event){
    let { receiveWordInput } = this.props;
    receiveWordInput(event.nativeEvent.text);
  };

  componentWillMount(){
    let randomWord = _.sample(RandomWords)

    this.setState({
      randomWord
    })

  }

  handleSubmit(){
    let { clearTextField, homePage, submitWord, fetchDefinition, receiveDefinition } = this.props;
    dismissKeyboard();

    submitWord();
    fetchDefinition();
    Api.getDefinition(homePage.wordInputField).then((response)=>{
      console.log('response?', response);
      receiveDefinition(response);
    }).catch(error => {
      console.log('---------', error);
    })
  }

  renderDefinitions() {
    let { fetching, submitted, submittedWord, definitions } = this.props.homePage;
    if (fetching){
      return (
        <View style={Styles.definitionsContainer}>
          <ProgressBar />
        </View>
      );
    }
    else if (submitted) {
      return (
        <ScrollView style={Styles.definitionsContainer}>
          <View style={Styles.wordBox}>
            <Text style={[Styles.textGeneral, Styles.submittedWord]}>
              {submittedWord}:
            </Text>
            <View>
              {this._renderDefinition()}
            </View>
          </View>
          <View>
            {this._renderButtons()}
          </View>
        </ScrollView>
      )
    }
  }
  
  _renderButtons(){
    return (
      <View style={Styles.dualButtonContainer}>
        <View style={Styles.firstBtnContainer}>
          <Button text='Discard' whenTapped={this.handleDiscard.bind(this)}/>
        </View>
        <View style={Styles.secondBtnContainer}>
          <Button text='Keep' whenTapped={this.handleKeep.bind(this)}/>
        </View>
      </View>
    )
  }

  handleKeep(){
    let { homePage, resetWordBox } = this.props;
    let word = {}
    word[homePage.submittedWord] = homePage.definitions.slice(0,2);
    Async.cacheWord(word).then(()=>{
      let message = `'${homePage.submittedWord}' has been successfully stored.`
      ToastAndroid.show(message, ToastAndroid.SHORT)
    })
    resetWordBox()
  }

  handleDiscard(){
    let { resetWordBox, homePage} = this.props;
    resetWordBox()
    let message = `'${homePage.submittedWord}' has been discarded.`
    ToastAndroid.show(message, ToastAndroid.SHORT)
  }

  _renderDefinition(){
    let { definitions } = this.props.homePage

    return _.map(definitions.slice(0,2), (definition) => {
      return (
        <View style={Styles.definitionContainer}>
          <Text style={[Styles.textGeneral, Styles.definitionText]}>
            -- {definition.definition}
          </Text>
          
          {this._renderSynonyms(definition)}
        </View>
      );
    });
  };

  _renderSynonyms(definition){
    if (definition.synonyms) {
      return (
        <Text style={[Styles.textGeneral, Styles.definitionText]}>
          Synonyms: {definition.synonyms.join(", ")}
        </Text>
      )
    }
  }

  renderForm(){
    const { homePage, navigator } = this.props;
    const { randomWord } = this.state;

    return (
      <View style={Styles.foo}>
        <View style={Styles.inputContainer}>
          <Text style={Styles.textGeneral}>
            Lookup a word:
          </Text>
          <TextInput
            style={Styles.inputField}
            placeholder={ 'e.g. ' + randomWord }
            placeholderTextColor='white'
            underlineColorAndroid='white'
            value={homePage.wordInputField}
            onSubmitEditing= {this.handleSubmit.bind(this) }
            onChange= {this.handleWordInput.bind(this) }
            returnKeyType='search'
          />
        </View>

        <Button
          name={'Define'}
          type={'buttonSecondary'}
          onPress={ this.handleSubmit.bind(this)}
          />
      </View>
    )
  };

  render() {
    let { homePage, navigator } = this.props;

    return (
      <Container layoutType={'type3'}>
        <View>
          {this.renderForm()}
          {this.renderDefinitions()}
        </View>
        <NavigationBar navigator={navigator} currentScene={'Dashboard'} />
      </Container>
    );
  }
}

module.exports = connect(
                   mapStateToProps,
                   mapDispatchToProps
                 )(Dashboard);


const Styles = StyleSheet.create(
    Object.assign({}, globalStyles, {
      container: {
        flex: 1,
      },
      inputField: {
        color: 'white'
      },
      inputContainer: {
        marginTop: 20,
        marginBottom: 30,
      },
      header: {
        marginBottom: 10,
        color: Colors.buttonBlue,
        fontSize: 17,
        fontFamily: 'Roboto Bold',
        fontWeight: 'bold'
      },
      submittedWord: {
        marginTop: 10,
        marginBottom: 10,
        marginLeft: 15,
        fontSize: 25,
        fontFamily: 'Roboto Bold',
        fontWeight: 'bold'
      },
      definitionText: {
        marginBottom: 10,
        fontSize: 15,
        fontFamily: 'Roboto Bold',
      },
      wordBox: {
        borderColor: 'white',
        borderWidth: 2,
        backgroundColor: 'transparent',
      },
      definitionsContainer: {
        marginTop: 20,
        marginBottom: 30,
      },
      definitionContainer: {
        marginBottom: 25,
        marginLeft: 15,
        marginRight: 15,
      },
      dualButtonContainer: {
        marginTop: 15,
        marginBottom: 15,
        flex: 1,
        flexDirection: 'row'
      },
      firstBtnContainer: {
        flex: 0.5,
        alignSelf: 'flex-start'
      },
      secondBtnContainer: {
        flex: 0.5,
        alignSelf: 'flex-end'
      },
    })
);
