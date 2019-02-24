import React, { Component } from 'react';
import styles from './Login.module.scss';
import { connect } from 'react-redux';
import { Redirect } from 'react-router-dom';
import { actions as userActions } from '../../../store/user/user.actions';
import { Link } from 'react-router-dom';
import { TextField, Button } from '@material-ui/core';

export class Login extends Component {
	constructor() {
		super();
		this.state = {
			email: '',
			errors: {
				password: false,
				email: false
			}
		};

		this.onSubmit = this.onSubmit.bind(this);
	}

	validateForm() {
		if (this.emailRef && this.passwordRef) {
			const updatedErrors = {
				email: !this.emailRef.checkValidity(),
				password: !this.passwordRef.checkValidity()
			};
			this.setState({
				errors: updatedErrors
			});
			this.onSubmit(updatedErrors);
		};
	}

	onSubmit(errors) {
		const { email } = this.state;

		if (email && !errors.email && !errors.password) {
			this.props.login(email.value, this.passwordRef.value)
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
						type="email"
						id="login-email"
						label="Email"
						className={styles.Login__Inputs}
						margin="normal"
						value={this.state.email}
						error={this.state.errors.email}
						onChange={(event) => this.setState({ email: event.target.value })}
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
						error={this.state.errors.password}
						inputRef={(ref) => this.passwordRef = ref}
						inputProps={{ minLength: 6 }}
						required
					/>
					<div className={styles.Login__Submit}>
						<Button
							id="submit-button"
							type="button"
							fullWidth
							size="medium"
							color="primary"
							onClick={() => { this.validateForm() }}
						>
							Login
						</Button>
					</div>
				</form>
				<div className={styles.Login__Footer}>
					<span>New user? <Link to="/signup">Signup</Link></span>
				</div>
				{this.props.user && <Redirect to="/" />}
			</section>
		)
	}
}

const mapStateToProps = (state) => ({
	...state.user
});

const mapDispatchToProps = (dispatch) => ({
	login: (email, password) => dispatch(userActions.login(email, password))
});

export default connect(mapStateToProps, mapDispatchToProps)(Login);