import './utils/http';
import firebase from './firebase';

function login({ email, password }) {
	return new Promise((resolve, reject) => {
		firebase.auth().signInWithEmailAndPassword(email, password)
			.then((res) => {
				resolve(res);
			})
			.catch((error) => {
				reject(error);
			})
	});
}

function loginAnonymously() {
	return new Promise((resolve, reject) => {
		firebase.auth().signInAnonymously()
			.then((res) => {
				resolve(res);
			})
			.catch((error) => {
				reject(error);
			})
	});
}

function getCurrentUser() {
	return new Promise((resolve, reject) => {
		firebase.auth().onAuthStateChanged((user) => {
			console.log('user', user)
			if (user) {
				resolve(user);
			} else reject();
		});
	});
} 

function signup({ email, password }) {
	return new Promise((resolve, reject) => {
		firebase.auth().createUserWithEmailAndPassword(email, password)
			.then((res) => {
				resolve(res);
			})
			.catch((error) => {
				reject(error);
			})

	});
}

function signout() {
	return new Promise((resolve, reject) => {
		firebase.auth().signOut()
			.then((res) => {
				resolve(res);
			})
			.catch((error) => {
				reject(error);
			})
	});
}

export const FirebaseAPI = {
	login: (email, password) => login(email, password),
	loginAnonymously: () => loginAnonymously(),
	getCurrentUser: () => getCurrentUser(),
	signup: (email, password) => signup(email, password),
	signout: (data) => signout(data)
};