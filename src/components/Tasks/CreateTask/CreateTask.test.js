import React from 'react';
import { shallow } from 'enzyme';
import CreateTask from './CreateTask';

describe('CreateTask', () => {

	const mockProps = {
		onCreate: jest.fn().mockImplementation((task) => task),
	}

	const component = shallow(<CreateTask {...mockProps} />);

	describe('when initializes', () => {
		const state = component.state();
		it('expect state to initialize with an empty value', () => {
			expect(state).toHaveProperty('text');
			expect(state.text).toBe('');
		});

		describe('expect to render', () => {
			it('a TextField component', () => {
				component.find('TextField');
			});
			it('a PriorityComponent component', () => {
				component.find('PrioritySelector');
			});
			it('a submit Button component', () => {
				component.find('Button');
			});
		})
	});

	describe('creating a task', () => {
		const inputField = component.find('TextField');
		const text = 'Run a marathon';

		describe('when user types into the `TextField`', () => {
			beforeEach(() => {
				inputField.simulate('change', { target: { value: text } });
			});

			afterEach(() => {
				component.setState({ text: '' });
			});

			it('value should be updated in state', () => {
				const state = component.state();
				expect(state.text).toEqual(text);
			});
		});

		describe('when user submits the new task', () => {
			const submitButton = component.find('#submit-button');

			beforeEach(() => {
				inputField.simulate('change', { target: { value: text } });
				submitButton.simulate('click');
			});

			it('expect `props.onCreate()` to be called', () => {
				expect(mockProps.onCreate).toHaveBeenCalled();
			});

			it('expect `props.onCreate()` callback to have the typed value', () => {
				const callback = mockProps.onCreate.mock.calls[0][0];
				expect(callback).toHaveProperty('text');
				expect(callback.text).toEqual(text);
			});

			it('expect `newTask` value to be reset', () => {
				const state = component.state();
				expect(state.text).toEqual('');
			});
		});
	});
});



