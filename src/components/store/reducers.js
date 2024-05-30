// src/reducers.js
import { combineReducers } from 'redux';

// Actions
const LOGIN = 'LOGIN';
const LOGOUT = 'LOGOUT';

// Action Creators
export const login = () => ({ type: LOGIN });
export const logout = () => ({ type: LOGOUT });

// Initial State
const initialState = {
  isAuthenticated: false,
};

// Auth Reducer
const authReducer = (state = initialState, action) => {
  switch (action.type) {
    case LOGIN:
      return { ...state, isAuthenticated: true };
    case LOGOUT:
      return { ...state, isAuthenticated: false };
    default:
      return state;
  }
};

// Root Reducer
const rootReducer = combineReducers({
  auth: authReducer,
});

export default rootReducer;