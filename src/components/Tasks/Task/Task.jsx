import React, { Component } from "react";
import styles from "./Task.module.scss";
import { Checkbox, IconButton } from "@material-ui/core";
import DeleteIcon from '@material-ui/icons/Delete';
import PrioritySelector from '../../shared/PrioritySelector/PrioritySelector';

export class Task extends Component {
	constructor(props) {
		super(props);

		this.onComplete = this.onComplete.bind(this);
		this.onUpdatePriority = this.onUpdatePriority.bind(this);
		this.onRemove = this.onRemove.bind(this);
	}

	onComplete(event) {
		this.props.onUpdate({
			...this.props.task,
			completed: event.target.checked
		});
	}

	onUpdatePriority(value) {
		this.props.onUpdate({
			...this.props.task,
			priority: value
		});
	}

	onRemove() {
		this.props.onRemove(this.props.task.id);
	}

	render() {
		const { task } = this.props;
		return (
			<li className={styles.Task}>
				<div className={styles.Task__Checkbox}>
					<Checkbox
						color="primary"
						checked={task.completed}
						onChange={this.onComplete}
						value="task-completed"
					/>
				</div>
				<div className={styles.Task__Text}>
					<span>{task.text}</span>
				</div>
				<div className={styles.Task__Priority}>
					<PrioritySelector value={task.priority} onChange={(value) => this.onUpdatePriority(value)} />
				</div>
				<div className={styles.Task__Options}>
					<IconButton color="inherit" onClick={this.onRemove}>
						<DeleteIcon />
					</IconButton>
				</div>
			</li>
		);
	}
}
export default Task;