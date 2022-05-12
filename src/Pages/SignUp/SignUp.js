import React, { useState } from 'react';
import './SignUp.css';
import { MDBContainer, MDBBtn, MDBRow, MDBCol, MDBCheckbox, MDBInput } from 'mdb-react-ui-kit';
import Axios from 'axios';
import { Navigate } from "react-router-dom";
import md5 from 'md5';

function SignUp() {

  const [fname, setFName] = useState("");
  const [lname, setLName] = useState("");
  const [email, setEmail] = useState("");
  const [pwd, setPwd] = useState("");
  const [cpwd, setCPwd] = useState("");
  const [signedUp, setSignedUp] = useState(false);

  const firstnameHandler = event => {
    setFName(event.target.value);
  }
  const lastnameHandler = event => {
    setLName(event.target.value);
  }
  const emailHandler = event => {
    setEmail(event.target.value);
  }
  const pwdHandler = event => {
    setPwd(event.target.value);
  }
  const cpwdHandler = event => {
    setCPwd(event.target.value);
  }

  const APIkey = 'XhdfsdftyaDGANLhdfjhj346378ajk';

  const signup = (e) => {
    e.preventDefault();
    if (pwd === cpwd) {
      Axios.post(`https://healthyceylon.000webhostapp.com/signup_add.php?APIkey=${APIkey}`, null, {
        params: {
          fname: fname,
          lname: lname,
          email: email,
          pwwd: md5(pwd)
        }
      })
      .then(
        Axios.post(`https://healthyceylon.000webhostapp.com/login_retrieve.php?APIkey=${APIkey}`, null, {
      params: {
        email: email,
        pwwd: md5(pwd)
      }
    })
      )
        .then(
          setSignedUp(true)
        )
    }
    else {
      alert("The passwords do not match!!!");
    }

  }

  return (
    <div>
      {
        signedUp
          ? <Navigate to={{ pathname: '/getstarted' }} />
          : <></>
      }
      <MDBContainer fluid className='HomeNavImage'>
        <MDBContainer>
          <MDBRow className='headerRow'>
            <MDBCol className='headertext'>
              <h1>Read Delicious</h1>
              <h1>Simple Recipes</h1>
              <MDBBtn className='headerbutton' href='http://healthyceylon.epizy.com/'>Visit Blog</MDBBtn>
            </MDBCol>
          </MDBRow>
        </MDBContainer>
      </MDBContainer>

      <MDBContainer className='logtitle'>
        <h1 className='logintxt'>Sign Up</h1>
      </MDBContainer>

      <MDBContainer className='loginFormCont'>
        <form className='loginform' onSubmit={signup}>
          <MDBRow>
            <MDBCol><MDBInput className='mb-4 inputfields' type='text' id='form1Example1' label='First Name' onChange={firstnameHandler} required /></MDBCol>
            <MDBCol><MDBInput className='mb-4 inputfields' type='text' id='form1Example2' label='Last Name' onChange={lastnameHandler} required /></MDBCol>
          </MDBRow>
          <MDBInput className='mb-4 inputfields' type='email' id='form1Example1' label='Email address' onChange={emailHandler} required />
          <MDBInput className='mb-4 inputfields' type='password' id='form1Example2' label='Password' onChange={pwdHandler} required />
          <MDBInput className='mb-4 inputfields' type='password' id='form1Example2' label='Confirm Password' onChange={cpwdHandler} required />
          <MDBRow className='mb-4'>
            <MDBCol className='d-flex justify-content-center'>
              <MDBCheckbox id='form1Example3' label='Remember me' defaultChecked />
            </MDBCol>
          </MDBRow>
          <MDBBtn type='submit' className='subbtn' block>
            Sign Up
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