import firebase, { FirebaseDB } from './firebase';
import merge from 'lodash/merge';

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

function getDatabaseSnapshot() {
	return new Promise((resolve) => {
		FirebaseDB.once('value', (snapshot) => {
			const tasks = []

			snapshot.forEach((childSnapshot) => {
				const task = merge({ id: childSnapshot.key }, childSnapshot.val());
				tasks.push(task);
			});

			resolve(tasks);
		});
	})
}

async function createTask(task) {
	return new Promise((resolve, reject) => {
		if (task) {
			const newTask = FirebaseDB.push()
			
			newTask.set(task, (error) => {
				if (error) {
					reject(error);
				}
			});
			resolve({...task, id: newTask.key})
		} else reject();
	})
}

function updateTask(task) {
	return new Promise((resolve, reject) => {
		if (task) {
			FirebaseDB.update({ [task.id]: task });
			resolve(task);
		} else reject();
	})
}

function removeTask(taskId) {
	return new Promise((resolve, reject) => {
		if (taskId) {
			FirebaseDB.child(taskId).remove();
			resolve(taskId);
		} else reject();
	})
}


export const FirebaseAPI = {
	login: (email, password) => login(email, password),
	loginAnonymously: () => loginAnonymously(),
	getCurrentUser: () => getCurrentUser(),
	signup: (email, password) => signup(email, password),
	signout: (data) => signout(data),
	getDatabaseSnapshot: () => getDatabaseSnapshot(),
	createTask: (task) => createTask(task),
	updateTask: (task) => updateTask(task),
	removeTask: (taskId) => removeTask(taskId)
};