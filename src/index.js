import React from 'react';
import ReactDOM from 'react-dom';
import './assets/styles/reset.css';
import './assets/styles/main.scss';
import { BrowserRouter, Route, Switch } from "react-router-dom";
import { Provider } from 'react-redux';
import configureStore from './store';
import './firebase';

import App from './components/App';
import { PrivateRoute, Login, SignUp } from './components/Auth';
import { Layout } from './components/shared';

const Routes = () => {
	return (
		<Provider store={configureStore()}>
			<BrowserRouter>
				<Layout>
					<Switch>
						<Route path="/login" component={Login} />
						<Route path="/signup" component={SignUp} />
						<PrivateRoute path="/" component={App} />
					</Switch>
				</Layout>
			</BrowserRouter>
		</Provider>
	)
}

ReactDOM.render(<Routes />, document.getElementById('root'));