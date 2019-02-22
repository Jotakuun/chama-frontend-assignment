import React from 'react';
import { shallow } from 'enzyme';
import Login from './Login';

describe('Login', () => {
	const login = shallow(<Login />);

	describe('initializes', () => {
		it('with an empty initial state', () => {
			expect(login.state()).toEqual({
				email: '',
				password: ''
			});
		});
	});
});