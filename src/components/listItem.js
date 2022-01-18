import React from 'react'
import {  removeList } from '../actions/lists'
import { Link } from 'react-router-dom'

export default function listItem({ list}) {
	return (
		<li>
			<Link
					to={
						{
						pathname: '/lists/' + list.id + '/todos',
						state: {listName: list.name}
					
					 }
				}
			>
				{list.name}
			</Link>
			<span
				className='cross'
				onClick={e => {
					e.stopPropagation()
					removeList(list.id)
				}}
			/>
		</li>
	)
}
