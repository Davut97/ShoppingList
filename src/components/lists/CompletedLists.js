import React from 'react';
import { compose } from 'redux';
import { connect } from 'react-redux';
import { firestoreConnect } from 'react-redux-firebase';
import { Link } from 'react-router-dom';
import Lists from './Lists';

const CompletedLists = ({ CompletedLists }) => {
	// console.log(CompletedLists);
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
	};
};

export default compose(
	connect(mapStateToProps),
	firestoreConnect(() => ['CompletedLists'])
)(CompletedLists);
