import React from 'react';
import ReactDOM from 'react-dom';
import './assets/styles/reset.css';
import './assets/styles/main.scss';
import { BrowserRouter, Route, Switch } from "react-router-dom";
import { Provider } from 'react-redux';
import configureStore from './store';

import App from './components/App';
import { Auth, PrivateRoute, Login, SignUp } from './components/Auth';

const Routes = () => {
	return (
		<Provider store={configureStore()}>
			<BrowserRouter>
				<Switch>
					<Auth >
						<Route path="/login" component={Login} />
						<Route path="/signup" component={SignUp} />
					</Auth>
					<PrivateRoute path="/" component={App} />
				</Switch>
			</BrowserRouter>
		</Provider>
	)
}


ReactDOM.render(<Routes />, document.getElementById('root'));

