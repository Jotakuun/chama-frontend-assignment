import React, { Component } from 'react';
import { Route } from "react-router-dom";
import styles from './Auth.module.scss';

import Login from './Login/Login';

class Auth extends Component {
  render() {
    return (
      <div className={styles.Auth__Container}>
        <div className={styles.Auth}>
          <Route path="/" component={Login} />
        </div>
      </div>
    );
  }
}

export default Auth;
