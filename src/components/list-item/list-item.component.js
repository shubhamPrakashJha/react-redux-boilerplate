/* React */
import React from "react";
import "./list-item.styles.scss";

const ListItem = ({ children, ...otherListProps }) => {
	return (
		<li className="list-item" {...otherListProps}>
			{children}
		</li>
	);
};

export default ListItem;
