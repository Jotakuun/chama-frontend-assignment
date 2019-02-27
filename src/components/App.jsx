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
    };
    this.date = new Date();
  }
  componentWillMount() {
    if (!this.props.user) {
      FirebaseAPI.getCurrentUser().then((user) => {
        this.props.initializeWithUser(user);
      });
    }
    this.props.initializeTasks();
  }

  componentDidUpdate() {
    console.log('update', this.props, this.state)
  }

  createTask() {
    const { newTask } = this.state;
    if (newTask !== '') {
      let defaultTime = new Date();
      defaultTime = defaultTime.setMinutes(defaultTime.getMinutes() + 30);
      // defaultTime = defaultTime.toISOString();

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

  taskListRender() {
    if (this.props.tasks && this.props.tasks.all) {
      return this.props.tasks.all.map((task) =>
        <Task key={task.id} task={task} onUpdate={(task) => this.props.updateTask(task)} onRemove={(taskId) => this.props.removeTask(taskId)} />
      )
    }
  }

  render() {
    return (
      <div className={styles.App}>
        <div className={styles.App__Header}>
          <h1>Todo App </h1>
          <span>React & Redux & Firebase</span>
        </div>
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
        <div className={styles.App__TaskList}>
          {this.taskListRender()}
        </div>
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  ...state.user,
  tasks: state.tasks
});

const mapDispatchToProps = (dispatch) => ({
  initializeWithUser: (user) => dispatch(userActions.initializeWithUser(user)),
  initializeTasks: () => dispatch(tasksActions.initializeTasks()),
  createTask: (task) => dispatch(tasksActions.createTask(task)),
  updateTask: (task) => dispatch(tasksActions.updateTask(task)),
  removeTask: (taskId) => dispatch(tasksActions.removeTask(taskId))
});

export default connect(mapStateToProps, mapDispatchToProps)(App);