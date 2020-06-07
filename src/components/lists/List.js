import React, { useState } from 'react';
import { connect } from 'react-redux';
import { firestoreConnect } from 'react-redux-firebase';
import { compose } from 'redux';
import { addItem } from '../../store/actions/listActions';

const List = (props) => {
  console.log(props.list); // to see match.params.id
  const { list } = props;
  const id = props.match.params.id;
  const [name, setName] = useState('');
  const [amount, setAmount] = useState(0);
  const handleChangeName = (event) => {
    setName(event.target.value);
  };
  const handleChangeAmount = (event) => {
    setAmount(event.target.value);
  };
  const handleSubmit = (event) => {
    event.preventDefault();
    console.log(name, amount, id);
    props.addItem({ name: name, amount: amount, id: id });
  };

  if (list) {
    return (
      <div>
        <span>
          {props.list.title}-{id}
        </span>
        <div>
          <form onSubmit={handleSubmit}>
            <h5>Create list</h5>
            <div>
              <label htmlFor="name">Name</label>
              <input type="text" id="name" onChange={handleChangeName} />
            </div>
            <div>
              <label htmlFor="number">Amount</label>
              <input type="number" id="amount" onChange={handleChangeAmount} />
            </div>

            <div>
              <button>Add item</button>
            </div>
          </form>
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
const mapDispatchToProps = (dispatch) => {
  return {
    addItem: (list) => dispatch(addItem(list)),
  };
};
export default compose(
  connect(mapStateToProps, mapDispatchToProps),
  firestoreConnect((props) => [{ collection: 'list', doc: props.match.params.id }])
)(List);
