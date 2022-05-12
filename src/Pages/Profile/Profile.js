import React, { useEffect, useState } from 'react';
import './Profile.css';
import { MDBContainer, MDBRow, MDBCol, MDBTable, MDBTableBody, MDBTableHead, MDBBtn } from 'mdb-react-ui-kit';
import Axios from 'axios';
import { NavLink } from 'react-router-dom';

function Profile() {

  const [userData, setUserData] = useState([]);
  const [mealData, setMealData] = useState([]);

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

  const APIkey = 'XhdfsdftyaDGANLhdfjhj346378ajk';

  useEffect(() => {
    Axios.get(`https://healthyceylon.000webhostapp.com/profile_personaldata.php?uid=${uid}&APIkey=${APIkey}`)
      .then((res) => {
        setUserData(res.data);
      })
      .catch((err) => {
        console.log(err);
      })

  }, [uid]);


  useEffect(() => {
    Axios.get(`https://healthyceylon.000webhostapp.com/profile_mealplan.php?uid=${uid}&APIkey=${APIkey}`)
      .then((res) => {
        setMealData(res.data);
      })
      .catch((err) => {
        console.log(err);
      })

  }, [uid]);


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
            {userData.map((data, key) => (
              <tr key={key}>
                <th>Age</th>
                <td>{data.age}</td>
                <td><MDBBtn>Edit</MDBBtn></td>
              </tr>
            ))}
            {userData.map((data1, key) => (
              <tr key={key}>
                <th>Gender</th>
                <td>{data1.gender}</td>
                <td><MDBBtn>Edit</MDBBtn></td>
              </tr>
            ))}
            {userData.map((data2, key) => (
              <tr key={key}>
                <th>Weight</th>
                <td>{data2.weight}</td>
                <td><MDBBtn>Edit</MDBBtn></td>
              </tr>
            ))}
            {userData.map((data3, key) => (
              <tr key={key}>
                <th>Height</th>
                <td>{data3.height}</td>
                <td><MDBBtn>Edit</MDBBtn></td>
              </tr>
            ))}
            {userData.map((data4, key) => (
              <tr key={key}>
                <th>BMI</th>
                <td>{data4.height}</td>
                <td><MDBBtn>Edit</MDBBtn></td>
              </tr>
            ))}
            {userData.map((data5, key) => (
              <tr key={key}>
                <th>BMR</th>
                <td>{data5.BMR}</td>
                <td><MDBBtn>Edit</MDBBtn></td>
              </tr>
            ))}
            {userData.map((data6, key) => (
              <tr key={key}>
                <th>Daily Calorie Requirement</th>
                <td>{data6.caloriecount}</td>
                <td><MDBBtn>Edit</MDBBtn></td>
              </tr>
            ))}
          </MDBTableBody>
        </MDBTable>
      </MDBContainer>

      <MDBContainer className='addmealtitle'>
        <MDBRow>
          <MDBCol>
            <h1 className='titletxt'>Meal Plan</h1>
          </MDBCol>
          <MDBCol className='justifycontent-end'>
            <NavLink className="btn btn-success" to="/planner">Generate New Plan</NavLink>
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
            {mealData.map((data, key) => (
              <tr key={key}>
                <td>{data.day}</td>
                <td>{data.breakfast}</td>
                <td>{data.lunch}</td>
                <td>{data.snack}</td>
                <td>{data.dinner}</td>
                <td><MDBBtn>Delete</MDBBtn></td>
              </tr>
            ))}
          </MDBTableBody>
        </MDBTable>
      </MDBContainer>
    </div>
  )
}

export default Profile