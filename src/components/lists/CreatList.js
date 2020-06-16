import React, {useState} from 'react';
import {connect} from 'react-redux';

import {createList} from '../../store/actions/listActions';
import {Redirect} from 'react-router-dom';

const CreatList = (props) => {
  // console.log(props);
  const [title, setTitle] = useState('');
  const handleChangeTitle = (event) => {
    setTitle(event.target.value);
  };
  const {auth} = props;

  // console.log(props);
  const handleSubmit = (event) => {
    event.preventDefault();

    props.createList({title: title});
    props.history.push('/');
  };
  if (!auth.uid) return <Redirect to='/signin' />;

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <h5>Create list</h5>
        <div>
          <label htmlFor='title'>title</label>
          <input type='text' id='title' onChange={handleChangeTitle} />
        </div>

        <div>
          <button>create</button>
        </div>
      </form>
    </div>
  );
};
const mapStateToProps = (state) => {
  // console.log(state);
  return {
    auth: state.firebase.auth,
  };
};
const mapDispatchToProps = (dispatch) => {
  return {
    createList: (list) => dispatch(createList(list)),
  };
};
export default connect(mapStateToProps, mapDispatchToProps)(CreatList);
