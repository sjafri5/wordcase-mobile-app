import * as types from '../actions/action-types';

const initialState = {
  modalOpen: false,
  selectedWord: {word: '', definition: undefined}
}

export default function homePage(state = initialState, action = {}) {
  switch (action.type) {
    case types.TOGGLE_MODAL:
      return Object.assign({}, state, {
        modalOpen: !state.modalOpen,
      })
    case types.DISPLAY_WORD:
      let updatedWord = Object.assign({}, state.selectedWord, {
        word: action.word,
        definition: action.definition
      })
      //let updatedWord = {}
      //updatedWord[action.word] = action.definition
      return Object.assign({}, state, {
        selectedWord: updatedWord
      })
    default:
      return state;
  }
}
