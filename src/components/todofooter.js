import React from 'react'
import { NavLink } from 'react-router-dom'

export default function todoFooter({	match,	filter, activeFilter, filterTodo }) {
	const todoUrl = match.url

	const all = filter === 'All' ? <li className="active">{filter}</li> :  <li><NavLink to={todoUrl + '?filter=All'}>All</NavLink></li>

	const todo = filter === 'Todo' ? <li className="active">{filter}</li> : <li><NavLink to={todoUrl + '?filter=Todo'}>Todo</NavLink></li>

	const completed = filter === 'Completed' ? <li className="active">{filter}</li> : <li><NavLink to={todoUrl + '?filter=Completed'}>Completed</NavLink></li>

	return (
		<div className='footer'>
			<ul className="menu">
				{all}
				{todo}
			{completed}
			</ul>
		</div>
	)
}
