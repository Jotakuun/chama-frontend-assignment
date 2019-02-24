import React from 'react';
import { Redirect, Route } from 'react-router-dom';
import { connect } from 'react-redux';
import { PersistentAuth } from '../persistent-auth';

const RouteWithAuthentication = ({ component: Component, ...rest }) => (
	<Route {...rest} render={(props) => (
		props.user || PersistentAuth.getUser()
		? <Component {...props} />
		: <Redirect to='/login' />
	)} />
  )

const mapStateToProps = (state) => ({
	...state.user
});

export default connect(mapStateToProps)(RouteWithAuthentication);