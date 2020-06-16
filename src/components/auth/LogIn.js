import React, {useState} from 'react';
import {signIn} from '../../store/actions/authActions';
import {connect} from 'react-redux';
import {MDBContainer, MDBRow, MDBCol, MDBInput, MDBBtn} from 'mdbreact';

const LogIn = (props) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const handleEmail = (event) => {
    setEmail(event.target.value);
  };
  const handlePassword = (event) => {
    setPassword(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    props.onSignIn({email, password});
  };
  return (
    <MDBContainer>
      <MDBRow>
        <MDBCol md='6'>
          <form>
            <p className='h5 text-center mb-4'>Log In</p>
            <div className='grey-text'>
              <MDBInput
                label='Type your email'
                icon='envelope'
                group
                type='email'
                validate
                error='wrong'
                success='right'
                onChange={handleEmail}
              />
              <MDBInput
                label='Type your password'
                icon='lock'
                group
                type='password'
                validate
                onChange={handlePassword}
              />
            </div>
            <div className='text-center'>
              <MDBBtn onClick={handleSubmit}>Login</MDBBtn>
              <div>{props.authError ? <p>{props.authError}</p> : null}</div>
            </div>
          </form>
        </MDBCol>
      </MDBRow>
    </MDBContainer>
  );
};

const mapStateToProps = (state) => {
  console.log(state);
  return {
    authError: state.auth.authError,
    auth: state.firebase.auth,
  };
};
const mapDispatchToProps = (dispatch) => {
  return {
    onSignIn: (credentials) => dispatch(signIn(credentials)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(LogIn);

// const FormPage = () => {
// return (
// <MDBContainer>
//   <MDBRow>
//     <MDBCol md="6">
//       <form>
//         <p className="h5 text-center mb-4">Sign in</p>
//         <div className="grey-text">
//           <MDBInput label="Type your email" icon="envelope" group type="email" validate error="wrong"
//             success="right" />
//           <MDBInput label="Type your password" icon="lock" group type="password" validate />
//         </div>
//         <div className="text-center">
//           <MDBBtn>Login</MDBBtn>
//         </div>
//       </form>
//     </MDBCol>
//   </MDBRow>
// </MDBContainer>
// );
// };
