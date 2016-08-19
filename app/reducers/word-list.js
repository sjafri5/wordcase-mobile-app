import * as types from '../actions/action-types';

const initialState = [];

export default function wordList(state = initialState, action = {}) {
  console.log('stateeeeeeeeee', state);
  switch (action.type) {
    case types.INITIALIZE_WORD_LIST:
      // TODO: fix this ship 
      //return Object.assign({}, state, {
      //})
      return []
    default:
      return state;
  }
}
