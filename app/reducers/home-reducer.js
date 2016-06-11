import * as types from '../actions/action-types';

const initialState = {
  word: ''
}

export default function homePage(state = initialState, action = {}) {
  switch (action.type) {
    case types.RECEIVE_WORD_INPUT:
      return Object.assign({}, state, {
        word: action.text,
      })
    default:
      return state;
  }
}
