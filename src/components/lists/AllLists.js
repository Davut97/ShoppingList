import React from 'react';
import Lists from './Lists';
import { Link, Redirect } from 'react-router-dom';
import {
	createCompletedList,
	addItemToCompletedLists,
	deleteDoc,
} from '../../store/actions/listActions';
import { firestoreConnect } from 'react-redux-firebase';
import { compose } from 'redux';
import { connect } from 'react-redux';

const AllLists = props => {
	// console.log(props);
	const { lists, auth } = props;
	const handleToggleComplete = (list, items) => {
		const { id, title } = list;
		// console.log(title, id);
		props.createCompletedList({ title: title, listId: id });

		items &&
			items.forEach(item => {
				props.addItemToCompletedLists({ item: item, listId: id });
			});
		props.deleteDoc(id);
	};
	if (!auth.uid) return <Redirect to='/signin' />;

	return (
		<div>
			{lists &&
				lists.map(list => {
					// console.log(list);
					return (
						<>
							<Link to={`list/${list.id}`} key={list.id}>
								<Lists list={list} />
							</Link>
							<button
								type='button'
								onClick={() => handleToggleComplete(list, list.items)}
							>
								Mark as Completed
							</button>
						</>
					);
				})}
		</div>
	);
};

const mapDispatchToProps = dispatch => {
	return {
		createCompletedList: list => dispatch(createCompletedList(list)),
		addItemToCompletedLists: items => dispatch(addItemToCompletedLists(items)),
		deleteDoc: items => dispatch(deleteDoc(items)),
	};
};
const mapStateToProps = state => {
	console.log(state);
	return {
		auth: state.firebase.auth,
	};
};
export default compose(
	firestoreConnect(() => ['CompletedLists']),
	connect(mapStateToProps, mapDispatchToProps)
)(AllLists);
