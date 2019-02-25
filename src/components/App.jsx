import React, { Component } from 'react';
import styles from './App.module.scss';

import { connect } from 'react-redux';
import { actions as userActions } from '../store/user/user.actions';
import { actions as tasksActions } from '../store/tasks/tasks.actions';
import { FirebaseAPI } from '../firebase/firebase-api';

import Task from './Task/Task';
import { TextField, Button } from '@material-ui/core';

export class App extends Component {
  constructor() {
    super();
    this.state = {
      newTask: '',
      creating: false
    }
  }
  componentWillMount() {
    if (!this.props.user) {
      FirebaseAPI.getCurrentUser().then((user) => {
        this.props.initializeWithUser(user);
      });
    }
    this.props.initializeTasks();
  }

  createTask() {
    const { newTask } = this.state;
    if (newTask !== '') {
      const defaultTime = new Date();
      defaultTime.setMinutes(defaultTime.getMinutes() + 30);
      defaultTime.toISOString();

      this.props.createTask({
        text: newTask,
        dueTime: defaultTime,
        completed: false
      });
    }
  }

  onKeyPress(event) {
    if (event.key === 'Enter') {
      this.createTask();
      event.preventDefault();
    }
  }

  render() {
    return (
      <div className={styles.App}>
        <h1>Todo App</h1>
        <form className={styles.CreateTask} noValidate autoComplete="off">
          <div className={styles.CreateTask__TextField}>
            <TextField
              id="create-task"
              className={styles.CreateTask__TextField}
              label="Type something..."
              value={this.state.newTask}
              onChange={(event) => this.setState({ newTask: event.target.value })}
              onKeyPress={(event) => this.onKeyPress(event)}
              variant="outlined"
            />
          </div>

          <Button className={styles.CreateTask__Button} color="primary" variant="outlined" onClick={() => this.createTask()}>
            Create
         </Button>
        </form>
        {this.props.tasks && this.props.tasks.all.map((task) => {
          return <Task key={task.id} {...task} />
        })}
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  ...state.user,
  ...state.tasks
});

const mapDispatchToProps = (dispatch) => ({
  initializeWithUser: (user) => dispatch(userActions.initializeWithUser(user)),
  initializeTasks: () => dispatch(tasksActions.initializeTasks()),
  createTask: (task) => dispatch(tasksActions.createTask(task)),
  updateTask: (task) => dispatch(tasksActions.updateTask(task)),
  removeTask: (taskId) => dispatch(tasksActions.removeTask(taskId))
});

export default connect(mapStateToProps, mapDispatchToProps)(App);