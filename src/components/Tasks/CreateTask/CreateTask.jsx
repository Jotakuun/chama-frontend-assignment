import React, { Component } from 'react';
import styles from './CreateTask.module.scss';
import { TextField, Button } from '@material-ui/core';
import PrioritySelector from '../../shared/PrioritySelector/PrioritySelector';

export class CreateTask extends Component {
	constructor(props) {
		super(props);

		this.state = {
			text: '',
			priority: 3
		}
	}

	onKeyPress(event) {
		if (event.key === 'Enter') {
			this.createTask();
			event.preventDefault();
		}
	}


	createTask() {
		if (this.state.text !== '') {
			const now = new Date();
			const defaultTime = new Date(now.setMinutes(now.getMinutes() + 30));

			this.props.onCreate({
				text: this.state.text,
				dueTime: defaultTime.toISOString(),
				createdAt: now.toISOString(),
				completed: false,
				priority: this.state.priority
			});

			this.setState({
				text: ''
			});
		}
	}

	render() {
		return (
			<form noValidate autoComplete="off">
				<div className={styles.CreateTask}>
					<div className={styles.CreateTask__TextField}>
						<TextField
							id="create-task"
							className={styles.CreateTask__TextField}
							label="Type something..."
							value={this.state.text}
							onChange={(event) => this.setState({ text: event.target.value })}
							onKeyPress={(event) => this.onKeyPress(event)}
							variant="outlined"
						></TextField>
					</div>
					<div className={styles.CreateTask__Priority}>
						<PrioritySelector value={this.state.priority} onChange={(value) => this.setState({ priority: value })} />
					</div>

					<div className={styles.CreateTask__Button} >
					<Button fullWidth color="primary" onClick={() => this.createTask()}>
						Create
        			</Button>
					</div>
				</div>
				
			</form>
		);
	}
}
export default CreateTask;