'use strict';

import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect  } from 'react-redux';
import _ from 'underscore';

import Styles from '../stylesheets/nav-bar-styles';
import Api from '../utils/api'
import Async from '../utils/async';

import NavBarButton from '../components/nav-bar-button';

import * as navBarActions from '../actions/nav-bar-actions';

import TimerMixin from 'react-timer-mixin';

import {
    View,
    Text,
    Image,
    TouchableHighlight,
    InteractionManager,
    TouchableWithoutFeedback,
    LayoutAnimation,
    UIManager
} from 'react-native'

UIManager.setLayoutAnimationEnabledExperimental && UIManager.setLayoutAnimationEnabledExperimental(true);

const mapStateToProps = (state) => {
  return {
    currentUser: state.currentUser,
    navBar: state.navBar
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    receiveCurrentUser: (currentUser)=>{
      dispatch(currentUserActions.receiveCurrentUser(currentUser))
    },
    tapMenuIcon: ()=>{
      console.log('1');
      dispatch(navBarActions.tapMenuIcon())
    },
    closeMenu: ()=>{
      dispatch(navBarActions.closeMenu())
    },
    resetCurrentSale: ()=>{
      dispatch(currentSaleActions.resetCurrentSale())
    },
    resetCustomerForm: ()=>{
      dispatch(customerFormActions.resetCustomerForm())
    }
  }
}

class NavBar extends Component {
  constructor(props) {
    super(props);
  }
  mixins: [TimerMixin]

  componentWillMount() {
    LayoutAnimation.spring();
  }
  handleMenuTap(){
    console.log('0', this.props);
    let { tapMenuIcon } = this.props;
    LayoutAnimation.spring();
    tapMenuIcon();
  }
  handleClientDirectory(){
    let { navigator, closeMenu } = this.props;

    let routes = navigator.getCurrentRoutes();
    if (!(_.last(routes).name == 'ClientDirectory')) {
      closeMenu();
      this.pushStack('ClientDirectory');
    }
    else {
      closeMenu();
    }
  }
  pushStack(stackName){
    let { navigator } = this.props;

    this.requestAnimationFrame(() => {
      navigator.push({
        name: stackName
      })
    });
  }
  renderButtons(){
    return <View>
      <TouchableHighlight
        onPress={this.handleTransactions}
        style= {Styles.navBarPanel}>
        <View>
        <NavBarButton name={'Home'}/>
        </View>
      </TouchableHighlight>
      <TouchableHighlight
        onPress={this.handleRefresh}
        style= {Styles.navBarPanel}>
        <View>
        <NavBarButton name={'Word List'}/>
        </View>
      </TouchableHighlight>
      <TouchableHighlight
        onPress={this.handleLogout}
        style= {Styles.navBarPanel}>
        <View>
          <NavBarButton name={'Quiz'}/>
        </View>
      </TouchableHighlight>
    </View>
  }
  render(){
    let { navBar } = this.props;
    return (
      <View>
        <View style={Styles.menuIconContainer}>
          <View style={Styles.menuIconButton2}>
            <Text>
              Word Case
            </Text>
          </View>
          <View style={Styles.menuIconButton}>
            <TouchableWithoutFeedback
              onPress={ this.handleMenuTap.bind(this) }
            >
              <Image 
                style={Styles.menuIconImage}
                resizeMode='stretch'
                source={require('../images/icon-menu.png')} />
            </TouchableWithoutFeedback>
          </View>
        </View>
        <View style={[Styles.menuBase, navBar.expanded && Styles.menuExpanded]}>
          { navBar.expanded ? this.renderButtons() : null } 
        </View>
      </View>
    )
  }
}

module.exports = connect(
                   mapStateToProps,
                   mapDispatchToProps
                 )(NavBar);
