import * as types from '../actions/action-types';

const initialState = {
  words: {},
  selectedWord: undefined
};

export default function wordList(state = initialState, action = {}) {
  switch (action.type) {
    case types.INITIALIZE_WORD_LIST:
      words = Object.keys(action.wordList)
      return Object.assign({}, state, {
        words: action.wordList,
        selectedWord: words[0]
      })
    case types.DISPLAY_WORD:
      return Object.assign({}, state, {
        selectedWord: action.word,
      })
    default:
      return state;
  }
}
