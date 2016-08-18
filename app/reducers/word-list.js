import * as types from '../actions/action-types';

const initialState = [];

export default function wordList(state = initialState, action = {}) {
  switch (action.type) {
    case types.RECEIVE_WORD_INPUT:
      return Object.assign({}, state, {
      })
    default:
      return state;
  }
}
