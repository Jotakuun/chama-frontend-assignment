import React, { Component } from 'react';
import styles from './Login.module.scss';
import { TextField } from '@material-ui/core';

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
			<section className={styles.Login}>
				<div className={styles.Login__Header}>
					<h1>Welcome,</h1>
					<span>Sign-in to continue</span>
				</div>
				<form className={styles.Login__Form}>
					<TextField
						id="signin-name"
						label="Email"
						className={styles.Login__Inputs}
						margin="normal"
						value={this.state.email}
						onChange={(event) => this.setState({ email: event.target.value })}
					/>
					<TextField
						type="password"
						id="signin-password"
						label="Password"
						className={styles.Login__Inputs}
						margin="normal"
						autoComplete="current-password"
						value={this.state.password}
						onChange={(event) => this.setState({ password: event.target.value })}
					/>
				</form>
			</section>
		)
	}
}

export default Login;