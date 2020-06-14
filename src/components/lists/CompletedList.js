import React from 'react';
import { connect } from 'react-redux';
import { firestoreConnect } from 'react-redux-firebase';
import { compose } from 'redux';
import CompletedItem from './CompletedItem';
import { Redirect } from 'react-router-dom';

const CompletedList = props => {
	// console.log(props.list); // to see match.params.id
	const { list, items, auth } = props;
	// console.log(props);

	const id = props.match.params.id;

	if (auth.uid) {
		return (
			<div>
				<span>
					{props.list.title}-{id}
				</span>
				<div>
					{items &&
						items.map(item => (
							<CompletedItem key={item.id} item={item} id={id} />
						))}
				</div>
			</div>
		);
	} else {
		return <Redirect to='/signin' />;
	}
};
const mapStateToProps = (state, ownProps) => {
	// console.log(state);
	const id = ownProps.match.params.id;
	const CompletedLists = state.firestore.data.CompletedLists;
	const list = CompletedLists ? CompletedLists[id] : null;
	// console.log(lists, id);
	const items = state.firestore.data.CompletedLists
		? state.firestore.data.CompletedLists[id].items
		: null;
	// console.log(items, list);
	return {
		list: list,
		items: items,
		auth: state.firebase.auth,
	};
};

export default compose(
	firestoreConnect(() => ['CompletedLists']),
	connect(mapStateToProps)
)(CompletedList);
