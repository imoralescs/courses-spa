import React from 'react';
import { Redirect } from 'react-router-dom';
import styles from './login.css';
import home from '../../assets/img/svg/home.svg';

export default function Dashboard(props) {
	if(props.state.login.isAuthenticated) {
		return(
			<Redirect to={{pathname: '/admin'}}/>
		);
	}
	return (
		<div className={styles.container}>
			<form className={styles.loginForm} onSubmit={props.submitForm}>
				<div className={styles.logo}>
					<img src={home}/>
				</div>
				<div className={styles.inputGroup}>
					<label className={styles.label}>Username</label>
					<input className={styles.input} type="text" placeholder="Username" value={props.username} onChange={props.handleUsernameChanged} autoComplete="Username"/>
				</div>
				<div className={styles.inputGroup}>
					<label className={styles.label}>Password</label>
					<input className={styles.input} type="password" placeholder="Password" value={props.password} onChange={props.handlePasswordChanged} autoComplete="Password"/>
				</div>
				<input className={styles.submit} type="submit" value="Login" role="button"/>
			</form>
		</div>
	);
}
