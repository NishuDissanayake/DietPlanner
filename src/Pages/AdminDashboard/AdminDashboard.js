import React from 'react';
import './AdminDashboard.css';
import { MDBContainer, MDBBtn, MDBRow, MDBCol, MDBInput, MDBCheckbox, MDBTable, MDBTableBody, MDBTableHead } from 'mdb-react-ui-kit';

function AdminDashboard() {
  return (
    <div>
      <MDBContainer fluid className='HomeNavImage'>
        <MDBContainer>
          <MDBRow className='headerRow'>
            <MDBCol className='headertext'>
              <h1>Administrator Dashboard</h1>
            </MDBCol>
          </MDBRow>
        </MDBContainer>
      </MDBContainer>

      <MDBContainer className='addmealtitle'>
        <h1 className='titletxt'>Add a Meal...</h1>
      </MDBContainer>

      <MDBContainer className='mealFormCont'>
        <form className='mealform'>
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
            Add to Database
          </MDBBtn>
        </form>
      </MDBContainer>

      <MDBContainer className='addmealtitle'>
        <h1 className='titletxt'>Add a Nutritionist..</h1>
      </MDBContainer>

      <MDBContainer className='mealFormCont'>
        <form className='mealform'>
          <MDBInput className='mb-4 inputfields' type='email' id='form1Example1' label='Name' />
          <MDBRow>
            <MDBCol>
              <MDBInput className='mb-4 inputfields' type='password' id='form1Example2' label='Post' />
            </MDBCol>
            <MDBCol>
              <MDBInput className='mb-4 inputfields' type='password' id='form1Example2' label='Hospital' />
            </MDBCol>
          </MDBRow>
          <MDBRow>
            <MDBCol>
              <MDBInput className='mb-4 inputfields' type='password' id='form1Example2' label='Contact Number' />
            </MDBCol>
            <MDBCol>
              <select className='dpdown'>
                <option value='0'>Specialize in</option>
                <option value='0'>Peanut</option>
                <option value='0'>Egg</option>
                <option value='0'>Egg</option>
                <option value='0'>Egg</option>
                <option value='0'>Egg</option>
                <option value='0'>Egg</option>
              </select>
            </MDBCol>
          </MDBRow>
          <MDBBtn type='submit' className='subbtn' block>
            Add to Database
          </MDBBtn>
        </form>
      </MDBContainer>



      <MDBContainer className='addmealtitle'>
        <h1 className='titletxt'>See Users...</h1>
      </MDBContainer>

      <MDBContainer className='UserTable'>
        <MDBTable striped>
          <MDBTableHead>
            <tr>
              <th scope='col'>ID</th>
              <th scope='col'>First</th>
              <th scope='col'>Last</th>
              <th scope='col'>Handle</th>
            </tr>
          </MDBTableHead>
          <MDBTableBody>
            <tr>
              <td>1</td>
              <td>Mark</td>
              <td>Otto</td>
              <td>@mdo</td>
            </tr>
            <tr>
              <td>2</td>
              <td>Jacob</td>
              <td>Thornton</td>
              <td>@fat</td>
            </tr>
            <tr>
              <td>1</td>
              <td>Mark</td>
              <td>Otto</td>
              <td>@mdo</td>
            </tr>
            <tr>
              <td>2</td>
              <td>Jacob</td>
              <td>Thornton</td>
              <td>@fat</td>
            </tr>
          </MDBTableBody>
        </MDBTable>
      </MDBContainer>

      <MDBContainer className='addmealtitle'>
        <h1 className='titletxt'>See Nutritionists...</h1>
      </MDBContainer>

      <MDBContainer className='UserTable'>
        <MDBTable striped>
          <MDBTableHead>
            <tr>
              <th scope='col'>ID</th>
              <th scope='col'>First</th>
              <th scope='col'>Last</th>
              <th scope='col'>Handle</th>
            </tr>
          </MDBTableHead>
          <MDBTableBody>
            <tr>
              <td>1</td>
              <td>Mark</td>
              <td>Otto</td>
              <td>@mdo</td>
            </tr>
            <tr>
              <td>2</td>
              <td>Jacob</td>
              <td>Thornton</td>
              <td>@fat</td>
            </tr>
            <tr>
              <td>1</td>
              <td>Mark</td>
              <td>Otto</td>
              <td>@mdo</td>
            </tr>
            <tr>
              <td>2</td>
              <td>Jacob</td>
              <td>Thornton</td>
              <td>@fat</td>
            </tr>
          </MDBTableBody>
        </MDBTable>
      </MDBContainer>

      <MDBContainer className='addmealtitle'>
        <h1 className='titletxt'>See Meals...</h1>
      </MDBContainer>

      <MDBContainer className='UserTable lastTable'>
        <MDBTable striped>
          <MDBTableHead>
            <tr>
              <th scope='col'>ID</th>
              <th scope='col'>First</th>
              <th scope='col'>Last</th>
              <th scope='col'>Handle</th>
            </tr>
          </MDBTableHead>
          <MDBTableBody>
            <tr>
              <td>1</td>
              <td>Mark</td>
              <td>Otto</td>
              <td>@mdo</td>
            </tr>
            <tr>
              <td>2</td>
              <td>Jacob</td>
              <td>Thornton</td>
              <td>@fat</td>
            </tr>
            <tr>
              <td>1</td>
              <td>Mark</td>
              <td>Otto</td>
              <td>@mdo</td>
            </tr>
            <tr>
              <td>2</td>
              <td>Jacob</td>
              <td>Thornton</td>
              <td>@fat</td>
            </tr>
          </MDBTableBody>
        </MDBTable>
      </MDBContainer>
    </div>
  )
}

export default AdminDashboard