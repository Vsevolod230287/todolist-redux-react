import React from 'react'
import PropTypes from 'prop-types'

export default function todo({ todo, toggleTodo, removeTodo }) {
	return (
		<li
			className={todo.completed ? 'completed' : ''}
			onClick={() => toggleTodo(todo, !todo.completed)}
		>
			<span className={todo.completed ? 'completed' : 'uncomplete'} />

			{todo.todo}
			<span
				className='cross'
				onClick={e => {
					e.stopPropagation()
					removeTodo(todo)
				}}
			/>
		</li>
	)
}
todo.defaultProps = {
	id: 0,
}

todo.propTypes = {
	todoItem: PropTypes.shape({
		completed: PropTypes.bool,
		todo: PropTypes.string,
		id: PropTypes.number,
	}),
	toggleTodo: PropTypes.func.isRequired,
	id: PropTypes.number,
	removeTodo: PropTypes.func.isRequired,
}
