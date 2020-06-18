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
  MDBRow,
  MDBIcon,
  MDBContainer,
} from 'mdbreact';
import {connect} from 'react-redux';
import {
  createCompletedList,
  addItemToCompletedLists,
  deleteDoc,
} from '../../store/actions/listActions';
import './Lists.css';

const Lists = (props) => {
  // console.log(props);
  const data = moment(props.list.createdAt.toDate()).calendar();
  // console.log(props.list.isCompleted);
  const {image} = props.list;

  const NumbersOfItems = props.list.items ? props.list.items.length : 'No';
  const handleToggleComplete = (e) => {
    e.preventDefault();
    const {id, title, items} = props.list;
    // console.log(title, id);
    props.createCompletedList({title: title, listId: id, image: image});
    let listName = props.list.isCompleted ? 'CompletedLists' : 'lists';
    items &&
      items.forEach((item) => {
        props.addItemToCompletedLists({item: item, listId: id});
      });
    props.deleteDoc({itemId: id, collectionName: listName});
  };
  const deleteList = (e) => {
    e.preventDefault();
    let listName = props.list.isCompleted ? 'CompletedLists' : 'lists';

    const {id} = props.list;
    // console.log(listName);
    props.deleteDoc({itemId: id, collectionName: listName});
  };
  if (props.isOpen) {
    /// add new style here !!!! inside the return(here)
    return (
      <MDBContainer>
        <MDBRow>
          <MDBCol size='12'>
            <MDBCard className='info-color text-center z-depth-2'>
              <MDBCardBody>
                <p className='white-text mb-0'>{props.list.title}</p>
              </MDBCardBody>
            </MDBCard>
          </MDBCol>
          <MDBCol size='12'>
            <MDBCard className='mdb-color text-center z-depth-2'>
              <MDBCardBody>
                <p className='white-text mb-0'>
                  {' '}
                  This list was created {data} and has {NumbersOfItems} items
                </p>
                <br></br>
                <p style={{borderTop: '1px'}}>05/10/2015</p>
              </MDBCardBody>
            </MDBCard>
          </MDBCol>
          <MDBCol size='12'>
            <br></br>
            <br></br>
          </MDBCol>
        </MDBRow>
      </MDBContainer>
    );
  } else {
    return (
      // <div style= {{ display: 'flex', justifyContent: 'center' }} class="text-center">

      <>
        <MDBCard cascade>
          <MDBCardImage
            cascade
            className='img-fluid'
            overlay='white-light'
            hover
            src={image}
            onError={(i) => (i.target.style.display = 'none')}
          />
          <MDBBtn
            floating
            tag='a'
            className='ml-auto mr-4 lighten-3 mdb-coalor'
            onClick={(e) => handleToggleComplete(e)}>
            <MDBIcon
              icon='chevron-right'
              className='mdb-color lighten-3'
              type='button'
            />
          </MDBBtn>
          <MDBCardBody cascade>
            <MDBCardTitle>{props.list.title}</MDBCardTitle>
            <hr />
            <MDBCardText>
              This list was created {data} and has {NumbersOfItems} items
            </MDBCardText>
          </MDBCardBody>
          <div className='rounded-bottom mdb-color lighten-3 text-center pt-3'>
            <ul className='list-unstyled list-inline font-small'>
              <li className='list-inline-item pr-2 white-text'>
                <MDBIcon far icon='clock' /> 05/10/2015
              </li>
            </ul>
          </div>
        </MDBCard>
        <button type='button' onClick={(e) => deleteList(e)}>
          Delete List
        </button>
      </>

      // </div>
    );
  }
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
