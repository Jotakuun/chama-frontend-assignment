import { actionsTypes } from './tasks.actions';

export const tasksInitialState = {
	byId: {},
	all: [],
	fetching: true
}

export default (state = tasksInitialState, action) => {
	switch (action.type) {
		case actionsTypes.INITIALIZE_TASKS: { 
			return { ...state, fetching: true }
		}
		case actionsTypes.INITIALIZE_TASKS_SUCCESS: { 
			return { ...state, all: action.payload.tasks, fetching: false }
		}
		case actionsTypes.CREATE_TASK: 
			return {...state}
		case actionsTypes.CREATE_TASK_SUCCESS: { 
			return {
				...state,
				all: [state.all, action.payload.task],
				byId: Object.assign({}, state.byId, {
					[action.payload.id]: action.payload.task
				})
			}
		}
		default:
			return state;
	}
}