import React, { Component } from 'react';
import styles from './SignUp.module.scss';
import { connect } from 'react-redux';
import { actions as userActions } from '../../../store/user/user.actions';
import { Link } from 'react-router-dom';
import { Redirect } from 'react-router-dom';
import { TextField, Button } from '@material-ui/core';

export class SignUp extends Component {
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
			<section className={styles.Signup}>
				<div className={styles.Signup__Header}>
					<h1>Create an account</h1>
					<span>Fill in the following fields</span>
				</div>
				<form className={styles.Signup__Form}>
					<TextField
						type="email"
						id="signup-email"
						label="Email"
						className={styles.Signup__Inputs}
						margin="normal"
						value={this.state.email}
						error={this.state.errors.email}
						onChange={(event) => this.setState({ email: event.target.value })}
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
						error={this.state.errors.password}
						inputRef={(ref) => this.passwordRef = ref}
						inputProps={{ minLength: 6 }}
						required
					/>
					<div className={styles.Signup__Submit}>
						<Button
							id="submit-button"
							type="button"
							fullWidth
							size="medium"
							color="primary"
							onClick={() => { this.validateForm() }}
						>
							Signup
						</Button>
					</div>
				</form>
				<div className={styles.Signup__Footer}>
					<span>Already registered? <Link to="/login">Login</Link></span>
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
	signup: (email, password) => dispatch(userActions.signUp(email, password))
})

export default connect(mapStateToProps, mapDispatchToProps)(SignUp);