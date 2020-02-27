/* Redux methods and Middleware */
import { createStore, applyMiddleware, compose } from "redux";
import { logger } from "redux-logger";
import ReduxThunk from "redux-thunk";

/* Import RootReducer */
import { rootReducer } from "./rootReducer";

/* Add Redux DevTools ext & middleWares */
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const middleware = [logger, ReduxThunk];

/* Create Redux Store */
export const store = createStore(
	rootReducer,
	composeEnhancers(applyMiddleware(...middleware))
);
