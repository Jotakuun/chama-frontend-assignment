
export const actionsTypes = {
	LOGIN: 'USER/LOGIN',
	LOGIN_SUCCESS: 'USER/LOGIN_SUCCESS',
	LOGIN_FAILURE: 'USER/LOGIN_FAILURE',
	SIGNUP: 'USER/SIGNUP',
	SIGNUP_SUCCESS: 'USER/SIGNUP_SUCCESS',
	SIGNUP_FAILURE: 'USER/SIGNUP_FAILURE',
	LOGOUT: 'USER/LOGOUT'
}

export const actions = {
	login: (email, password) => ({type: actionsTypes.LOGIN, email, password}),
	signUp: (email, password) => ({type: actionsTypes.SIGNUP, email, password}),
	logOut: () => ({type: actionsTypes.LOGOUT}),
}
