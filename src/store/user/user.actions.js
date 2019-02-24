
export const actionsTypes = {
	INITIALIZE_WITH_USER: 'USER/INITIALIZE_WITH_USER',
	LOGIN: 'USER/LOGIN',
	LOGIN_ANONYMOUSLY: 'USER/LOGIN_ANONYMOUSLY',
	LOGIN_SUCCESS: 'USER/LOGIN_SUCCESS',
	LOGIN_FAILURE: 'USER/LOGIN_FAILURE',
	SIGNUP: 'USER/SIGNUP',
	SIGNUP_SUCCESS: 'USER/SIGNUP_SUCCESS',
	SIGNUP_FAILURE: 'USER/SIGNUP_FAILURE',
	LOGOUT: 'USER/LOGOUT'
}

export const actions = {
	initializeWithUser: (user) => ({ type: actionsTypes.INITIALIZE_WITH_USER, user}),
	login: (email, password) => ({ type: actionsTypes.LOGIN, payload: { email, password } }),
	loginAnonymously: () => ({ type: actionsTypes.LOGIN_ANONYMOUSLY }),
	signUp: (email, password) => ({ type: actionsTypes.SIGNUP, payload: { email, password } }),
	logOut: () => ({ type: actionsTypes.LOGOUT }),
}
