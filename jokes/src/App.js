import React, { Component } from 'react';
import { Route, NavLink } from 'react-router-dom';

import './App.css';

import Signup from './signup/Signup';
import Login from './auth/Login';
import Jokes from './joke/Jokes';

class App extends Component {
	render() {
		return (
			<>
				<header>
					<nav>
						<NavLink to="/login">Login</NavLink>
						&nbsp;|&nbsp;
						<NavLink to="/signup">Signup</NavLink>
            &nbsp;|&nbsp;
						<NavLink to="/jokes">jokes</NavLink>
						<button onClick={this.signout}>Signout</button>
					</nav>
				</header>
				<main>
					<Route path="/login" component={Login} />
					<Route path="/signup" component={Signup} />
          <Route path="/jokes" component={Jokes} />
				</main>
			</>
		);
	}

	signout = () => {
		localStorage.removeItem('jwt');
	};
}

export default App;