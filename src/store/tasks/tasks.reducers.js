import { actionsTypes } from './tasks.actions';

export const tasksInitialState = {
	tasks: [],
	fetching: true
}

export default (state = tasksInitialState, action) => {
	switch (action.type) {
		case actionsTypes.INITIALIZE_TASKS: {
			return { ...state, fetching: true }
		}
		case actionsTypes.INITIALIZE_TASKS_SUCCESS: {
			return { ...state, tasks: action.payload.tasks, fetching: false }
		}
		case actionsTypes.CREATE_TASK:
			return { ...state }
		case actionsTypes.CREATE_TASK_SUCCESS: {
			return {
				...state,
				tasks: [...state.tasks, action.payload.task]
			}
		}
		case actionsTypes.UPDATE_TASK:
			return { ...state }
		case actionsTypes.UPDATE_TASK_SUCCESS: {
			return {
				...state,
				tasks: state.tasks.map((task) => {
					if (task.id !== action.payload.task.id) {
						return task;
					} else {
						return action.payload.task;
					}
				})
			}
		}
		case actionsTypes.REMOVE_TASK:
			return { ...state }
		case actionsTypes.REMOVE_TASK_SUCCESS: {
			return {
				...state,
				tasks: state.tasks.filter((task) => task.id !== action.payload.taskId),
			}
		}
		default:
			return state;
	}
}