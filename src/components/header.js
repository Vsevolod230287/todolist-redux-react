import React from 'react';
import { NavLink } from 'react-router-dom';
import Auth from '../auth/auth';

export default function header() {
	return (
		<header className='App-header'>
			<nav>
				<ul className='menu'>
					<li>
						<NavLink exact activeClassName='active' to='/'>
							My Todo Lists
						</NavLink>
					</li>
					<li>
						<NavLink activeClassName='active' to='/lists'>
							Lists
						</NavLink>
					</li>
					<li>
						<NavLink activeClassName='active' to='/todos'>
							All Todos
						</NavLink>
					</li>
					<li>
						<NavLink activeClassName='active' to='/signup'>
							SignUp
						</NavLink>
					</li>
					<li>
						<NavLink activeClassName='active' to='/login'>
							Login
						</NavLink>
					</li>
				</ul>
			</nav>
		</header>
	);
}
