import React from 'react';
import ReactDOM from 'react-dom';
import './assets/styles/index.css';
import App from './components/App';
import { Auth, PrivateRoute } from './components/Auth'

import { BrowserRouter, Route, Switch } from "react-router-dom";

const Routes = () => {
	return (
		<BrowserRouter>
			<Switch>
				<Route path="/auth" component={Auth} />
				<PrivateRoute path="/" component={App} />
			</Switch>
		</BrowserRouter>
	)
}


ReactDOM.render(<Routes />, document.getElementById('root'));

