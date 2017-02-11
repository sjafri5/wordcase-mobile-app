import * as types from './action-types';

export function initializeWordList(wordList) {
  return {
    type: types.INITIALIZE_WORD_LIST,
    wordList 
  };
};

export function displayWord(word, definition) {
  return {
    type: types.DISPLAY_WORD,
    word,
    definition
  };
};

export function toggleModal() {
  return {
    type: types.TOGGLE_MODAL
  };
};
