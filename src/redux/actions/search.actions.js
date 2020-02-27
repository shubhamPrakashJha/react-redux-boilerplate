/* Import ActionType Constants */
import { CHANGE_SEARCH_FIELD } from "../constants/search.constants";

/* Action(sync) Creator => return action*/
export const changeSearchField = query => ({
	type: CHANGE_SEARCH_FIELD,
	payload: query
});
