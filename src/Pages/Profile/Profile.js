import React from 'react';
import './Profile.css';
import {MDBContainer, MDBRow, MDBCol, MDBTable, MDBTableBody, MDBTableHead, MDBBtn} from 'mdb-react-ui-kit';

function Profile() {
  return (
    <div>
      <MDBContainer fluid className='HomeNavImage'>
        <MDBContainer>
          <MDBRow className='headerRow'>
            <MDBCol className='headertext'>
              <h1>Hello Mahima</h1>
            </MDBCol>
          </MDBRow>
        </MDBContainer>
      </MDBContainer>

      <MDBContainer className='addmealtitle'>
        <h1 className='titletxt'>Personal Data</h1>
      </MDBContainer>

      <MDBContainer className='UserTable'>
        <MDBTable striped>
          <MDBTableBody>
            <tr>
              <th>Age</th>
              <td>Mark</td>
              <td><MDBBtn>Edit</MDBBtn></td>
            </tr>
            <tr>
              <th>Gender</th>
              <td>Mark</td>
              <td></td>
            </tr>
            <tr>
              <th>Weight</th>
              <td>Mark</td>
              <td><MDBBtn>Edit</MDBBtn></td>
            </tr>
            <tr>
              <th>Height</th>
              <td>Mark</td>
              <td><MDBBtn>Edit</MDBBtn></td>
            </tr>
            <tr>
              <th>BMI</th>
              <td>Mark</td>
              <td></td>
            </tr>
            <tr>
              <th>BMR</th>
              <td>Mark</td>
              <td></td>
            </tr>
            <tr>
              <th>Daily Calorie Requirement</th>
              <td>Mark</td>
              <td><MDBBtn>Edit</MDBBtn></td>
            </tr>
          </MDBTableBody>
        </MDBTable>
      </MDBContainer>

      <MDBContainer className='addmealtitle'>
        <MDBRow>
          <MDBCol>
          <h1 className='titletxt'>Meal Plan</h1>
          </MDBCol>
          <MDBCol className='justifycontent-end'>
            <MDBBtn color="success">Generate New Plan</MDBBtn>
          </MDBCol>
        </MDBRow>
      </MDBContainer>

      <MDBContainer className='UserTable'>
        <MDBTable striped>
          <MDBTableHead>
            <tr>
              <th scope='col'>Date</th>
              <th scope='col'>Breakfast</th>
              <th scope='col'>Lunch</th>
              <th scope='col'>Snack</th>
              <th scope='col'>Dinner</th>
              <th scope='col'>Delete</th>
            </tr>
          </MDBTableHead>
          <MDBTableBody>
            <tr>
              <td>1</td>
              <td>Mark</td>
              <td>Otto</td>
              <td>@mdo</td>
              <td>@mdo</td>
              <td><MDBBtn>Delete</MDBBtn></td>
            </tr>
            <tr>
              <td>2</td>
              <td>Jacob</td>
              <td>Thornton</td>
              <td>@fat</td>
              <td>@mdo</td>
              <td><MDBBtn>Delete</MDBBtn></td>
            </tr>
            <tr>
              <td>1</td>
              <td>Mark</td>
              <td>Otto</td>
              <td>@mdo</td>
              <td>@mdo</td>
              <td><MDBBtn>Delete</MDBBtn></td>
            </tr>
            <tr>
              <td>2</td>
              <td>Jacob</td>
              <td>Thornton</td>
              <td>@fat</td>
              <td>@mdo</td>
              <td><MDBBtn>Delete</MDBBtn></td>
            </tr>
          </MDBTableBody>
        </MDBTable>
      </MDBContainer>
    </div>
  )
}

export default Profile