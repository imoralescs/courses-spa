import React from 'react';
import { Switch, Route, Link, Redirect } from 'react-router-dom';
import Courses from '../Courses';
import Course from '../Course';
import styles from './dashboard.css';
import user from '../../assets/img/svg/users/users-1.svg';

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
				<div className={styles.user}>
          <a>
						<img src={user} />
					</a>
          <ul className={styles.userNav}>
            <li>
							<a href="#"><i aria-hidden="true"></i> User profile</a>
						</li>
            <li>
							<a href="#"><i aria-hidden="true"></i> Log out</a>
						</li>
          </ul>
        </div>
			</ul>
			<Switch>
				<Route exact path="/admin" component={Courses}/>
				<Route path="/admin/course/:id" component={Course}/>
			</Switch>
		</div>
	);
}
