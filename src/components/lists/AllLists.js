import React from 'react';
import Lists from './Lists';
import {Link, Redirect} from 'react-router-dom';
import {
  createCompletedList,
  addItemToCompletedLists,
  deleteDoc,
} from '../../store/actions/listActions';
import {firestoreConnect} from 'react-redux-firebase';
import {compose} from 'redux';
import {connect} from 'react-redux';

const AllLists = (props) => {
  // console.log(props);
  const {lists, auth} = props;

  if (!auth.uid) return <Redirect to='/signin' />;

  return (
    <div>
      {lists &&
        lists.map((list) => {
          // console.log(list);
          return (
            <>
              <Link to={`list/${list.id}`} key={list.id}>
                <Lists list={list} />
              </Link>
            </>
          );
        })}
    </div>
  );
};

const mapDispatchToProps = (dispatch) => {
  return {
    createCompletedList: (list) => dispatch(createCompletedList(list)),
    addItemToCompletedLists: (items) =>
      dispatch(addItemToCompletedLists(items)),
    deleteDoc: (items) => dispatch(deleteDoc(items)),
  };
};
const mapStateToProps = (state) => {
  console.log(state);
  return {
    auth: state.firebase.auth,
  };
};
export default compose(
  firestoreConnect(() => ['CompletedLists']),
  connect(mapStateToProps, mapDispatchToProps)
)(AllLists);
