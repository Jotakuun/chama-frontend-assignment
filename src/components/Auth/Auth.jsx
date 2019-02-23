import React, { Component } from 'react';
import styles from './Auth.module.scss';

class Auth extends Component {
  render() {
    return (
      <div className={styles.Auth__Container}>
        <div className={styles.Auth}>
          {this.props.children}
        </div>
      </div>
    );
  }
}

export default Auth;
