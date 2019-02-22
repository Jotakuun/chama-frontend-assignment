import { takeEvery } from 'redux-saga/effects';
import { actionsTypes as userActions } from './user/user.actions';
import { userEffects } from './user/user.effects';

export default function* rootSaga() {
	yield [
		takeEvery(userActions.LOGIN, userEffects.login),
	]
}