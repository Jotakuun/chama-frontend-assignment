import { actionsTypes } from './user.actions';

export const userInitialState = {
	user: null,
	isLoading: false,
	error: null
}

export default (state = userInitialState, action) => {
	switch (action.type) {
		case actionsTypes.SIGNUP:
		case actionsTypes.LOGIN:
		case actionsTypes.LOGIN_ANONYMOUSLY:
			return { ...state, isLoading: true, error: null }

		case actionsTypes.INITIALIZE_WITH_USER:
		case actionsTypes.SIGNUP_SUCCESS:
		case actionsTypes.LOGIN_SUCCESS:
			return { ...state, isLoading: false, user: action.user }

		case actionsTypes.SIGNUP_FAILURE:
		case actionsTypes.LOGIN_FAILURE:
			return { ...state, isLoading: false, error: action.error }

		case actionsTypes.LOGOUT:
			return { ...state, user: null }

		default:
			return state
	}
}