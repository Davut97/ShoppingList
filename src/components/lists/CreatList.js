import React, {useState} from 'react';
import {connect} from 'react-redux';

import {createList} from '../../store/actions/listActions';
import {Redirect} from 'react-router-dom';
import {
  MDBDropdown,
  MDBDropdownToggle,
  MDBDropdownMenu,
  MDBDropdownItem,
} from 'mdbreact';

const CreatList = (props) => {
  // console.log(props);
  const [title, setTitle] = useState('');
  const [ImageUrl, setImageUrl] = useState(null);
  const handleChangeTitle = (event) => {
    setTitle(event.target.value);
  };
  const {auth} = props;

  // console.log(props);
  const handleSubmit = (event) => {
    event.preventDefault();
    // console.log(title, ImageUrl);
    props.createList({title: title, image: ImageUrl});
    props.history.push('/');
  };
  const handleSelect = (event) => {
    event.preventDefault();
    setImageUrl(event.target.value);
  };
  if (!auth.uid) return <Redirect to='/signin' />;

  return (
    <div>
      <form>
        <h5>Create list</h5>
        <div>
          <label htmlFor='title'>title</label>
          <input type='text' id='title' onChange={handleChangeTitle} />
        </div>

        <div>
          <button type='button' onClick={handleSubmit}>
            create
          </button>
        </div>
        <MDBDropdown>
          <MDBDropdownToggle caret color='primary'>
            MDBDropdown
          </MDBDropdownToggle>
          <MDBDropdownMenu basic>
            <MDBDropdownItem value='null' onClick={handleSelect}>
              None
            </MDBDropdownItem>
            <MDBDropdownItem
              value='https://i.ibb.co/7Qbz9P5/2772795.jpg'
              onClick={handleSelect}>
              Fruits
            </MDBDropdownItem>
            <MDBDropdownItem
              value='https://i.ibb.co/7Qbz9P5/2772795.jpg'
              onClick={handleSelect}>
              Clothes
            </MDBDropdownItem>
            <MDBDropdownItem
              value='https://i.ibb.co/7Qbz9P5/2772795.jpg'
              onClick={handleSelect}>
              Spices
            </MDBDropdownItem>
            <MDBDropdownItem
              value='https://i.ibb.co/7Qbz9P5/2772795.jpg'
              onClick={handleSelect}>
              Gifts
            </MDBDropdownItem>
            <MDBDropdownItem
              value='https://i.ibb.co/74PmxLy/5205.jpg'
              onClick={handleSelect}>
              Sweets
            </MDBDropdownItem>
            <MDBDropdownItem
              value='https://i.ibb.co/7Qbz9P5/2772795.jpg'
              onClick={handleSelect}>
              Books
            </MDBDropdownItem>
            <MDBDropdownItem
              value='https://i.ibb.co/7Qbz9P5/2772795.jpg'
              onClick={handleSelect}>
              miscellaneous
            </MDBDropdownItem>
            <MDBDropdownItem
              value='https://i.ibb.co/7Qbz9P5/2772795.jpg'
              onClick={handleSelect}>
              Vegetables
            </MDBDropdownItem>
          </MDBDropdownMenu>
        </MDBDropdown>
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
