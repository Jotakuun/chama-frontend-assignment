import React, { Component } from 'react';
import { Redirect, Route } from 'react-router-dom';
import { connect } from 'react-redux';

class PrivateRoute extends Component {
	render() {
		return (
			<Route render={(props) => (
				this.props && this.props.user
					? <Component {...props} />
					: <Redirect to='/auth' />
			)} />
		)
	}
}

const mapStateToProps = (state) => ({
	...state.user
});

export default connect(mapStateToProps)(PrivateRoute);