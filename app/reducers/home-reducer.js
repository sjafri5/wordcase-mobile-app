import * as types from '../actions/action-types';

const initialState = {
  word: '',
  submitted: false,
  fetching: false,
  error: false,
  definition: ''
}

export default function homePage(state = initialState, action = {}) {
  switch (action.type) {
    case types.RECEIVE_WORD_INPUT:
      return Object.assign({}, state, {
        word: action.text,
      })
    case types.SUBMIT_WORD:
      return Object.assign({}, state, {
        submitted: true,
      })
    default:
      return state;
  }
}
