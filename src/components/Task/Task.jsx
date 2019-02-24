import React, { Component } from 'react';
import styles from './Task.module.scss';

class Task extends Component {
	componentWillMount() {
		console.log('task', this.props)
	}
	render() {
		const { task } = this.props;
		return (
			<div className={styles.Task}>
				<span>{task.id}</span>
				<span>{task.name}</span>
				<span>{task.dueTime}</span>
			</div>
		);
	}
}

export default Task;