import React from 'react';
import './GetStarted.css';
import { MDBContainer, MDBRow, MDBCol, MDBBtn, MDBCheckbox, MDBInput, MDBRadio, MDBBtnGroup } from 'mdb-react-ui-kit';

function GetStarted() {
  return (
    <div>
      <MDBContainer fluid className='HomeNavImage'>
        <MDBContainer>
          <MDBRow className='headerRow'>
            <MDBCol className='headertext'>
              <h1>Get Started</h1>
            </MDBCol>
          </MDBRow>
        </MDBContainer>
      </MDBContainer>

      <MDBContainer className='addmealtitle'>
        <h1 className='titletxt'>Tell Us About Yourself...</h1>
        <p className='titletxt'>This information is essential for us to determine your nutritional requirementss</p>
      </MDBContainer>

      <MDBContainer className='addmealtitle'>
        <h3 className='titletxt'>Physical Profile...</h3>
      </MDBContainer>

      <MDBContainer className='mealFormCont'>
        <form className='mealform'>
          <MDBRow>
            <MDBCol sm="4">
              <label>Objective </label>
            </MDBCol>
            <MDBCol >
              <MDBRow className='justify-content-right radiorow'>
                <MDBCol>
                  <MDBRadio btn btnColor='success' id='btn-radio' name='options' label='Lose Weight' />
                </MDBCol>
                <MDBCol>
                  <MDBRadio btn btnColor='success' id='btn-radio' name='options' label='Lose Weight' />
                </MDBCol>
                <MDBCol>
                  <MDBRadio btn btnColor='success' id='btn-radio' name='options' label='Lose Weight' />
                </MDBCol>
              </MDBRow>
            </MDBCol>
          </MDBRow>

          <MDBRow>
            <MDBCol sm="4">
              <label>Gender </label>
            </MDBCol>
            <MDBCol >
              <MDBRow className='justify-content-right radiorow'>
                <MDBCol >
                  <MDBRadio btn btnColor='success' id='btn-radio' name='options' label='Male' />
                </MDBCol>
                <MDBCol>
                  <MDBRadio btn btnColor='success' id='btn-radio' name='options' label='Female' />
                </MDBCol>
              </MDBRow>
            </MDBCol>
          </MDBRow>

          <MDBRow>
            <MDBCol sm="4">
              <label>Objective </label>
            </MDBCol>
            <MDBCol >
              <MDBBtnGroup className='inpbtn'>
                <MDBRadio btn btnColor='success' id='btn-radio' name='options' wrapperTag='span' label='Lose Weight' />
                <MDBRadio
                  btn btnColor='success' id='btn-radio2' name='options' wrapperClass='mx-2' wrapperTag='span' label='Maintain Weight' />
                <MDBRadio btn btnColor='success' id='btn-radio3' name='options' wrapperTag='span' label='Build Muscles' />
              </MDBBtnGroup>
            </MDBCol>
          </MDBRow>

          <MDBInput className='mb-4 inputfields' type='email' id='form1Example1' label='Name' />
          <MDBRow>
            <MDBCol>
              <MDBInput className='mb-4 inputfields' type='password' id='form1Example2' label='Meal ID' />
            </MDBCol>
            <MDBCol>
              <MDBInput className='mb-4 inputfields' type='password' id='form1Example2' label='Prep Time' />
            </MDBCol>
          </MDBRow>
          <MDBRow>
            <MDBCol>
              <MDBInput className='mb-4 inputfields' type='password' id='form1Example2' label='Calorie Count' />
            </MDBCol>
            <MDBCol>
              <select className='dpdown'>
                <option value='0'>Allergens</option>
                <option value='0'>Peanut</option>
                <option value='0'>Egg</option>
                <option value='0'>Egg</option>
                <option value='0'>Egg</option>
                <option value='0'>Egg</option>
                <option value='0'>Egg</option>
              </select>
            </MDBCol>
          </MDBRow>
          <MDBRow className='mb-4'>
            <MDBCol className='d-flex'>
              <label>Portion:</label>
            </MDBCol>
            <MDBCol className='d-flex'>
              <MDBCheckbox id='form1Example3' label='Breakfast' />
            </MDBCol>
            <MDBCol className='d-flex'>
              <MDBCheckbox id='form1Example3' label='Lunch' />
            </MDBCol>
            <MDBCol className='d-flex'>
              <MDBCheckbox id='form1Example3' label='Snack' />
            </MDBCol>
            <MDBCol className='d-flex'>
              <MDBCheckbox id='form1Example3' label='Dinner' />
            </MDBCol>
          </MDBRow>
          <MDBRow className='mb-4'>
            <MDBCol className='d-flex'>
              <label>Allergens:</label>
            </MDBCol>
            <MDBCol className='d-flex'>
              <MDBCheckbox id='form1Example3' label='Peanut' />
            </MDBCol>
            <MDBCol className='d-flex'>
              <MDBCheckbox id='form1Example3' label='Spinach' />
            </MDBCol>
            <MDBCol className='d-flex'>
              <MDBCheckbox id='form1Example3' label='Coconut' />
            </MDBCol>
            <MDBCol className='d-flex'>
              <MDBCheckbox id='form1Example3' label='Milk' />
            </MDBCol>
          </MDBRow>
          <MDBBtn type='submit' className='subbtn' block>
            Next
          </MDBBtn>
        </form>
      </MDBContainer>
    </div>
  )
}

export default GetStarted