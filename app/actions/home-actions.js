import * as types from './action-types';

export function receiveWordInput(text) {
      console.log('2', );
  return {
    type: types.RECEIVE_WORD_INPUT,
    text
  };
};
