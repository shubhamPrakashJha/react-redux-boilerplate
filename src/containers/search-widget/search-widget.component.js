/* React */
import React from "react";
import "./search-widget.styles.scss";

/* Redux */
import { connect } from "react-redux";

/* Redux Actions */
import { changeSearchField } from "../../redux/actions/search.actions";
import { fetchDataAction } from "../../redux/actions/fetchData.action";

/* Components */
import SearchField from "../../components/search/search.component";
import OrderedList from "../../components/ordered-list/ordered-list.component";

class SearchWidget extends React.Component {
	componentDidMount() {
		this.props.fetchUsers();
	}

	render() {
		// Destructure Props
		const { data, searchTerm, handleChange } = this.props;
		// Filter List
		const filteredList = data.filter(result =>
			result.name.toLowerCase().includes(searchTerm.toLowerCase())
		);

		return (
			<div className="App-header">
				<SearchField
					name="searchTerm"
					placeholder="search..."
					value={searchTerm}
					onChange={handleChange}
				/>
				<OrderedList list={filteredList} />
			</div>
		);
	}
}

/* Map State And Action-Dispatcher to components Props*/
const mapStateToProps = state => ({
	searchTerm: state.searchReducer.searchTerm,
	data: state.fetchDataReducer.users
});

const mapDispatchToProps = dispatch => ({
	handleChange: e => dispatch(changeSearchField(e.target.value)),
	fetchUsers: () => dispatch(fetchDataAction())
});

/* Connect State and Dispatch fn to Component */
export default connect(mapStateToProps, mapDispatchToProps)(SearchWidget);
