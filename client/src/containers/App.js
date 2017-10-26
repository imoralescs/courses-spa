import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Login from'./Login';
import Dashboard from'./Dashboard';

const App = () => (
	<Router>
		<div className="container">
			<Switch>
				<Route exact path="/" component={Login}/>
				<Route path="/admin" component={Dashboard} />
			</Switch>
		</div>
	</Router>
);

App.propTypes = {};

export default App;