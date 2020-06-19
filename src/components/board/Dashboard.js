import React, {useState, useEffect} from 'react';
import AllLists from '../lists/AllLists';
import {connect} from 'react-redux';
import {compose} from 'redux';
import {firestoreConnect} from 'react-redux-firebase';
import {Redirect} from 'react-router-dom';
import {
  MDBDropdown,
  MDBDropdownToggle,
  MDBDropdownMenu,
  MDBDropdownItem,
  MDBBtn,
  MDBIcon,
} from 'mdbreact';

const Dashboard = ({lists, auth}) => {
  // console.log(lists);
  const [isOPen, setIsOpen] = useState(false);

  const [AllList, setAllList] = useState(lists);
  function compareTitleAsc(a, b) {
    // Use toUpperCase() to ignore character casing
    const bandA = a.title.toUpperCase();
    const bandB = b.title.toUpperCase();

    let comparison = 0;
    if (bandA > bandB) {
      comparison = 1;
    } else if (bandA < bandB) {
      comparison = -1;
    }
    return comparison;
  }

  function compareTitleDesc(a, b) {
    // Use toUpperCase() to ignore character casing
    const bandA = a.title.toUpperCase();
    const bandB = b.title.toUpperCase();

    let comparison = 0;
    if (bandA > bandB) {
      comparison = -1;
    } else if (bandA < bandB) {
      comparison = 1;
    }
    return comparison;
  }

  function compareTimeAsc(a, b) {
    // Use toUpperCase() to ignore character casing
    const bandA = a.createdAt;
    const bandB = b.createdAt;

    let comparison = 0;
    if (bandA > bandB) {
      comparison = -1;
    } else if (bandA < bandB) {
      comparison = 1;
    }
    return comparison;
  }
  function compareTimeDesc(a, b) {
    // Use toUpperCase() to ignore character casing
    const bandA = a.createdAt;
    const bandB = b.createdAt;

    let comparison = 0;
    if (bandA > bandB) {
      comparison = 1;
    } else if (bandA < bandB) {
      comparison = -1;
    }
    return comparison;
  }
  let id = 0;
  const sort = (e) => {
    if (e.target.id === 'TitleAsc') {
      setAllList(lists.slice().sort(compareTitleAsc));
    } else if (e.target.id === 'TitleDesc') {
      setAllList(lists.slice().sort(compareTitleDesc));
    } else if (e.target.id === 'TimeDesc') {
      setAllList(lists.slice().sort(compareTimeDesc));
    } else {
      setAllList(lists.slice().sort(compareTimeAsc));
    }
  };
  useEffect(() => {
    setAllList(lists);
  }, [lists]);
  const HandleIsOpen = (e) => {
    e.preventDefault();
    console.log(isOPen);
    setIsOpen(!isOPen);
    console.log(isOPen);
  };

  if (auth.uid) {
    return (
      <div>
        <div>
          <MDBDropdown>
            <MDBDropdownToggle
              color='mdb-color'
              caret
              style={{marginLeft: '120px', marginTop: '20px'}}>
              Arrange
            </MDBDropdownToggle>
            <MDBDropdownMenu basic>
              <MDBDropdownItem id='TitleAsc' onClick={sort}>
                A-Z
              </MDBDropdownItem>
              <MDBDropdownItem id='TitleDesc' onClick={sort}>
                Z-A
              </MDBDropdownItem>
              <MDBDropdownItem divider />
              <MDBDropdownItem id='TimeAsec' onClick={sort}>
                New to old
              </MDBDropdownItem>

              <MDBDropdownItem id='TimeDesc' onClick={sort}>
                {' '}
                Old to new
              </MDBDropdownItem>
            </MDBDropdownMenu>
          </MDBDropdown>
          <MDBBtn type='button' onClick={(e) => HandleIsOpen(e)}>
            <MDBIcon icon='sync-alt' />
          </MDBBtn>
        </div>
        <AllLists key={id} lists={AllList ? AllList : lists} />
      </div>
    );
  } else {
    return <Redirect to='/login' />;
  }
};

const mapStateToProps = (state) => {
  // console.log(state.firestore.ordered.lists);
  return {
    lists: state.firestore.ordered.lists,
    auth: state.firebase.auth,
  };
};

export default compose(
  connect(mapStateToProps),
  firestoreConnect(() => ['lists'])
)(Dashboard);
