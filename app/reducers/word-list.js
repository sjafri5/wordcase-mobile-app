import * as types from '../actions/action-types';

const initialState = [];

export default function wordList(state = initialState, action = {}) {
  switch (action.type) {
    case types.INITIALIZE_WORD_LIST:
      return action.wordList
    default:
      return state;
  }
}
