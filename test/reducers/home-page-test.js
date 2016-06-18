import expect from 'expect'
import reducer from '../../app/reducers/home-page'
import * as types from '../../app/actions/action-types'
import definitions from '../fixtures/definitions'

describe('HomePage', () => {
  it('returns the initial state', () => {
    expect(reducer(undefined, {})).toEqual(
        {
          wordInputField: '',
          submitted: false,
          submittedWord: '',
          fetching: false,
          error: false,
          definitions: []
        }
        )
  })

  it('handles SUBMIT_WORD', () => {
    let initialState = {
      wordInputField: 'bobby',
      definitions: [],
      submittedWord: '',
      submitted: true,
      fetching: false,
      error: false
    }
    expect(reducer(initialState, {type: types.SUBMIT_WORD})).toEqual(
        {
          wordInputField: '',
          submittedWord: '',
          definitions: [],
          submitted: true,
          fetching: false,
          error: false
        }
        )
  });

  it('handles FETCH_DEFINITION', () => {
    expect(reducer(undefined, {type: types.FETCH_DEFINITION})).toEqual(
        {
          wordInputField: '',
          submittedWord: '',
          definitions: [],
          submitted: false,
          fetching: true,
          error: false
        }
        )
  });

  it('handles RESET_WORD_BOX', () => {
    let initialState = {
      wordInputField: 'bobby',
      submittedWord: 'dick face',
      definitions: ['asdf'],
      submitted: true,
      fetching: true,
      error: false
    }

    expect(reducer(initialState, {type: types.RESET_WORD_BOX})).toEqual(
        {
          wordInputField: '',
          submitted: false,
          submittedWord: '',
          fetching: false,
          error: false,
          definitions: []
        }
        )
  });

  it('handles RECEIVE_DEFINITION', () => {
    let action = {
      type: types.RECEIVE_DEFINITION,
      definitions: definitions
    }
    let initialState = {
      wordInputField: 'bobby',
      submittedWord: '',
      definitions: [],
      submitted: true,
      fetching: true,
      error: false
    }

    expect(reducer(initialState, action)).toEqual(
        {
          wordInputField: 'bobby',
          submittedWord: definitions.word,
          definitions: definitions.results,
          submitted: true,
          fetching: false,
          error: false
        }
        )
  })
})
