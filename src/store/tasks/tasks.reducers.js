import { actionsTypes } from './tasks.actions';

export const tasksInitialState = {
	all: []
}

export default (state = tasksInitialState, action) => {
	switch (action.type) {
		case actionsTypes.INITIALIZE_TASKS: { 
			return { ...state, all: action.payload }
		}
		default:
			return state;
	}
}