import todosReducer from './todos'
import setFilterReducer from './setfilter'
import errorReducer from './error'
import listReducer from './lists'

import { combineReducers } from 'redux'

export default combineReducers({
	todos: todosReducer,
	setFilter: setFilterReducer,
	error: errorReducer,
	lists: listReducer
})
