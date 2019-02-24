
export const actionsTypes = {
	CREATE_TASK: 'TASKS/CREATE_TASK',
	UPDATE_TASK: 'TASKS/UPDATE_TASK',
	REMOVE_TASK: 'TASKS/REMOVE_TASK',
	INITIALIZE_TASKS: 'TASKS/INITIALIZE_TASKS'
}

export const actions = {
	removeTask: (taskId) => ({ type: actionsTypes.REMOVE_TASK, payload: taskId }),
	createTask: (task) => ({ type: actionsTypes.CREATE_TASK, payload: task }),
	updateTask: (task) => ({ type: actionsTypes.UPDATE_TASK, payload: task }),
	initializeTasks: (tasks) => ({ type: actionsTypes.INITIALIZE_TASKS, payload: tasks }),
}
