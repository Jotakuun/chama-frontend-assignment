import React from 'react';
import { Redirect, Route } from 'react-router-dom';

const provisionalAuth = false;

const PrivateRoute = ({ component: Component, ...rest }) => (
	<Route {...rest} render={(props) => (
		provisionalAuth
		? <Component {...props} />
		: <Redirect to='/auth' />
	)} />
  )

export default PrivateRoute;