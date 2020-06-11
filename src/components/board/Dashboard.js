import React from 'react';
import AllLists from '../lists/AllLists';
import { connect } from 'react-redux';
import { compose } from 'redux';
import { firestoreConnect } from 'react-redux-firebase';

const Dashboard = ({ lists }) => {
	if (lists) {
		return (
			<div>
				<AllLists lists={lists} />
			</div>
		);
	} else {
		return <p>loading...</p>;
	}
};
const mapStateToProps = state => {
	// console.log(state);
	return {
		lists: state.firestore.ordered.lists,
	};
};
export default compose(
	connect(mapStateToProps),
	firestoreConnect(() => ['lists'])
)(Dashboard);
