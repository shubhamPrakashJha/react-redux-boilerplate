/* Constants */
import { CHANGE_SEARCH_FIELD } from "../constants/search.constants";

/* Initialize State */
const initialStateSearch = {
	searchTerm: ""
};

/* Reducer */
export const searchReducer = (state = initialStateSearch, action = {}) => {
	switch (action.type) {
		case CHANGE_SEARCH_FIELD:
			return {
				...state,
				searchTerm: action.payload
			};
		default:
			return state;
	}
};
