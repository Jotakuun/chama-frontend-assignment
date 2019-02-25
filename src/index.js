import React from 'react';
import ReactDOM from 'react-dom';
import './assets/styles/reset.css';
import './assets/styles/main.scss';
import { BrowserRouter, Route, Switch } from "react-router-dom";
import { Provider } from 'react-redux';
import configureStore from './store';
import theme from './theme';
import { MuiThemeProvider } from '@material-ui/core/styles';
import './firebase/firebase';

import App from './components/App';
import { RouteWithAuthentication, Login, SignUp } from './components/Auth';
import { Layout } from './components/shared';

const Routes = () => {
	return (
		<Provider store={configureStore()}>
			<MuiThemeProvider theme={theme}>
				<BrowserRouter>
					<Layout>
						<Switch>
							<Route path="/login" component={Login} />
							<Route path="/signup" component={SignUp} />
							<RouteWithAuthentication path="/" component={App} />
						</Switch>
					</Layout>
				</BrowserRouter>
			</MuiThemeProvider>
		</Provider>
	)
}

ReactDOM.render(<Routes />, document.getElementById('root'));