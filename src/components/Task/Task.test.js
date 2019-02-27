import React from 'react';
import { mount } from 'enzyme';
import Task from './Task';

describe('Task', () => {

	const mockProps = {
		task: {
			id: 'abc123def45g67',
			text: `Order a pizza for dinner`,
			dueTime: new Date(),
			completed: false,
		},
		onUpdate: (task) => jest.fn(task),
		onRemove: (taskId) => jest.fn(taskId)
	}

	const task = mount(<Task {...mockProps} />);

	describe('when initializes', () => {
		it('receives expected props', () => {
			const props = task.instance().props();
			expect(props).toHaveProperty('task');
			expect(props.task).toHaveProperty('id');
			expect(props.task).toHaveProperty('text');
			expect(props.task).toHaveProperty('dueTime');
			expect(props.task).toHaveProperty('completed');

			expect(props).toHaveProperty('onUpdate');
			expect(props).toHaveProperty('onRemove');
		});
	});

	// describe('on check `complete` event', () => {
		// 	describe('', () => {

		// 	})
	// });

});