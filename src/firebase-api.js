import './utils/http';
import firebase from './firebase';

async function login(email, password) {
	try {
		return await firebase.auth().signInWithEmailAndPassword(email, password);
	} catch(err) {
		return err;
	}
}

async function signup(email, password) {
	try {
		return await firebase.auth().createUserWithEmailAndPassword(email, password);
	} catch(err) {
		return err;
	}
}

async function signout() {
	try {
		return await firebase.auth().signOut();
	} catch(err) {
		return err;
	}
}

export const FirebaseAPI = {
	login: (email, password) => login(email, password),
	signup: (email, password) => signup(email, password),
	signout: (data) => signout(data)
};