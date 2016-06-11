import * as types from './action-types';

export function receiveWordInput(text) {
  return {
    type: types.RECEIVE_WORD_INPUT,
    text
  };
};
