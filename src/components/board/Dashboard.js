import React from 'react';
import AllLists from '../lists/AllLists';
import { connect } from 'react-redux';
import { compose } from 'redux';
import { firestoreConnect } from 'react-redux-firebase';
import { Redirect } from 'react-router-dom';

const Dashboard = ({ lists, auth }) => {
	if (auth.uid) {
		return (
			<div>
				<AllLists lists={lists} />
			</div>
		);
	} else {
		return <Redirect to='/signin' />;
	}
};
const mapStateToProps = state => {
	// console.log(state);
	return {
		lists: state.firestore.ordered.lists,
		auth: state.firebase.auth,
	};
};
export default compose(
	connect(mapStateToProps),
	firestoreConnect(() => ['lists'])
)(Dashboard);
