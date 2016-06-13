import expect from 'expect'
import reducer from '../../app/reducers/home-page'
import * as types from '../../app/actions/action-types'

describe('HomePage', () => {
  it('returns the initial state', () => {
    expect(reducer(undefined, {})).toEqual(
          {
            word: '',
            submitted: false,
            fetching: false,
            error: false,
            definition: ''
          }
      )
  })

  it('handles SUBMIT_WORD', () => {
    expect(reducer(undefined, {type: types.SUBMIT_WORD})).toEqual(
          {
            word: '',
            definition: '',
            submitted: true,
            fetching: false,
            error: false
          }
      )
  });

  it('handles FETCH_DEFINITION', () => {
    expect(reducer(undefined, {type: types.FETCH_DEFINITION})).toEqual(
          {
            word: '',
            definition: '',
            submitted: false,
            fetching: true,
            error: false
          }
      )
  });

  it('handles RECEIVE_DEFINITION', () => {
    let action = {
      type: types.RECEIVE_DEFINITION,
      definition: 'this is a definition'
    }
    let initialState = {
      word: 'bobby',
      definition: '',
      submitted: true,
      fetching: true,
      error: false
    }

    expect(reducer(initialState, action)).toEqual(
        {
          word: 'bobby',
          definition: action.definition,
          submitted: true,
          fetching: false,
          error: false
        }
        )
  })
})
