// Import the necessary modules
import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';
import '../styles/Login.css';
import Svg from './login.svg'
import {
  MDBBtn,
  MDBContainer,
  MDBRow,
  MDBCol,
  MDBCard,
  MDBCardBody,
  MDBInput,
  MDBCheckbox
} from 'mdb-react-ui-kit';
import 'mdb-react-ui-kit/dist/css/mdb.min.css';

function Login() {
  // const history = useHistory();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [emailError, setEmailError] = useState('');
  const [passwordError, setPasswordError] = useState('');
  const [showErrorModal, setShowErrorModal] = useState(false); // State to control modal visibility
  const [errorMessage, setErrorMessage] = useState('')

  const handleLogin = () => {
    // Validate email format
    const isValidEmail = /\S+@\S+\.\S+/.test(email);
    if (!isValidEmail) {
      setErrorMessage('Please enter a valid email address');
      setShowErrorModal(true);
      return;
    }
  
    if (!password && !isValidEmail) {
      setErrorMessage('Please enter your password');
      setShowErrorModal(true);
      return;
    }
  
    const loginSuccessful = true; // For demonstration purposes, assuming login fails
  
    if (loginSuccessful) {
      window.location.href = '/';
    } else {
      // Set the error message and display the modal
      setErrorMessage('Login failed. Please check your email and password.');
      setShowErrorModal(true);
    }
  };
  

  const ErrorModal = () => {
    return (
      <div className={`modal fade ${showErrorModal ? 'show' : ''}`} style={{ display: showErrorModal ? 'block' : 'none' }}>
        <div className="modal-dialog modal-dialog-centered">
          <div className="modal-content">
            <div className="modal-header">
              <h5 className="modal-title">Error</h5>
              <button type="button" className="btn-close" aria-label="Close" onClick={() => setShowErrorModal(false)}></button>
            </div>
            <div className="modal-body">
              <p>{errorMessage}</p>
            </div>
            <div className="modal-footer">
              <button type="button" className="btn btn-primary" onClick={() => setShowErrorModal(false)}>Close</button>
            </div>
          </div>
        </div>
      </div>
    );
  };
  

  return (
    <MDBContainer fluid className='p-4 background-radial-gradient overflow-hidden'>

      <MDBRow>

        <MDBCol md='6' className='text-center text-md-start d-flex flex-column justify-content-center'>

          <h1 className="my-4 display-3 fw-bold ls-tight px-3" style={{color: 'hsl(218, 81%, 95%)',fontSize:"80px"}}>
            trendCart <br />
            <span style={{color: 'hsl(218, 81%, 75%)',fontSize:"70px"}}>where fashion begins</span>
          </h1>

        
          {/* <LoginSvg/> */}
          <img style= {{height:"400px", width:"400px",marginLeft:"100px"}} src={require('./login.svg').default} alt="Login" />

        </MDBCol>
        

        <MDBCol md='6' className='position-relative'>

          <div id="radius-shape-1" className="position-absolute rounded-circle shadow-5-strong"></div>
          <div id="radius-shape-2" className="position-absolute shadow-5-strong"></div>

          <MDBCard className='my-5 bg-glass'>
            <MDBCardBody className='p-5'>

              <h2 style={{marginBottom:"50px", fontWeight:"bold"}}>Sign In</h2>
              
              <MDBInput 
                wrapperClass='mb-4' 
                label='Email' 
                id='form3' 
                type='email'
                required
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                errorMessage={emailError}
                

              />               

              <MDBInput 
                wrapperClass='mb-4' 
                label='Password' 
                id='form4' 
                type='password'
                required
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                errorMessage={passwordError}
                
              /> 
              <ErrorModal/>

              <div className='d-flex justify-content-center mb-2'>
                <MDBCheckbox name='flexCheck' value='' id='flexCheckDefault' label='Subscribe to our newsletter' />
              </div>
              <MDBCol className='text-center mb-5'><div>Forget Password?</div></MDBCol>
              <MDBBtn className='w-100 mb-4' size='md' onClick={handleLogin}>login</MDBBtn>

            </MDBCardBody>
          </MDBCard>

        </MDBCol>

      </MDBRow>

    </MDBContainer>
  );
}

export default Login;
