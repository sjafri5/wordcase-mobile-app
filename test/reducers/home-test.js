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
  })
})
