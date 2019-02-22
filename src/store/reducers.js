import { combineReducers } from 'redux';
import { default as userReducer, userInitialState } from './user/user.reducers';

export const initialState = {
	user: userInitialState
}

export const reducer = combineReducers(
	{ user: userReducer }
);