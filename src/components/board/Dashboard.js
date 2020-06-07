import React from 'react';
import AllLists from '../lists/AllLists';
import { connect } from 'react-redux';
import { compose } from 'redux';
import { firestoreConnect } from 'react-redux-firebase';

const Dashboard = ({ lists }) => {
  return (
    <div>
      <AllLists lists={lists} />
    </div>
  );
};
const mapStateToProps = (state) => {
  console.log(state);
  return {
    lists: state.firestore.ordered.lists,
  };
};
export default compose(connect(mapStateToProps), firestoreConnect([{ collection: 'lists' }]))(Dashboard);
