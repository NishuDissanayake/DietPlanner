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
            <MDBCol>
              <MDBInput className='mb-4 inputfields' type='password' id='form1Example2' label='Age' />
            </MDBCol>
            <MDBCol>
            <MDBCol>
              <select className='dpdown'>
                <option value='0'>Gender</option>
                <option value='0'>Male</option>
                <option value='0'>Female</option>
              </select>
            </MDBCol>
            </MDBCol>
          </MDBRow>

          

          <MDBRow>
            <MDBCol>
              <MDBInput className='mb-4 inputfields' type='password' id='form1Example2' label='Weight in Kg' />
            </MDBCol>
            <MDBCol>
            <MDBCol>
              <select className='dpdown'>
                <option value='0'>Primary Diet</option>
                <option value='0'>Anything</option>
                <option value='0'>Paleo</option>
                <option value='0'>Vegan</option>
                <option value='0'>Vegetarian</option>
              </select>
            </MDBCol>
            </MDBCol>
          </MDBRow>

          <MDBRow>
            <MDBCol sm="3">
              <label>Body Fat </label>
            </MDBCol>
            <MDBCol >
              <MDBRow className='justify-content-right radiorow'>
                <MDBCol>
                  <MDBRadio id='btn-radio' name='options' label='Low' />
                </MDBCol>
                <MDBCol>
                  <MDBRadio id='btn-radio' name='options' label='Moderate' />
                </MDBCol>
                <MDBCol>
                  <MDBRadio id='btn-radio' name='options' label='High' />
                </MDBCol>
              </MDBRow>
            </MDBCol>
          </MDBRow>

          <MDBRow>
            <MDBCol sm="3">
              <label>Activity Levels </label>
            </MDBCol>
            <MDBCol >
              <MDBRow className='justify-content-right radiorow'>
                <MDBCol>
                  <MDBRadio id='btn-radio' name='options' label='Light' />
                </MDBCol>
                <MDBCol>
                  <MDBRadio id='btn-radio' name='options' label='Moderate' />
                </MDBCol>
                <MDBCol>
                  <MDBRadio id='btn-radio' name='options' label='Heavy' />
                </MDBCol>
                <MDBCol>
                  <MDBRadio id='btn-radio' name='options' label='Very Heavy' />
                </MDBCol>
              </MDBRow>
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
              <MDBCheckbox id='form1Example3' label='Egg' />
            </MDBCol>
            <MDBCol className='d-flex'>
              <MDBCheckbox id='form1Example3' label='Dairy' />
            </MDBCol>
            <MDBCol className='d-flex'>
              <MDBCheckbox id='form1Example3' label='Fish' />
            </MDBCol>
            <MDBCol className='d-flex'>
              <MDBCheckbox id='form1Example3' label='Soy' />
            </MDBCol>
          </MDBRow>

          <MDBRow className='mb-4'>
            <MDBCol className='d-flex'>
            </MDBCol>
            <MDBCol className='d-flex'>
              <MDBCheckbox id='form1Example3' label='Wheat' />
            </MDBCol>
            <MDBCol className='d-flex'>
              <MDBCheckbox id='form1Example3' label='Sesame' />
            </MDBCol>
            <MDBCol className='d-flex'>
              <MDBCheckbox id='form1Example3' label='Seafood' />
            </MDBCol>
            <MDBCol className='d-flex'>
              <MDBCheckbox id='form1Example3' label='Mustard' />
            </MDBCol>
            <MDBCol className='d-flex'>
              <MDBCheckbox id='form1Example3' label='Nuts' />
            </MDBCol>
          </MDBRow>
         
          <MDBBtn type='submit' className='subbtn' block>Next</MDBBtn>
        </form>
      </MDBContainer>
    </div>
  )
}

export default GetStarted