import { takeEvery, all } from 'redux-saga/effects';

import { actionsTypes as userActions } from './user/user.actions';
import * as userEffects from './user/user.effects';

function* rootSaga() {
	yield all([
		takeEvery(userActions.LOGIN, userEffects.login),
		takeEvery(userActions.LOGIN_ANONYMOUSLY, userEffects.loginAnonymously),
		takeEvery(userActions.SIGNUP, userEffects.signup),
		takeEvery(userActions.LOGOUT, userEffects.logout),
	])
}

export default rootSaga;