import * as types from '../actions/action-types';

const initialState = {
  wordInputField: '',
  submittedWord: '',
  submitted: false,
  fetching: false,
  error: false,
  definitions: []
}

export default function homePage(state = initialState, action = {}) {
  switch (action.type) {
    case types.RECEIVE_WORD_INPUT:
      return Object.assign({}, state, {
        wordInputField: action.text,
      })
    case types.SUBMIT_WORD:
      return Object.assign({}, state, {
        wordInputField: '',
        submitted: true
      })
    case types.FETCH_DEFINITION:
      return Object.assign({}, state, {
        fetching: true
      })
    case types.RECEIVE_DEFINITION:
      return Object.assign({}, state, {
        definitions: action.definitions.results,
        submittedWord: action.definitions.word,
        fetching: false
      })
    case types.RESET_WORD_BOX:
      return Object.assign({}, state, {
        wordInputField: '',
        submittedWord: '',
        submitted: false,
        fetching: false,
        error: false,
        definitions: []
      })
    default:
      return state;
  }
}
