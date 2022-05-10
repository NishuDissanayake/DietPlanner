import React, { useEffect, useState } from 'react';
import './AdminDashboard.css';
import { MDBContainer, MDBBtn, MDBRow, MDBCol, MDBInput, MDBRadio, MDBCheckbox, MDBTable, MDBTableBody, MDBTableHead } from 'mdb-react-ui-kit';
import { getUserData } from '../../APIs/UsersAPI';
import Axios from 'axios';


function AdminDashboard() {

  const [userData, setUserData] = useState([]);
  const [mealData, setMealData] = useState([]);

  const APIkey = 'XhdfsdftyaDGANLhdfjhj346378ajk';

  useEffect(() => {
    Axios.get(`https://healthyceylon.000webhostapp.com/admin_user_retrieve.php?APIkey=${APIkey}`)
      .then((res) => {
        setUserData(res.data);
      })
      .catch((err) => {
        console.log(err);
      })

  }, []); 

  useEffect(() => {
    Axios.get(`https://healthyceylon.000webhostapp.com/admin_meals_retrieve.php?APIkey=${APIkey}`)
    .then((res) => {
      setMealData(res.data);
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
          <MDBRow>
            <MDBCol>
              <MDBInput className='mb-4 inputfields' type='email' id='form1Example1' label='Name' />
            </MDBCol>
            <MDBCol>
              <MDBInput className='mb-4 inputfields' type='password' id='form1Example2' label='Calorie Count' />
            </MDBCol>
          </MDBRow>

          <MDBRow>
            <MDBCol>
              <MDBInput className='mb-4 inputfields' type='password' id='form1Example2' label='Portion' />
            </MDBCol>
            <MDBCol>
              <MDBInput className='mb-4 inputfields' type='password' id='form1Example2' label='Prep Time' />
            </MDBCol>
          </MDBRow>
          <MDBInput className='mb-4 inputfields' type='password' id='form1Example2' label='Recipe Link' />

          <MDBRow className='mb-4'>
            <MDBCol className='d-flex'>
              <label>Meal Time:</label>
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
              <label>Meal Type:</label>
            </MDBCol>
            <MDBCol className='d-flex'>
              <MDBRadio id='form1Example3' name='mealtype' label='Anything' />
            </MDBCol>
            <MDBCol className='d-flex'>
              <MDBRadio id='form1Example3' name='mealtype' label='Paleo' />
            </MDBCol>
            <MDBCol className='d-flex'>
              <MDBRadio id='form1Example3' name='mealtype' label='Vegetarian' />
            </MDBCol>
            <MDBCol className='d-flex'>
              <MDBRadio id='form1Example3' name='mealtype' label='Vegan' />
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
              <MDBInput className='mb-4 inputfields' type='password' id='form1Example2' label='Location' />
            </MDBCol>
          </MDBRow>
          <MDBRow>
            <MDBCol>
              <MDBInput className='mb-4 inputfields' type='password' id='form1Example2' label='Contact Number' />
            </MDBCol>
            <MDBCol>
              <select className='dpdown'>
                <option value='0'>Province</option>
                <option value='0'>Province</option>
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
              <th scope='col'>First Name</th>
              <th scope='col'>Last Name</th>
              <th scope='col'>Email</th>
            </tr>
          </MDBTableHead>
          <MDBTableBody>
            {userData.map((data, key) => (
              <tr key={key}>
                <td>{data.uid}</td>
                <td>{data.firstname}</td>
                <td>{data.lastname}</td>
                <td>{data.email}</td>
              </tr>
            ))}
          </MDBTableBody>
        </MDBTable>
      </MDBContainer>

      <MDBContainer className='addmealtitle'>
        <h1 className='titletxt'>See Meals...</h1>
      </MDBContainer>

      <MDBContainer className='UserTable'>
        <MDBTable striped>
          <MDBTableHead>
            <tr>
              <th scope='col'>ID</th>
              <th scope='col'>Name</th>
              <th scope='col'>Meal Type</th>
              <th scope='col'>Calorie Count</th>
              <th scope='col'>Portion</th>
              <th scope='col'>Prep Time</th>
              <th scope='col'>Link</th>
            </tr>
          </MDBTableHead>
          <MDBTableBody>
          {mealData.map((data1, key) => (
              <tr key={key}>
                <td>{data1.mealid}</td>
                <td>{data1.name}</td>
                <td>{data1.mealtype}</td>
                <td>{data1.clories}</td>
                <td>{data1.amount}</td>
                <td>{data1.preptime}</td>
                <td>{data1.recipelink}</td>
              </tr>
            ))}
          </MDBTableBody>
        </MDBTable>
      </MDBContainer>

      <MDBContainer className='addmealtitle'>
        <h1 className='titletxt'>See Nutritionists...</h1>
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