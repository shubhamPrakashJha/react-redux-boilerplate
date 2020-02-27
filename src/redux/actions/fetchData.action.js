/* Import ActionType Constants */
import {
	FETCH_DATA_PENDING,
	FETCH_DATA_SUCCESS,
	FETCH_DATA_FAILED
} from "../constants/fetchData.constant";

/*
	Redux Thunk Format:
	Action(Async) Creator: => return dispatch(action) 
*/
export const fetchDataAction = () => dispatch => {
	dispatch({ type: FETCH_DATA_PENDING });
	fetch("https://jsonplaceholder.typicode.com/users")
		.then(response => response.json())
		.then(data => dispatch({ type: FETCH_DATA_SUCCESS, payload: data }))
		.catch(error => dispatch({ type: FETCH_DATA_FAILED, payload: error }));
};
