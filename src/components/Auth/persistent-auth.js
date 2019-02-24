function getUser() {
	return JSON.parse(localStorage.getItem('chama-user'));
}

function saveUser(user) {
	localStorage.setItem('chama-user', JSON.stringify(user));
}

function removeUserFromStorage() {
	localStorage.removeItem('chama-user');
}

export const PersistentAuth = {
	getUser: () => getUser(),
	saveUser: (user) => saveUser(user),
	removeUserFromStorage: () => removeUserFromStorage()
}