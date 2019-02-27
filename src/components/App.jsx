import React, { Component } from 'react';
import styles from './App.module.scss';

import { connect } from 'react-redux';
import { actions as userActions } from '../store/user/user.actions';
import { actions as tasksActions } from '../store/tasks/tasks.actions';
import { FirebaseAPI } from '../firebase/firebase-api';

import Task from './Tasks/Task/Task';
import CreateTask from './Tasks/CreateTask/CreateTask';

export class App extends Component {
  componentWillMount() {
    if (!this.props.user) {
      FirebaseAPI.getCurrentUser().then((user) => {
        this.props.initializeWithUser(user);
      });
    }
    this.props.initializeTasks();
  }

  
  taskListRender() {
    if (this.props.tasks) {
      return this.props.tasks.sort((a, b) => new Date(b.createdAt) - new Date(a.createdAt)).map((task) =>
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
        <CreateTask onCreate={(task) => this.props.createTask(task)}/>
        <div className={styles.App__TaskList}>
          {this.taskListRender()}
        </div>
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