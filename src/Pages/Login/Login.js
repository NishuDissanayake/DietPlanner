import React from 'react';
import './Login.css';
import { MDBContainer, MDBBtn, MDBRow, MDBCol, MDBCheckbox, MDBInput } from 'mdb-react-ui-kit';

function Login() {
  return (
    <div>
      <MDBContainer fluid className='HomeNavImage'>
        <MDBContainer>
          <MDBRow className='headerRow'>
            <MDBCol className='headertext'>
              <h1>Read Delicious</h1>
              <h1>Simple Recipes</h1>
              <MDBBtn className='headerbutton'>Visit Blog</MDBBtn>
            </MDBCol>
          </MDBRow>
        </MDBContainer>
      </MDBContainer>

      <MDBContainer className='logtitle'>
        <h1 className='logintxt'>Login</h1>
      </MDBContainer>

      <MDBContainer className='loginFormCont'>
        <form className='loginform'>
          <MDBInput className='mb-4 inputfields' type='email' id='form1Example1' label='Email address' />
          <MDBInput className='mb-4 inputfields' type='password' id='form1Example2' label='Password' />
          <MDBRow className='mb-4'>
            <MDBCol className='d-flex justify-content-center'>
              <MDBCheckbox id='form1Example3' label='Remember me' defaultChecked />
            </MDBCol>
            <MDBCol>
              <a href='#!' className='greentext'>Forgot password?</a>
            </MDBCol>
          </MDBRow>
          <MDBBtn type='submit' className='subbtn' block>
            Sign in
          </MDBBtn>
          <div className='text-center'>
            <p className='regtxt'>
              Not a member? <a href='#!' className='greentext'>Register</a>
            </p>
          </div>
        </form>
      </MDBContainer>
    </div>
  )
}

export default Login