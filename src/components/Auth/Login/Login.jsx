import React, { Component } from 'react';
import styles from './Login.module.scss';
import { connect } from 'react-redux';
import { actions as userActions } from '../../../store/user/user.actions';
import { Link } from 'react-router-dom';
import merge from 'lodash/merge'
import { TextField, Button } from '@material-ui/core';

export class Login extends Component {
	constructor() {
		super();
		this.state = {
			email: {
				value: '',
				hasError: false
			},
			password: {
				hasError: false
			}
		};

		this.onSubmit = this.onSubmit.bind(this);
	}

	onSubmit(event) {
		const { email, password } = this.state;

		if (email && !email.hasError && !password.hasError) {
			const form = {
				email: this.state.email.value,
				password: this.passwordRef.value
			}
			this.props.login(form)
		}
		event.preventDefault();
	}

	validateForm() {
		if (this.emailRef && this.passwordRef) {
			const errors = {
				email: {
					hasError: !this.emailRef.checkValidity()
				},
				password: {
					hasError: !this.passwordRef.checkValidity()
				}
			};
			this.setState(merge({}, this.state, errors));
		}
	}

	render() {
		return (
			<section className={styles.Login}>
				<div className={styles.Login__Header}>
					<h1>Welcome,</h1>
					<span>Sign-in to continue</span>
				</div>
				<form className={styles.Login__Form} onSubmit={this.onSubmit}>
					<TextField
						type="email"
						id="login-email"
						label="Email"
						className={styles.Login__Inputs}
						margin="normal"
						value={this.state.email.value}
						error={this.state.email.hasError}
						onChange={(event) => this.setState({ email: { value: event.target.value, hasError: false } })}
						inputRef={(ref) => this.emailRef = ref}
						required
					/>
					<TextField
						type="password"
						id="login-password"
						label="Password"
						className={styles.Login__Inputs}
						margin="normal"
						autoComplete="current-password"
						error={this.state.password.hasError}
						inputRef={(ref) => this.passwordRef = ref}
						inputProps={{ minLength: 6 }}
						required
					/>
					<div className={styles.Login__Submit}>
						<Button
							id="submit-button"
							type="submit"
							fullWidth
							size="medium"
							color="primary"
							onClick={() => this.validateForm()}
						>
							Login
						</Button>
					</div>
				</form>
				<div className={styles.Login__Footer}>
					<span>New user? <Link to="/signup">Signup</Link></span>
				</div>
			</section>
		)
	}
}

const mapDispatchToProps = (dispatch) => ({
	login: (payload) => dispatch(userActions.login(payload))
})

export default connect(mapDispatchToProps)(Login);