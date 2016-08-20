import expect from 'expect'
import reducer from '../../app/reducers/word-list'
import * as types from '../../app/actions/action-types'

describe('HomePage', () => {
  it('returns the initial state', () => {
    expect(reducer(undefined, {})).toEqual([])
  })

  it('handles INITIALIZE_WORD_LIST', () => {
    const action = {
      type: types.INITIALIZE_WORD_LIST,
      wordList: [1, 2, 3, 4, 5]
    }
    expect(reducer(undefined, action)).toEqual(action.wordList)
  })
})
