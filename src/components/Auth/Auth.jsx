import React, { Component } from 'react';
import { Route } from "react-router-dom";
import './Auth.scss';

import Login from './Login/Login';

class Auth extends Component {
  render() {
    return (
      <div className="Auth">
	  	<Route path="/" component={Login}/>
      </div>
    );
  }
}

export default Auth;
