import React from 'react';
import axios from 'axios';

class Login extends React.Component {
	state = {
		username: '',
		password: '',
	};

	handleInputChange = event => {
		const { name, value } = event.target;

		this.setState({ [name]: value });
	};

	handleSubmit = event => {
		event.preventDefault();

		const endpoint = `${process.env.REACT_APP_API_URL}/login`;

		axios
			.post(`http://localhost:3300/api/login`, this.state)
			.then(res => {
				console.log('logged in')
				localStorage.setItem('jwt', res.data.token);
			})
			.catch(err => console.log(err));
  };
  
  render() {
		return (
			<form onSubmit={this.handleSubmit}>
				<div>
					<label htmlFor="">Username</label>
					<input
						name="username"
						value={this.state.username}
						onChange={this.handleInputChange}
						type="text"
					/>
				</div>
				<div>
					<label htmlFor="">Password</label>
					<input
						name="password"
						value={this.state.password}
						onChange={this.handleInputChange}
						type="password"
					/>
				</div>
				<div>
					<button type="submit">Login</button>
				</div>
			</form>
		);
	}
}

export default Login;
