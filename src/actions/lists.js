import {LISTURL} from '../config/config'
import axios from 'axios'

import {
	LISTS,
	ADD_LIST,
	REMOVE_LIST,
	TOGGLE_LIST
} from './actiontypes'

export const getLists = () => {
	return {
		type: LISTS,
		payload: axios.get(LISTURL)
	}
}



export const addList = list => {
	return {
		type: ADD_LIST,
		payload: axios.post(LISTURL, {
		 name: list,
		 completed: false
		}),
	}
}

export const removeList = i => {
	return {
		type: REMOVE_LIST,
		payload: axios.delete(LISTURL + '/' + i, { id: i }),
	}
}

export const toggleList = (i, value) => {
	return {
		type: TOGGLE_LIST,
		payload: axios.patch(LISTURL + '/' + i, {completed: value }),
	}
}
