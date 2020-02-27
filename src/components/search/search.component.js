/* raect */
import React from "react";
import "./search.styles.scss";

const SearchField = ({ ...otherSearchProps }) => {
	return <input className="input-search" type="search" {...otherSearchProps} />;
};

export default SearchField;
