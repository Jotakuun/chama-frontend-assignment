import { call, put } from 'redux-saga/effects';
import { actionsTypes } from './user.actions';
import { FirebaseAPI } from '../../firebase-api';

export function* login(action) {
	try {
	   const user = yield call(FirebaseAPI.login, action.payload);
	   yield put({type: actionsTypes.LOGIN_SUCCESS, user: user});
	} catch (e) {
	   yield put({type: actionsTypes.LOGIN_FAILURE, message: e.message});
	}
 }
