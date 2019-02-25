import { takeEvery, all } from 'redux-saga/effects';

import { actionsTypes as userActions } from './user/user.actions';
import * as userEffects from './user/user.effects';
import { actionsTypes as tasksActions } from './tasks/tasks.actions';
import * as tasksEffects from './tasks/tasks.effects';

function* rootSaga() {
	yield all([
		takeEvery(userActions.LOGIN, userEffects.login),
		takeEvery(userActions.LOGIN_ANONYMOUSLY, userEffects.loginAnonymously),
		takeEvery(userActions.SIGNUP, userEffects.signup),
		takeEvery(userActions.LOGOUT, userEffects.logout),

		takeEvery(tasksActions.INITIALIZE_TASKS, tasksEffects.initializeTasks),
		takeEvery(tasksActions.CREATE_TASK, tasksEffects.createTask),
		takeEvery(tasksActions.UPDATE_TASK, tasksEffects.updateTask),
		takeEvery(tasksActions.REMOVE_TASK, tasksEffects.removeTask),
	])
}

export default rootSaga;