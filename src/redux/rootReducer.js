/* Redux */
import { combineReducers } from "redux";

/* Add Custom Reducers */
import { searchReducer } from "./reducers/search.reducer";
import { fetchDataReducer } from "./reducers/fetchData.reducer";

/* Combine Reducers */
export const rootReducer = combineReducers({
	searchReducer,
	fetchDataReducer
});
