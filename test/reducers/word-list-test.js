import expect from 'expect'
import reducer from '../../app/reducers/word-list'
import * as types from '../../app/actions/action-types'
import definitions from '../fixtures/definitions'

describe('HomePage', () => {
  it('returns the initial state', () => {
    expect(reducer(undefined, {})).toEqual([])
  })
})
