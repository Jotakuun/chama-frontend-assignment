import React from 'react';
import { mount } from 'enzyme';
import Task from './Task';

describe('Task', () => {

	const mockProps = {
		task: {
			id: 'abc123def45g67',
			text: `Order a pizza for dinner`,
			priority: 3,
			dueTime: new Date(),
			completed: false,
		},
		onUpdate: (task) => jest.fn(task),
		onRemove: (taskId) => jest.fn(taskId)
	}

	const component = mount(<Task {...mockProps} />);

	describe('when initializes', () => {
		it('receives expected props', () => {
			const props = component.props();
			expect(props).toHaveProperty('task');
			expect(props.task).toHaveProperty('id');
			expect(props.task).toHaveProperty('text');
			expect(props.task).toHaveProperty('dueTime');
			expect(props.task).toHaveProperty('priority');
			expect(props.task).toHaveProperty('completed');

			expect(props).toHaveProperty('onUpdate');
			expect(props).toHaveProperty('onRemove');
		});

		describe('expects to render', () => {
			it('a Checkbox component', () => {
				component.find('Checkbox');
			});
			it('a PrioritySelector component', () => {
				component.find('PrioritySelector');
			});
			it('a DeleteIcon component', () => {
				component.find('DeleteIcon');
			});
		});
	});

	describe('when user clicks on the checkbox', () => {
		const checkbox = component.find('Checkbox');
		beforeEach(() => {
			checkbox.simulate('click');
		});

		describe('expect onUpdate() output', () => {
			it('to be called', () => {

			});

			it('to include the task and the updated `complete` value', () => {

			});
	
		});
	})
});

