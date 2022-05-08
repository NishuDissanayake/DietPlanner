import React from 'react';
import './CalorieRequirement.css';
import { MDBContainer, MDBRow, MDBCol, MDBBtn, MDBTable, MDBTableBody, MDBTableHead } from 'mdb-react-ui-kit';

function CalorieRequirement() {
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
                <h3 className='titletxt'>Nutritional Data and Requirements...</h3>
            </MDBContainer>

            <MDBContainer className='datadisplay'>
                <MDBTable striped>
                    <MDBTableBody>
                        <tr>
                            <th>Body Mass Index (BMI)</th>
                            <td>Mark</td>
                        </tr>
                        <tr>
                            <th>Basal Metabolic Rate (BMR)</th>
                            <td>Jacob</td>
                        </tr>
                        <tr>
                            <th>Daily Calorie Requirement</th>
                            <th>Mark</th>
                        </tr>
                    </MDBTableBody>
                </MDBTable>

                <MDBBtn color='success'>
                    Proceed to generate meal plan
                </MDBBtn>

            </MDBContainer>



        </div>
    )
}

export default CalorieRequirement