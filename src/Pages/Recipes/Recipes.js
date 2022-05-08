import React from 'react';
import './Recipes.css';
import { MDBContainer, MDBRow, MDBCol, MDBCheckbox } from 'mdb-react-ui-kit';

function Recipes() {
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
        <h1 className='titletxt'>Recipe Name...</h1>
      </MDBContainer>

      <MDBContainer className='addmealtitle'>
        <MDBRow>
          <MDBCol>
        <h3 className='titletxt'>Ingredients</h3>
          <table border='0' className='ingtable'>
            <tr>
              <td>
              <MDBCheckbox name='checkNoLabel' id='checkboxNoLabel' value='' aria-label='...' />
              </td>
              <td>Ingredient 01</td>
            </tr>
            <tr>
              <td>
              <MDBCheckbox name='checkNoLabel' id='checkboxNoLabel' value='' aria-label='...' />
              </td>
              <td>Ingredient 01</td>
            </tr>
            <tr>
              <td>
              <MDBCheckbox name='checkNoLabel' id='checkboxNoLabel' value='' aria-label='...' />
              </td>
              <td>Ingredient 01</td>
            </tr>
            <tr>
              <td>
              <MDBCheckbox name='checkNoLabel' id='checkboxNoLabel' value='' aria-label='...' />
              </td>
              <td>Ingredient 01</td>
            </tr>
            <tr>
              <td>
              <MDBCheckbox name='checkNoLabel' id='checkboxNoLabel' value='' aria-label='...' />
              </td>
              <td>Ingredient 01</td>
            </tr>
          </table>

          <table border='0' className='ingtable'>
            <tr>
              <th>Calorie Count: </th>
              <td>Ingredient 01</td>
            </tr>
            <tr>
              <th>Portion: </th>
              <td>Ingredient 01</td>
            </tr>
          </table>

          <table border='0'>
            <thead>
              <th>Possible Allergens</th>
            </thead>
            <tbody>
              <tr>
                <td>seafood</td>
              </tr>
            </tbody>
          </table>
          </MDBCol>
          <MDBCol>
            an image
          </MDBCol>
          </MDBRow>
      </MDBContainer>
    </div>
  )
}

export default Recipes