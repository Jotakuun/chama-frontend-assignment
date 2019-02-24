import React, { Component } from 'react';
import './App.scss';

import { connect } from 'react-redux';
import { actions as userActions } from '../store/user/user.actions';
import { FirebaseAPI } from '../firebase-api';

export class App extends Component {

  componentDidMount() {
    if (!this.props.user) {
      FirebaseAPI.getCurrentUser().then((user) => {
        this.props.initializeWithUser(user);
      });
    }
  }

  render() {
    return (
      <div className="App">
        Hello world!
      </div>
    );
  }
}
const mapStateToProps = (state) => ({
  ...state.user
});

const mapDispatchToProps = (dispatch) => ({
  initializeWithUser: (user) => dispatch(userActions.initializeWithUser(user))
});

export default connect(mapStateToProps, mapDispatchToProps)(App);