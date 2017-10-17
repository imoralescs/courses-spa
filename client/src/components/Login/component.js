import React from 'react';

export default function Dashboard(props) {
	return (
		<div className="container">
			<form className="login" onSubmit={props.submitForm}>
				<div className="input-group">
					<label>Username</label>
					<input type="text" placeholder="Username" value={props.username} onChange={props.handleUsernameChanged} autoComplete="off"/>
				</div>
				<div className="input-group">
					<label>Password</label>
					<input type="password" placeholder="Password" value={props.password} onChange={props.handlePasswordChanged} autoComplete="off"/>
				</div>
				<input type="submit" value="Login" role="button"/>
			</form>
		</div>
	);
}