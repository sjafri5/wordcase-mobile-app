import * as types from '../actions/action-types';

const initialState = {
  modalOpen: false,
  selectedWord: {}
}

export default function homePage(state = initialState, action = {}) {
  switch (action.type) {
    case types.toggleModal:
      return Object.assign({}, state, {
        modalOpen: !state.modalOpen,
      })
    default:
      return state;
  }
}
