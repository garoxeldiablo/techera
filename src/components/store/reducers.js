// src/reducers.js
import { combineReducers } from 'redux';

// Actions
const LOGIN = 'LOGIN';
const LOGOUT = 'LOGOUT';

// Action Creators
// Action Creators
export const login = (token) => ({ type: LOGIN, payload: {token} });
export const logout = () => ({ type: LOGOUT });

// Initial State
const initialState = {
  isAuthenticated: false,
  token: null,
};

// Auth Reducer
const authReducer = (state = initialState, action) => {
  switch (action.type) {
    case LOGIN:
      return { ...state, isAuthenticated: true, token:action.payload };
    case LOGOUT:
      return { ...state, isAuthenticated: false, token:null };
    default:
      return state;
  }
};

// Root Reducer
const rootReducer = combineReducers({
  auth: authReducer,
});

export default rootReducer;
