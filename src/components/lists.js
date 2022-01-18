import React from 'react'
import AddNewLists from '../containers/addNewLists'
import ListItem from './listItem'

export default function list({ lists }) {
	return (
		<div className='container'>
			<AddNewLists />
			<h1>Lists</h1>
			<ul className='lists'>
				{lists.map(list => (
					<ListItem key={list.id} list={list} id={list.id} />
				))}
			</ul>
		</div>
	)
}
