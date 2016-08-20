import * as types from './action-types';

export function initializeWordList(wordList) {
  return {
    type: types.INITIALIZE_WORD_LIST,
    wordList 
  };
};

export function displayWord(word) {
  return {
    type: types.DISPLAY_WORD,
    word  
  };
};
