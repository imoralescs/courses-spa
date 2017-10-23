import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Login from'./Login';
import Dashboard from'./Dashboard';
import styles from './app.css';

const App = () => (
	<Router>
		<div className={`container ${styles.app}`}>
			<Switch>
				<Route exact path="/" component={Login}/>
				<Route path="/admin" component={Dashboard} />
			</Switch>
		</div>
	</Router>
);

App.propTypes = {};

export default App;
