import { call, put } from 'redux-saga/effects';
import { actionsTypes } from './tasks.actions';
import { FirebaseAPI } from '../../firebase/firebase-api';

export function* initializeTasks() {
	try {
		const response = yield call(FirebaseAPI.getDatabaseSnapshot);
		yield put({ type: actionsTypes.INITIALIZE_TASKS_SUCCESS, payload: { tasks: response } });
	} catch (error) {
		yield put({ type: actionsTypes.INITIALIZE_TASKS_FAILURE, payload: { error } });
	}
}

export function* createTask(action) {
	try {
		const response = yield call(FirebaseAPI.createTask, action.payload);
		yield put({ type: actionsTypes.CREATE_TASK_SUCCESS, payload: { task: response } });
	} catch (error) {
		yield put({ type: actionsTypes.CREATE_TASK_FAILURE, payload: { error } });
	}
}

export function* updateTask(action) {
	try {
		const response = yield call(FirebaseAPI.updateTask, action.payload);
		yield put({ type: actionsTypes.UPDATE_TASK_SUCCESS, payload: { task: response } });
	} catch (error) {
		yield put({ type: actionsTypes.UPDATE_TASK_FAILURE, payload: { error } });
	}
}

export function* removeTask(action) {
	try {
		const response = yield call(FirebaseAPI.removeTask, action.payload);
		yield put({ type: actionsTypes.REMOVE_TASK_SUCCESS, payload: { taskId: response } });
	} catch (error) {
		yield put({ type: actionsTypes.UPDATE_TASK_FAILURE, payload: { error } });

	}
}
