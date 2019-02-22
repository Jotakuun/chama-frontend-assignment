import { call, put } from 'redux-saga/effects';
import { actionsTypes } from './user.actions';

function fetchUser(email) {
	return 'ok';
}

export function* login(action) {
	try {
	   const user = yield call(fetchUser, action.payload.email);
	   yield put({type: actionsTypes.LOGIN_SUCCESS, user: user});
	} catch (e) {
	   yield put({type: actionsTypes.LOGIN_FAILURE, message: e.message});
	}
 }

 export const userEffects = {
	 login: (action) => login(action) 
 }