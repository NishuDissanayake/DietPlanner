import React, { useEffect, useState } from 'react';
import './CalorieRequirement.css';
import { MDBContainer, MDBRow, MDBCol, MDBBtn, MDBTable, MDBTableBody, MDBNavbarLink } from 'mdb-react-ui-kit';
import Axios from 'axios';
import { NavLink } from 'react-router-dom';

function CalorieRequirement() {

    const [analysisData, setAnalysisData] = useState([]);

    const APIkey = 'XhdfsdftyaDGANLhdfjhj346378ajk';

    const getCookie = (cname) => {
        let name = cname + "=";
        let ca = document.cookie.split(';');
        for (let i = 0; i < ca.length; i++) {
            let c = ca[i];
            while (c.charAt(0) === ' ') {
                c = c.substring(1);
            }
            if (c.indexOf(name) === 0) {
                return c.substring(name.length, c.length);
            }
        }
        return "";
    }

    const uid = getCookie("uid");

    useEffect(() => {
        Axios.get(`https://healthyceylon.000webhostapp.com/analysis_select.php?uid=${uid}&APIkey=${APIkey}`)
            .then((res) => {
                setAnalysisData(res.data);
                console.log(res.data)
            })
            .catch((err) => {
                console.log(err);
            })

    }, []);

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
                        {analysisData.map((data, key) => (
                            <tr key={key}>
                                <th>Body Mass Index (BMI)</th>
                                <td>{data.height}</td>
                            </tr>
                        ))}
                        {analysisData.map((data1, key) => (
                            <tr key={key}>
                                <th>Basal Metabolic Rate (BMR)</th>
                                <td>{data1.BMR}</td>
                            </tr>
                        ))}
                        {analysisData.map((data2, key) => (
                            <tr key={key}>
                                <th>Daily Calorie Requirement</th>
                                <td>{data2.caloriecount} calories</td>
                            </tr>
                        ))}
                    </MDBTableBody>
                </MDBTable>



            </MDBContainer>

           <MDBContainer className='proceedbutton'>
           <NavLink to='/planner' className="btn btn-success">
                Proceed to generate meal plan
            </NavLink>
           </MDBContainer>

        </div>
    )
}

export default CalorieRequirement