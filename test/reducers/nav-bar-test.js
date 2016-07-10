import expect from 'expect'
import reducer from '../../app/reducers/nav-bar'
import * as types from '../../app/actions/action-types'

describe('navBar', () => {
  it('should return the initial state', () => {
    expect(reducer(undefined, {})).toEqual(
      {
        expanded: false
      }
    )
  })

  describe('should handle TAP_MENU_ICON', () => {
    it('should turn expanded to false if currently true', () => {
      let action = { type: types.TAP_MENU_ICON}
      let initialState = { expanded: true }
      expect(reducer(initialState, action)).toEqual(
        {
          expanded: false
        }
      )
    })

    it('should turn expanded to true if currently false', () => {
      let action = { type: types.TAP_MENU_ICON}
      expect(reducer(undefined, action)).toEqual(
        {
          expanded: true 
        }
      );
    })
  });

  it('should handle CLOSE_MENU', () => {
    let action = { type: types.CLOSE_MENU}
    let initialState = {
      expanded: true 
    }
    expect(reducer(initialState, action)).toEqual(
      {
        expanded: false
      }
    )
  })
})
