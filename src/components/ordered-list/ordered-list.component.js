/* react */
import React from "react";
import "./ordered-list.styles.scss";

/* Components */
import ListItem from "../list-item/list-item.component";

const OrderedList = ({ children, list, ...otherOlProps }) => {
	return (
		<ol className="ordered-list" {...otherOlProps}>
			{children ||
				list.map(item => <ListItem key={item.id}>{item.name}</ListItem>)}
		</ol>
	);
};

export default OrderedList;
