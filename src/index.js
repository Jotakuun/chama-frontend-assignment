import React from 'react';
import ReactDOM from 'react-dom';
import './assets/styles/index.css';
import { Auth, PrivateRoute } from './components/Auth'
import { BrowserRouter, Route, Switch } from "react-router-dom";
import { Provider } from 'react-redux';
import configureStore from './store';

import App from './components/App';

const Routes = () => {
	return (
		<Provider store={configureStore()}>
			<BrowserRouter>
				<Switch>
					<Route path="/auth" component={Auth} />
					<PrivateRoute path="/" component={App} />
				</Switch>
			</BrowserRouter>
		</Provider>
	)
}


ReactDOM.render(<Routes />, document.getElementById('root'));

