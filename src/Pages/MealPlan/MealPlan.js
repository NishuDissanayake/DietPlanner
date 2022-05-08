import React from 'react';
import './MealPlan.css';
import {MDBContainer, MDBRow, MDBCol, MDBTable, MDBTableBody, MDBTableHead, MDBBtn, MDBInput, MDBRadio} from 'mdb-react-ui-kit';


function MealPlan() {
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
        <h1 className='titletxt'>Welcome to the planner</h1>
        <form>
        <MDBTable striped>
          <MDBTableBody>
            <tr>
              <th>Date</th>
              <td><MDBInput className='mb-4 inputfields' type='password' id='form1Example2' /></td>
            </tr>
            </MDBTableBody>
            </MDBTable>

            <h4 className='titletxt'>Breakfast</h4>
            <MDBTable striped>
               <MDBTableBody>
            <tr>
              <th><MDBRadio id='form1Example3' name='mealtype'/></th>
              <td>Mark</td>
              <td><MDBBtn>Visit Recipe</MDBBtn></td>
            </tr>
            <tr>
              <th><MDBRadio id='form1Example3' name='mealtype'/></th>
              <td>Mark</td>
              <td><MDBBtn>Visit Recipe</MDBBtn></td>
            </tr>
            <tr>
              <th><MDBRadio id='form1Example3' name='mealtype'/></th>
              <td>Mark</td>
              <td><MDBBtn>Visit Recipe</MDBBtn></td>
            </tr>
          </MDBTableBody>
        </MDBTable>

        <h4 className='titletxt'>Lunch</h4>
            <MDBTable striped>
               <MDBTableBody>
            <tr>
              <th><MDBRadio id='form1Example3' name='mealtype'/></th>
              <td>Mark</td>
              <td><MDBBtn>Visit Recipe</MDBBtn></td>
            </tr>
            <tr>
              <th><MDBRadio id='form1Example3' name='mealtype'/></th>
              <td>Mark</td>
              <td><MDBBtn>Visit Recipe</MDBBtn></td>
            </tr>
            <tr>
              <th><MDBRadio id='form1Example3' name='mealtype'/></th>
              <td>Mark</td>
              <td><MDBBtn>Visit Recipe</MDBBtn></td>
            </tr>
          </MDBTableBody>
        </MDBTable>

        <h4 className='titletxt'>Snack</h4>
            <MDBTable striped>
               <MDBTableBody>
            <tr>
              <th><MDBRadio id='form1Example3' name='mealtype'/></th>
              <td>Mark</td>
              <td><MDBBtn>Visit Recipe</MDBBtn></td>
            </tr>
            <tr>
              <th><MDBRadio id='form1Example3' name='mealtype'/></th>
              <td>Mark</td>
              <td><MDBBtn>Visit Recipe</MDBBtn></td>
            </tr>
            <tr>
              <th><MDBRadio id='form1Example3' name='mealtype'/></th>
              <td>Mark</td>
              <td><MDBBtn>Visit Recipe</MDBBtn></td>
            </tr>
          </MDBTableBody>
        </MDBTable>

        <h4 className='titletxt'>Dinner</h4>
            <MDBTable striped>
               <MDBTableBody>
            <tr>
              <th><MDBRadio id='form1Example3' name='mealtype'/></th>
              <td>Mark</td>
              <td><MDBBtn>Visit Recipe</MDBBtn></td>
            </tr>
            <tr>
              <th><MDBRadio id='form1Example3' name='mealtype'/></th>
              <td>Mark</td>
              <td><MDBBtn>Visit Recipe</MDBBtn></td>
            </tr>
            <tr>
              <th><MDBRadio id='form1Example3' name='mealtype'/></th>
              <td>Mark</td>
              <td><MDBBtn>Visit Recipe</MDBBtn></td>
            </tr>
          </MDBTableBody>
        </MDBTable>

            <MDBBtn>Save</MDBBtn>

        </form>
      </MDBContainer>


    </div>
  )
}

export default MealPlan