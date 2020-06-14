import React from 'react';
import { compose } from 'redux';
import { connect } from 'react-redux';
import { firestoreConnect } from 'react-redux-firebase';
import Lists from './Lists';
import { Link, Redirect } from 'react-router-dom';

const CompletedLists = ({ CompletedLists, auth }) => {
	// console.log(CompletedLists);
	if (!auth.uid) return <Redirect to='/signin' />;

	return (
		<div>
			{CompletedLists &&
				CompletedLists.map(list => {
					// console.log(list);
					return (
						<>
							<Link to={`completedlist/${list.id}`} key={list.id}>
								<Lists list={list} />
							</Link>
						</>
					);
				})}
		</div>
	);
};
const mapStateToProps = state => {
	// console.log(state);
	return {
		CompletedLists: state.firestore.ordered.CompletedLists,
		auth: state.firebase.auth,
	};
};

export default compose(
	connect(mapStateToProps),
	firestoreConnect(() => ['CompletedLists'])
)(CompletedLists);
