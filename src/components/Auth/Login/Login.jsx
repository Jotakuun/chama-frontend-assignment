import React, { Component } from 'react';
import styles from './Login.module.scss';
//import Input from '@material-ui/core/Input';

class Login extends Component {
	constructor() {
		super();
		this.state = {
			email: '',
			password: ''
		}
	}
	render() {
		return (
			<div className={styles.Login}>
			</div>
		)
	}
}

export default Login;