import React from 'react';
import {  Switch, Route, Link } from 'react-router-dom';

export default function Dashboard() {
	return (
		<div className="container">
			<h1>Dashboard</h1>
			<ul>
				<li><Link to="/admin">Home</Link></li>
				<li><Link to="/admin/courses">Courses</Link></li>
			</ul>
			<Switch>
				<Route exact path="/admin" render={() => (
					<h3>Home.</h3>
				)}/>
				<Route path="/admin/courses" render={() => (
					<h3>Courses.</h3>
				)}/>
			</Switch>
		</div>
	);
}