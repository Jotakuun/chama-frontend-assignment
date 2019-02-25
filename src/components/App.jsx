import React, { Component } from 'react';
import styles from './App.module.scss';

import { connect } from 'react-redux';
import { actions as userActions } from '../store/user/user.actions';
import { actions as tasksActions } from '../store/tasks/tasks.actions';
import { FirebaseAPI } from '../firebase/firebase-api';

import Task from './Task/Task';
import { TextField } from '@material-ui/core';

export class App extends Component {
  constructor() {
    super();
    this.state = {
      newTask: {
        value: '',
        dueTime: null
      },
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

  render() {
    return (
      <div className="App">
        Hello world!
        <form className={styles.CreateTask} noValidate autoComplete="off">
          <TextField
            id="outlined-name"
            label="Type something..."
            className={styles.CreateTask__Field}
            margin="normal"
            variant="outlined"
          />
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
  initializeTasks: (tasks) => dispatch(tasksActions.initializeTasks(tasks))
});

export default connect(mapStateToProps, mapDispatchToProps)(App);