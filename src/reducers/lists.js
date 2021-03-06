import { LISTS, ADD_LIST, REMOVE_LIST, TOGGLE_LIST } from '../actions/actiontypes'

export default function listsReducer(state = [], action) {
	switch (action.type) {
		case `${LISTS}_FULFILLED`:
			return action.payload.data.result.data


		case `${ADD_LIST}_FULFILLED`:
			return [action.payload.data.result, ...state]


		    case `${REMOVE_LIST}_FULFILLED`:
            {
                const success = action.payload.data.success;

                if (!success) {
                    return state;
                }

                return state.filter(list => success && list.id !== action.payload.config.id);
            }


		case `${TOGGLE_LIST}_FULFILLED`:
			return state.map(list => {
				if (list.id !== action.payload.data.id) {
					return list
				}
				return action.payload.data
			})

		default:
			return state
	}
}
