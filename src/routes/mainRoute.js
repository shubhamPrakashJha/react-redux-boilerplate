/* React */
import React from "react";

/* React-router */
import { Route, Switch } from "react-router-dom";

/* Components Imports */
import SearchWidget from "../containers/search-widget/search-widget.component";
import StarterPage from "../pages/starter-page/starter-page.component";

const MainRoutes = () => {
	return (
		<Switch>
			<Route exact path="/">
				<StarterPage />
			</Route>
			<Route path="/redux-demo">
				<SearchWidget />
			</Route>
		</Switch>
	);
};

export default MainRoutes;
