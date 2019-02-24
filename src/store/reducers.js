import { combineReducers } from 'redux';
import { default as userReducer, userInitialState } from './user/user.reducers';
import { default as tasksReducer, tasksInitialState } from './tasks/tasks.reducers';

export const initialState = {
	user: userInitialState,
	tasks: tasksInitialState
}

export const reducer = combineReducers({
	user: userReducer,
	tasks: tasksReducer
});