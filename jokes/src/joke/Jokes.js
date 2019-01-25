import React from 'react';
import axios from 'axios';

class Jokes extends React.Component {
	state = {
		jokes: [],
	};

	render() {
		return (
			<>
				<h2>List of jokes</h2>
				<ul>
					{this.state.jokes.map(joke => (
						<li key={joke.id}>{joke.joke}</li>
					))}
				</ul>
			</>
		);
	}

	async componentDidMount() {

		try {
			const token = localStorage.getItem('jwt');
			const requestOptions = {
				headers: {
					authorization: token,
				},
			};

      const response = await axios.get(`http://localhost:3300/api/jokes`, requestOptions);
      
      console.log(response)

			this.setState({ jokes: response.data });
		} catch (error) {
			console.error('we ran into an issue getting the users');
		}
	}
}

export default Jokes;