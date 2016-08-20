import * as types from '../actions/action-types';

const initialState = {
  words: {},
  selectedWord: undefined
};

export default function wordList(state = initialState, action = {}) {
  switch (action.type) {
    case types.INITIALIZE_WORD_LIST:
      return Object.assign({}, state, {
        words: action.wordList,
      })
    default:
      return state;
  }
}
