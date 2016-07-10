import * as types from './action-types';

export function tapMenuIcon() {
  return {
    type: types.TAP_MENU_ICON,
  };
};

export function closeMenu() {
  return {
    type: types.CLOSE_MENU,
  };
};
