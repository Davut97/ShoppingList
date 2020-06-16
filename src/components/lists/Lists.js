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
} from 'mdbreact';
import {compose} from 'redux';
import {connect} from 'react-redux';
import {
  createCompletedList,
  addItemToCompletedLists,
  deleteDoc,
} from '../../store/actions/listActions';
import './Lists.css'

const Lists = (props) => {
  // console.log(props);
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
    // <div style= {{ display: 'flex', justifyContent: 'center' }} class="text-center">
    <div class="row" style={{width: '30%', display: "inline-block", padding: "30px", margin: "0 auto"}} className="mb-4" >
    <MDBRow>
      <MDBCol>
        <MDBCard cascade>
          <MDBCardImage
            cascade
            className='img-fluid'
            overlay="white-light"
            hover
            src='https://mdbootstrap.com/img/Photos/Others/food.jpg'
          />
          <MDBBtn
            floating
            tag='a'
            className='ml-auto mr-4 lighten-3 mdb-coalor'
            action
          >
            <MDBIcon icon='chevron-right' className="mdb-color lighten-3" type='button' onClick={() => handleToggleComplete()}/>
          </MDBBtn>
          <MDBCardBody cascade>
            <MDBCardTitle>{props.list.title}</MDBCardTitle>
            <hr/>
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
      </MDBCol>
    </MDBRow>
    </div>
    // </div>
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
<<<<<<< HEAD


    // <MDBCol>
    //   <MDBCard style={{width: '22rem'}}>
    //     <MDBCardImage
    //       className='img-fluid'
    //       src='https://mdbootstrap.com/img/Photos/Others/images/43.jpg'
    //       waves
    //     />
    //     <MDBCardBody>
    //       <MDBCardTitle>{props.list.title}</MDBCardTitle>
    //       <MDBCardText>
    //         This list was created {data} and has {NumbersOfItems} items
    //       </MDBCardText>
    //       <MDBBtn type='button' onClick={() => handleToggleComplete()}>
    //         MDBBtn
    //       </MDBBtn>
    //     </MDBCardBody>
    //   </MDBCard>
    // </MDBCol>
||||||| 9f83987
=======
////test only
>>>>>>> cd3d0a93a16691f9f7f10a55e50807864afaa0c6
