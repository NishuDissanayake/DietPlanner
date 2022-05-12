import React, { useEffect, useState } from 'react';
import './Login.css';
import { MDBContainer, MDBBtn, MDBRow, MDBCol, MDBCheckbox, MDBInput } from 'mdb-react-ui-kit';
import Axios from 'axios';
import { Navigate } from "react-router-dom";
import md5 from 'md5';

function Login() {

  const [email, setEmail] = useState("");
  const [pwd, setPwd] = useState("");
  const [loggedIn, setLoggedIn] = useState(false);
  

  const APIkey = 'XhdfsdftyaDGANLhdfjhj346378ajk';

  const emailHandler = event => {
    setEmail(event.target.value);
  }
  const pwdHandler = event => {
    setPwd(event.target.value);
  }

  const [userData, setUserData] = useState([]);
  const [getfname, setGetFname] = useState("");
  const [getid, setGetId] = useState("");

  const login = (e) => {
    e.preventDefault();
    Axios.get(`https://healthyceylon.000webhostapp.com/login_retrieve.php?email=${email}&pwd=${md5(pwd)}APIkey=${APIkey}`)
    .then((res) => {
      setUserData(res.data);
      console.log(res.data);
    })
    .catch((err) => {
      console.log(err);
    })
  }
  return (
    <div>
      {
        loggedIn
          ? <Navigate to={{ pathname: '/profile' }} />
          : <></>
      }
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
        <form className='loginform' onSubmit={login}>
          <MDBInput className='mb-4 inputfields' type='email' id='form1Example1' label='Email address' onChange={emailHandler} />
          <MDBInput className='mb-4 inputfields' type='password' id='form1Example2' label='Password' onChange={pwdHandler}/>
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