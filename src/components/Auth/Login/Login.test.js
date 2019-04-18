import React from 'react';
import { shallow } from 'enzyme';
import { Login } from './Login';

const login = shallow(<Login />);

describe('Login', () => {

	const initialState = {
		email: '',
		errors: {
			password: false,
			email: false
		}
	};

	describe('when initializes', () => {
		const state = login.state();
		it('expects an empty initial state', () => {
			expect(state).toEqual(initialState);
		});

		it('expects required props in initial state', () => {
			expect(state).toHaveProperty('email');
			expect(state).toHaveProperty('errors');

			expect(state.errors).toHaveProperty('email');
			expect(state.errors).toHaveProperty('password');
		});
	});

	describe('when typing into the email input', () => {
		let inputElement;
		beforeEach(() => {
			inputElement = login.find('#login-email');
		});

		it('the component state should update the email value', () => {
			const email = 'test@gmail.com';
			inputElement.simulate('change', { target: { value: email } });
			expect(login.state().email).toEqual(email);
			login.update();
		});
	});

});