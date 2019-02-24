import React, { Component } from 'react';
import './App.scss';

import { connect } from 'react-redux';
import { actions as userActions } from '../store/user/user.actions';
import { actions as tasksActions } from '../store/tasks/tasks.actions';
import merge from 'lodash/merge'
import { FirebaseDB } from '../firebase/firebase';
import { FirebaseAPI } from '../firebase/firebase-api';

import Task from './Task/Task';

export class App extends Component {
  componentWillMount() {
    if (!this.props.user) {
      FirebaseAPI.getCurrentUser().then((user) => {
        this.props.initializeWithUser(user);
      });
    }
    FirebaseDB.once('value', (snapshot) => {
      const tasks = []

      snapshot.forEach((childSnapshot) => {
        const task = merge({ id: childSnapshot.key }, childSnapshot.val());
        tasks.push(task);
      });

      this.props.initializeTasks(tasks);
    });
  }

  render() {
    return (
      <div className="App">
        Hello world!
        {this.props.tasks && this.props.tasks.all.map((task) => {
          return <Task key={task.id} {...task}/>
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