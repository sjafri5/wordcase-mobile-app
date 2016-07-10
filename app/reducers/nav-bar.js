import * as types from '../actions/action-types';

const initialState = {
  expanded: false
}

export default function navBar(state = initialState, action = {}) {
  switch (action.type) {
    case types.TAP_MENU_ICON:
      return Object.assign({}, state, {
        expanded: !state.expanded
      })
    case types.CLOSE_MENU:
      return Object.assign({}, state, {
        expanded: false
      })
    default:
      return state;
  }
}
