import React from 'react';
import { connect } from 'react-redux';
import { firestoreConnect } from 'react-redux-firebase';
import { compose } from 'redux';
const List = (props) => {
  console.log(props.list); // to see match.params.id
  const { list } = props;

  const id = props.match.params.id;
  if (list) {
    return (
      <div>
        <span>
          {props.list.title}-{id}
        </span>
        <div>
          <span>name</span>
          <span>amount</span>
        </div>
      </div>
    );
  } else {
    return <p>Loading...</p>;
  }
};
const mapStateToProps = (state, ownProps) => {
  // console.log(ownProps);
  const id = ownProps.match.params.id;
  const lists = state.firestore.data.lists;
  const list = lists ? lists[id] : null;
  return {
    list: list,
    auth: state.firebase.auth,
  };
};

export default compose(
  connect(mapStateToProps),
  firestoreConnect((props) => [{ collection: 'list', doc: props.match.params.id }])
)(List);
