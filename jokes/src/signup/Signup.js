import React from 'react';
import axios from 'axios';

class Signup extends React.Component {
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

		const endpoint = `http:/localhost:3300/api/register`;

		axios
			.post(`http://localhost:3300/api/register`, this.state)
			.then(res => {
				console.log('signed up')
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
					<button type="submit">Signup</button>
				</div>
			</form>
		);
	}
}

export default Signup;