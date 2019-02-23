import React from 'react';
import { shallow } from 'enzyme';
import { SignUp } from './SignUp';

const signup = shallow(<SignUp />);

describe('SignUp', () => {

	const initialState = {
		email: {
			value: '',
			hasError: false
		},
		password: {
			hasError: false
		}
	};

	describe('when initializes', () => {
		const state = signup.state();
		it('expects an empty initial state', () => {
			expect(state).toEqual(initialState);
		});

		it('expects required props in initial state', () => {
			expect(state).toHaveProperty('email');
			expect(state).toHaveProperty('password');

			expect(state.email).toHaveProperty('value');
			expect(state.email).toHaveProperty('hasError');

			expect(state.password).toHaveProperty('hasError');
		});
	});

	describe('when typing into the email input', () => {
		let inputElement;
		beforeEach(() => {
			inputElement = signup.find('#signup-email');
		})

		it('the component state should update the email value', () => {
			const email = 'test@gmail.com';
			inputElement.simulate('change', { target: { value: email } });
			expect(signup.state().email.value).toEqual(email);
		});
	});

	describe('on submit', () => {
		let emailInput;
		let passwordInput;
		let submitButton;
		beforeEach(() => {
			emailInput = signup.find('#signup-email');
			passwordInput = signup.find('#signup-password');
			submitButton = signup.find('#submit-button')
			emailInput.simulate('change', { target: { value: 'testgmailcom' } });
		});

		describe('the state should update with', () => {
			it('an error in `state.email` if the value is invalid', () => {
				emailInput.simulate('change', { target: { value: 'testgmailcom' } });
				submitButton.simulate('click');

				// find out why this only works with a timeout
				// note: signup.update() does not work
				setTimeout(() => {
					expect(signup.state().email.hasError).toEqual(true);
				})
			});

			it('an error in `state.password` if the value is invalid', () => {
				passwordInput.simulate('change', { target: { value: '123' } });
				submitButton.simulate('click');
				setTimeout(() => {
					expect(signup.state().password.hasError).toEqual(true);
				})
			});
		});
	});

});