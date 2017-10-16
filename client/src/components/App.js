import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Dashboard from'./Dashboard';

const App = () => (
	<Router>
		<Switch>
			<Route exact path="/" component={Dashboard} />
		</Switch>
	</Router>
);

App.propTypes = {};

export default App;
