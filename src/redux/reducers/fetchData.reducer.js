/* Constants */
import {
	FETCH_DATA_PENDING,
	FETCH_DATA_SUCCESS,
	FETCH_DATA_FAILED
} from "../constants/fetchData.constant";

/* Initialize State */
const initialState = {
	users: [],
	isPending: false,
	error: ""
};

/* Reducer Function */
export const fetchDataReducer = (state = initialState, action = {}) => {
	switch (action.type) {
		case FETCH_DATA_PENDING:
			return { ...state, isPending: true };
		case FETCH_DATA_SUCCESS:
			return { ...state, users: action.payload, isPending: false };
		case FETCH_DATA_FAILED:
			return { ...state, error: action.payload, isPending: false };
		default:
			return state;
	}
};
