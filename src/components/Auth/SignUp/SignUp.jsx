import React, { Component } from 'react';
import styles from './SignUp.module.scss';
import { connect } from 'react-redux';
import { actions as userActions } from '../../../store/user/user.actions';
import { Link } from 'react-router-dom';
import merge from 'lodash/merge'
import { TextField, Button } from '@material-ui/core';

export class SignUp extends Component {
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
			this.props.signUp(form)
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
			<section className={styles.Signup}>
				<div className={styles.Signup__Header}>
					<h1>Create an account</h1>
					<span>Fill in the following fields</span>
				</div>
				<form className={styles.Signup__Form} onSubmit={this.onSubmit}>
					<TextField
						type="email"
						id="signup-email"
						label="Email"
						className={styles.Signup__Inputs}
						margin="normal"
						value={this.state.email.value}
						error={this.state.email.hasError}
						onChange={(event) => this.setState({ email: { value: event.target.value, hasError: false } })}
						inputRef={(ref) => this.emailRef = ref}
						required
					/>
					<TextField
						type="password"
						id="signup-password"
						label="Password"
						className={styles.Signup__Inputs}
						margin="normal"
						autoComplete="current-password"
						error={this.state.password.hasError}
						inputRef={(ref) => this.passwordRef = ref}
						inputProps={{ minLength: 6 }}
						required
					/>
					<div className={styles.Signup__Submit}>
						<Button
							id="submit-button"
							type="submit"
							fullWidth
							size="medium"
							color="primary"
							onClick={() => this.validateForm()}
						>
							Signup
						</Button>
					</div>
				</form>
				<div className={styles.Signup__Footer}>
					<span>Already registered? <Link to="/login">Login</Link></span>
				</div>
			</section>
		)
	}
}

const mapDispatchToProps = (dispatch) => ({
	signup: (payload) => dispatch(userActions.signUp(payload))
})

export default connect(mapDispatchToProps)(SignUp);