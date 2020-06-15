import React from 'react';
import moment from 'moment';
import {
  MDBBtn,
  MDBCard,
  MDBCardBody,
  MDBCardImage,
  MDBCardTitle,
  MDBCardText,
  MDBCol,
} from 'mdbreact';
import {compose} from 'redux';
import {connect} from 'react-redux';
import {
  createCompletedList,
  addItemToCompletedLists,
  deleteDoc,
} from '../../store/actions/listActions';
const Lists = (props) => {
  console.log(props);
  const data = moment(props.list.createdAt.toDate()).calendar();

  const NumbersOfItems = props.list.items ? props.list.items.length : 'No';
  const handleToggleComplete = (e) => {
    e.preventDefault();
    const {id, title, items} = props.list;
    // console.log(title, id);
    props.createCompletedList({title: title, listId: id});

    items &&
      items.forEach((item) => {
        props.addItemToCompletedLists({item: item, listId: id});
      });
    props.deleteDoc(id);
  };
  return (
    <MDBCol>
      <MDBCard style={{width: '22rem'}}>
        <MDBCardImage
          className='img-fluid'
          src='https://mdbootstrap.com/img/Photos/Others/images/43.jpg'
          waves
        />
        <MDBCardBody>
          <MDBCardTitle>{props.list.title}</MDBCardTitle>
          <MDBCardText>
            This list was created {data} and has {NumbersOfItems} items
          </MDBCardText>
          <MDBBtn type='button' onClick={() => handleToggleComplete()}>
            MDBBtn
          </MDBBtn>
        </MDBCardBody>
      </MDBCard>
    </MDBCol>
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
export default connect(null, mapDispatchToProps)(Lists);
