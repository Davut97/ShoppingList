import React, { useState } from 'react';
import { connect } from 'react-redux';

import { createList } from '../../store/actions/listActions';

const CreatList = (props) => {
  // console.log(props);
  const [title, setTitle] = useState('');
  const handleChangeTitle = (event) => {
    setTitle(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    // console.log(title);
    props.createList({ title: title });
  };
  return (
    <div>
      <form onSubmit={handleSubmit}>
        <h5>Create list</h5>
        <div>
          <label htmlFor="title">title</label>
          <input type="text" id="title" onChange={handleChangeTitle} />
        </div>

        <div>
          <button>create</button>
        </div>
      </form>
    </div>
  );
};

const mapDispatchToProps = (dispatch) => {
  return {
    createList: (list) => dispatch(createList(list)),
  };
};
export default connect(null, mapDispatchToProps)(CreatList);
