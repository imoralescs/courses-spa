import React from 'react';
import {  Switch, Route, Link, Redirect } from 'react-router-dom';
import Courses from '../Courses';
import Course from '../Course';
import styles from './dashboard.css';

export default function Dashboard(props) {
	if(!props.state.login.isAuthenticated) {
		return(
			<Redirect to={{pathname: '/'}}/>
		);
	}
	return (
		<div className={styles.container}>
			<ul className={styles.nav}>
				<li><Link to="/admin">Home</Link></li>
			</ul>
			<Switch>
				<Route exact path="/admin" component={Courses}/>
				<Route path="/admin/course/:id" component={Course}/>
			</Switch>
		</div>
	);
}
