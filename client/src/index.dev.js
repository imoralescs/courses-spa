import React from 'react';
import { render } from 'react-dom';
import { AppContainer } from 'react-hot-loader';
import { createStore, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';
import root from './store/reducers';
import App from './containers/App';

// CSS Global
require('./containers/app.css');

const thunkMiddleware = ({ dispatch, getState }) => {
	return (next) => (action) =>
		typeof action === 'function' 
		? action(dispatch, getState) 
		: next(action);
};

const store = createStore(
	root,
	applyMiddleware(thunkMiddleware)
);

const renderApp = (Component) => {
	render(
		<Provider store={store}>
			<AppContainer>
				<Component />
			</AppContainer>
		</Provider>,
		document.getElementById('appMountPoint')
	);
};

renderApp(App);

if (module.hot) {
	module.hot.accept('./containers/App', () => { renderApp(App); });
}
