import React from 'react';
import './SignUp.css';
import { MDBContainer, MDBBtn, MDBRow, MDBCol, MDBCheckbox, MDBInput } from 'mdb-react-ui-kit';

function SignUp() {
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
        <h1 className='logintxt'>Sign Up</h1>
      </MDBContainer>

      <MDBContainer className='loginFormCont'>
        <form className='loginform'>
          <MDBRow>
            <MDBCol><MDBInput className='mb-4 inputfields' type='email' id='form1Example1' label='First Name' /></MDBCol>
            <MDBCol><MDBInput className='mb-4 inputfields' type='email' id='form1Example1' label='Last Name' /></MDBCol>
          </MDBRow>
          <MDBInput className='mb-4 inputfields' type='email' id='form1Example1' label='Email address' />
          <MDBInput className='mb-4 inputfields' type='password' id='form1Example2' label='Password' />
          <MDBInput className='mb-4 inputfields' type='password' id='form1Example2' label='Confirm Password' />
          <MDBRow className='mb-4'>
            <MDBCol className='d-flex justify-content-center'>
              <MDBCheckbox id='form1Example3' label='Remember me' defaultChecked />
            </MDBCol>
          </MDBRow>
          <MDBBtn type='submit' className='subbtn' block>
            Sign in
          </MDBBtn>
          <div className='text-center'>
            <p className='regtxt'>
              Already have an Account? <a href='#!' className='greentext'>Login</a>
            </p>
          </div>
        </form>
      </MDBContainer>
    </div>
  )
}

export default SignUp