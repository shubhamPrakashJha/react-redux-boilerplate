/* React */
import React from "react";
import logo from "../../logo.svg";
import "./starter-page.styles.scss";

/* React-router */
import { Link } from "react-router-dom";

/* Redux */
// Write Redux imports here

const StarterPage = () => {
	return (
		<header className="App-header">
			<img src={logo} className="App-logo" alt="logo" />
			<p>
				Edit <code>src/App.js</code> and save to reload.
			</p>
			<Link className="App-link" to="/redux-demo">
				Route To Redux Demo Page
			</Link>
		</header>
	);
};

export default StarterPage;
