import React from 'react';
import { Redirect } from 'react-router-dom';

export default function Dashboard(props) {
	if(props.state.app.isAuthenticated) {
		return(
			<Redirect to={{pathname: '/admin'}}/>
		);
	}
	return (
		<div className="login-form__container">
			<form className="login-form" onSubmit={props.submitForm}>
				<div className="login-form__logo">
					<img src='https://upload.wikimedia.org/wikipedia/commons/thumb/9/93/No-logo.svg/800px-No-logo.svg.png'/>
				</div>
				<div className="input-group">
					<label className="login-form__label">Username</label>
					<input className="login-form__input" type="text" placeholder="Username" value={props.username} onChange={props.handleUsernameChanged} autoComplete="Username"/>
				</div>
				<div className="input-group">
					<label className="login-form__label">Password</label>
					<input className="login-form__input" type="password" placeholder="Password" value={props.password} onChange={props.handlePasswordChanged} autoComplete="Password"/>
				</div>
				<input className="login-form__submit" type="submit" value="Login" role="button"/>
			</form>
		</div>
	);
}
