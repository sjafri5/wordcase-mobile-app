'use strict';

import React from 'react-native';
import { bindActionCreators } from 'redux';
import { connect  } from 'react-redux';
import _ from 'underscore';

import Styles from '../stylesheets/nav-bar-styles';
import Api from '../utils/api'
import Async from '../utils/async';

import NavBarButton from '../components/nav-bar-button';

import * as navBarActions from '../actions/nav-bar-actions';

import TimerMixin from 'react-timer-mixin';
const {
    View,
    Text,
    Image,
    TouchableHighlight,
    InteractionManager,
    TouchableWithoutFeedback,
    LayoutAnimation,
    UIManager
} = React;

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

var NavBar= React.createClass({
  mixins: [TimerMixin],
  componentWillMount() {
    LayoutAnimation.spring();
  },
  handleMenuTap: function(){
    let { tapMenuIcon } = this.props;
    LayoutAnimation.spring();
    tapMenuIcon();
  },
  handleLogout: function(){
    let { navigator, closeMenu } = this.props;

    Async.signOut().then(function(res){
      navigator.resetTo({
        name: 'Login'
      })
    });
    closeMenu();
  },
  handleSalesSummary: function(){
    let { navigator, closeMenu } = this.props;
    let routes = navigator.getCurrentRoutes();
    if (!(_.last(routes).name == 'SalesSummary')) {
      closeMenu();
      this.pushStack('SalesSummary');
    }
    else {
      closeMenu();
    }
  },
  handleRefresh: function(){
    let { navigator, currentUser, receiveCurrentUser, closeMenu } = this.props;

    Api.currentUser(currentUser.accessToken).then(function(res){
      receiveCurrentUser(res.current_user);
      Async.cacheCurrentUser(res.current_user, currentUser.date)
      closeMenu();
    }).catch(function(err){
      console.log('Splash Error', err);
      //receiveCurrentUserError(err.message);
    });
  },
  handleClientDirectory: function(){
    let { navigator, closeMenu } = this.props;

    let routes = navigator.getCurrentRoutes();
    if (!(_.last(routes).name == 'ClientDirectory')) {
      closeMenu();
      this.pushStack('ClientDirectory');
    }
    else {
      closeMenu();
    }
  },
  pushStack: function(stackName){
    let { navigator } = this.props;

    this.requestAnimationFrame(() => {
      navigator.push({
        name: stackName
      })
    });
  },
  handleTransactions: function(){
    let { navigator, closeMenu, tapMenuIcon, resetCustomerForm, resetCurrentSale } = this.props;
    let routes = navigator.getCurrentRoutes();

    if ((_.last(routes).name == 'SalesPage') || (_.last(routes).name == 'EditSalesPage')) {
      closeMenu();
      resetCustomerForm();
      resetCurrentSale();
      this.pushStack('TransactionsIndex');
    }
    else if (!(_.last(routes).name == 'TransactionsIndex')) {
      closeMenu();
      this.pushStack('TransactionsIndex');
    }
    else {
      closeMenu();
    }
  },
  renderButtons: function(){
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
  },
  render: function(){
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
              onPress={ this.handleMenuTap }
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
});

module.exports = connect(
                   mapStateToProps,
                   mapDispatchToProps
                 )(NavBar);
