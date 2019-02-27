import React from 'react';
import { Redirect, Route } from 'react-router-dom';
import { connect } from 'react-redux';
import { PersistentAuth } from '../persistent-auth';

const RouteWithAuthentication = ({ component: Component, ...props }) => (
	< Route {...props} render={(routeProps) => (
		props.user || PersistentAuth.getUser()
			? <Component {...routeProps} />
			: <Redirect to='/login' />
	)} />
)

const mapStateToProps = (state) => ({
	...state.user
});

export default connect(mapStateToProps)(RouteWithAuthentication);