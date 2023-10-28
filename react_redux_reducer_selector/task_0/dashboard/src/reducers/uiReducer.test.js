// reducers/uiReducer.test.js

import uiReducer from './uiReducer';
import * as actionTypes from '../actions/uiActionTypes';

describe('uiReducer', () => {
  it('debería devolver el estado inicial cuando no se pasa ninguna acción', () => {
    const initialState = {
      isNotificationDrawerVisible: false,
      isUserLoggedIn: false,
      user: {},
    };
    const action = {};
    const state = uiReducer(undefined, action);
    expect(state).toEqual(initialState);
  });

  it('debería devolver el estado inicial cuando se pasa la acción SELECT_COURSE', () => {
    const initialState = {
      isNotificationDrawerVisible: false,
      isUserLoggedIn: false,
      user: {},
    };
    const action = { type: actionTypes.SELECT_COURSE };
    const state = uiReducer(initialState, action);
    expect(state).toEqual(initialState);
  });

  it('debería establecer isNotificationDrawerVisible en true cuando se pasa la acción DISPLAY_NOTIFICATION_DRAWER', () => {
    const initialState = {
      isNotificationDrawerVisible: false,
      isUserLoggedIn: false,
      user: {},
    };
    const action = { type: actionTypes.DISPLAY_NOTIFICATION_DRAWER };
    const state = uiReducer(initialState, action);
    expect(state.isNotificationDrawerVisible).toBe(true);
  });

  it('debería establecer isNotificationDrawerVisible en false cuando se pasa la acción HIDE_NOTIFICATION_DRAWER', () => {
    const initialState = {
      isNotificationDrawerVisible: true,
      isUserLoggedIn: false,
      user: {},
    };
    const action = { type: actionTypes.HIDE_NOTIFICATION_DRAWER };
    const state = uiReducer(initialState, action);
    expect(state.isNotificationDrawerVisible).toBe(false);
  });

  it('debería establecer isUserLoggedIn en true cuando se pasa la acción LOGIN_SUCCESS', () => {
    const initialState = {
      isNotificationDrawerVisible: false,
      isUserLoggedIn: false,
      user: {},
    };
    const action = { type: actionTypes.LOGIN_SUCCESS };
    const state = uiReducer(initialState, action);
    expect(state.isUserLoggedIn).toBe(true);
  });

  it('debería establecer isUserLoggedIn en false cuando se pasa la acción LOGIN_FAILURE', () => {
    const initialState = {
      isNotificationDrawerVisible: false,
      isUserLoggedIn: true,
      user: {},
    };
    const action = { type: actionTypes.LOGIN_FAILURE };
    const state = uiReducer(initialState, action);
    expect(state.isUserLoggedIn).toBe(false);
  });

  it('debería establecer isUserLoggedIn en false cuando se pasa la acción LOGOUT', () => {
    const initialState = {
      isNotificationDrawerVisible: false,
      isUserLoggedIn: true,
      user: {},
    };
    const action = { type: actionTypes.LOGOUT };
    const state = uiReducer(initialState, action);
    expect(state.isUserLoggedIn).toBe(false);
  });
});
