import React, { useEffect, useState } from 'react';
import './AdminDashboard.css';
import { MDBContainer, MDBBtn, MDBRow, MDBCol, MDBInput, MDBRadio, MDBCheckbox, MDBTable, MDBTableBody, MDBTableHead } from 'mdb-react-ui-kit';
import { getUserData } from '../../APIs/UsersAPI';
import Axios from 'axios';
import { Navigate } from "react-router-dom";


function AdminDashboard() {

  const [userData, setUserData] = useState([]);
  const [mealData, setMealData] = useState([]);
  const [nutritionistData, setNutritionistData] = useState([]);

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

  useEffect(() => {
    Axios.get(`https://healthyceylon.000webhostapp.com/admin_nutritionist_retrieve.php?APIkey=${APIkey}`)
      .then((res) => {
        setNutritionistData(res.data);
      })
      .catch((err) => {
        console.log(err);
      })

  }, []);

  //data insert

  const [name, setName] = useState("");
  const [post, setPost] = useState("");
  const [location, setLocation] = useState("");
  const [mobile, setMobile] = useState("");
  const [province, setProvince] = useState("");
  const [dataAdded, setDataAdded] = useState(false);


  const nameHandler = event => {
    setName(event.target.value);
  }

  const postHandler = event => {
    setPost(event.target.value);
  }

  const locationHandler = event => {
    setLocation(event.target.value);
  }

  const mobileHandler = event => {
    setMobile(event.target.value);
  }

  const provinceHandler = event => {
    setProvince(event.target.value);
  }


  const addNData = (e) => {
    e.preventDefault();
    Axios.post(`https://healthyceylon.000webhostapp.com/admin_nutritionist_add.php?APIkey=${APIkey}`, null, {
      params: {
        namee: name,
        post: post,
        location: location,
        contact: mobile,
        province: province
      }
    })
      .then(
        setDataAdded(true)
      )
  }

  //meal insert

  const [mealname, setMealName] = useState("");
  const [calories, setCalories] = useState("");
  const [portion, setPortion] = useState("");
  const [preptime, setPrepTime] = useState("");
  const [rlink, setRLink] = useState("");
  const [mealtype, setMealType] = useState(false);
  const [mealtimeinfo, setMealTimeInfo] = useState({
    mealtime: [],
  });

  const [allergyinfo, setAllergyInfo] = useState({
    allergens: [],
  });

  const mealnameHandler = event => {
    setMealName(event.target.value);
  }

  const caloriesHandler = event => {
    setCalories(event.target.value);
  }

  const portionHandler = event => {
    setPortion(event.target.value);
  }

  const preptimeHandler = event => {
    setPrepTime(event.target.value);
  }

  const rlinkHandler = event => {
    setRLink(event.target.value);
  }

  const mealtypeHandler = event => {
    setMealType(event.target.value);
  }

  //checkboxes

  

  const mealtimeHandler = (e) => {
    // Destructuring
    const { value, checked } = e.target;
    const { mealtime } = mealtimeinfo;

    console.log(`${value} is ${checked}`);

    // Case 1 : The user checks the box
    if (checked) {
      setMealTimeInfo({
        mealtime: [...mealtime, value],
      });
    }

    // Case 2  : The user unchecks the box
    else {
      setMealTimeInfo({
        mealtime: mealtime.filter((e) => e !== value)
      });
    }
  }

  

  const allergenHandler = (e) => {
    // Destructuring
    const { value, checked } = e.target;
    const { allergens } = allergyinfo;

    console.log(`${value} is ${checked}`);

    // Case 1 : The user checks the box
    if (checked) {
      setAllergyInfo({
        allergens: [...allergens, value],
      });
    }

    // Case 2  : The user unchecks the box
    else {
      setAllergyInfo({
        allergens: allergens.filter((e) => e !== value)
      });
    }
  }



  const addMData = (e) => {
    e.preventDefault();
    Axios.post(`https://healthyceylon.000webhostapp.com/admin_meal_add.php?APIkey=${APIkey}`, null, {
      params: {
        namee: mealname,
        calories: calories,
        portion: portion,
        preptime: preptime,
        recipe: rlink,
        mealtime: mealtimeinfo.mealtime,
        mealtype: mealtype,
        allergens: allergyinfo.allergens
      }
    })
      .then(
        setDataAdded(true)
      )
  }


  return (
    <div>
      {
        console.log(mealtimeinfo.mealtime)
        /* dataAdded
          ? <Navigate to={{ pathname: '/dashboard' }} />
          : <></> */
      }
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
        <form className='mealform' onSubmit={addMData}>
          <MDBRow>
            <MDBCol>
              <MDBInput className='mb-4 inputfields' type='text' id='form1Example1' label='Name' onChange={mealnameHandler} />
            </MDBCol>
            <MDBCol>
              <MDBInput className='mb-4 inputfields' type='text' id='form1Example2' label='Calorie Count' onChange={caloriesHandler} />
            </MDBCol>
          </MDBRow>

          <MDBRow>
            <MDBCol>
              <MDBInput className='mb-4 inputfields' type='text' id='form1Example2' label='Portion' onChange={portionHandler} />
            </MDBCol>
            <MDBCol>
              <MDBInput className='mb-4 inputfields' type='text' id='form1Example2' label='Prep Time' onChange={preptimeHandler} />
            </MDBCol>
          </MDBRow>
          <MDBInput className='mb-4 inputfields' type='text' id='form1Example2' label='Recipe Link' onChange={rlinkHandler} />

          <MDBRow className='mb-4'>
            <MDBCol className='d-flex'>
              <label>Meal Time:</label>
            </MDBCol>
            <MDBCol className='d-flex'>
              <MDBCheckbox id='form1Example3' label='Breakfast' name="mealtime" value="Breakfast" onChange={mealtimeHandler} />
            </MDBCol>
            <MDBCol className='d-flex'>
              <MDBCheckbox id='form1Example3' label='Lunch' name="mealtime" value="Lunch" onChange={mealtimeHandler} />
            </MDBCol>
            <MDBCol className='d-flex'>
              <MDBCheckbox id='form1Example3' label='Snack' name="mealtime" value="Snack" onChange={mealtimeHandler} />
            </MDBCol>
            <MDBCol className='d-flex'>
              <MDBCheckbox id='form1Example3' label='Dinner' name="mealtime" value="Dinner" onChange={mealtimeHandler} />
            </MDBCol>
          </MDBRow>

          <MDBRow className='mb-4'>
            <MDBCol className='d-flex'>
              <label>Meal Type:</label>
            </MDBCol>
            <MDBCol className='d-flex'>
              <MDBRadio id='form1Example3'  value='Anything' label='Anything' onChange={mealtypeHandler} />
            </MDBCol>
            <MDBCol className='d-flex'>
              <MDBRadio id='form1Example3' value='Paleo' label='Paleo' onChange={mealtypeHandler} />
            </MDBCol>
            <MDBCol className='d-flex'>
              <MDBRadio id='form1Example3' value='Vegetarian' label='Vegetarian' onChange={mealtypeHandler} />
            </MDBCol>
            <MDBCol className='d-flex'>
              <MDBRadio id='form1Example3' value='Vegan' label='Vegan' onChange={mealtypeHandler} />
            </MDBCol>
          </MDBRow>
          <MDBRow className='mb-4'>
            <MDBCol className='d-flex'>
              <label>Allergens:</label>
            </MDBCol>
            <MDBCol className='d-flex'>
              <MDBCheckbox id='form1Example3' label='Peanut' name='allergens' value="Peanut" onChange={allergenHandler}/>
            </MDBCol>
            <MDBCol className='d-flex'>
              <MDBCheckbox id='form1Example3' label='Egg' name='allergens' value="Egg" onChange={allergenHandler}/>
            </MDBCol>
            <MDBCol className='d-flex'>
              <MDBCheckbox id='form1Example3' label='Dairy' name='allergens'value="Dairy" onChange={allergenHandler}/>
            </MDBCol>
            <MDBCol className='d-flex'>
              <MDBCheckbox id='form1Example3' label='Fish' name='allergens' value="Fish" onChange={allergenHandler}/>
            </MDBCol>
            <MDBCol className='d-flex'>
              <MDBCheckbox id='form1Example3' label='Soy' name='allergens' value="Soy" onChange={allergenHandler}/>
            </MDBCol>
          </MDBRow>
          <MDBRow className='mb-4'>
            <MDBCol className='d-flex'>
            </MDBCol>
            <MDBCol className='d-flex'>
              <MDBCheckbox id='form1Example3' label='Wheat' name='allergens' value="Wheat" onChange={allergenHandler}/>
            </MDBCol>
            <MDBCol className='d-flex'>
              <MDBCheckbox id='form1Example3' label='Sesame' name='allergens' value="Sesame" onChange={allergenHandler}/>
            </MDBCol>
            <MDBCol className='d-flex'>
              <MDBCheckbox id='form1Example3' label='Seafood' name='allergens' value="Seafood" onChange={allergenHandler}/>
            </MDBCol>
            <MDBCol className='d-flex'>
              <MDBCheckbox id='form1Example3' label='Mustard' name='allergens' value="Mustard" onChange={allergenHandler}/>
            </MDBCol>
            <MDBCol className='d-flex'>
              <MDBCheckbox id='form1Example3' label='Nuts' name='allergens' value="Nuts" onChange={allergenHandler}/>
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
        <form className='mealform' onSubmit={addNData}>
          <MDBInput className='mb-4 inputfields' type='text' id='form1Example1' label='Name' onChange={nameHandler} />
          <MDBRow>
            <MDBCol>
              <MDBInput className='mb-4 inputfields' type='text' id='form1Example2' label='Post' onChange={postHandler} />
            </MDBCol>
            <MDBCol>
              <MDBInput className='mb-4 inputfields' type='text' id='form1Example2' label='Location' onChange={locationHandler} />
            </MDBCol>
          </MDBRow>
          <MDBRow>
            <MDBCol>
              <MDBInput className='mb-4 inputfields' type='text' id='form1Example2' label='Contact Number' onChange={mobileHandler} />
            </MDBCol>
            <MDBCol>
              <select className='dpdown' onChange={provinceHandler} id="provinces" defaultValue="Select province">
                <option value='0'>Province</option>
                <option value='western'>Western</option>
                <option value='central'>Central</option>
                <option value='southern'>Southern</option>
                <option value='uva'>Uva</option>
                <option value='sabaragamuwa'>Sabaragamuwa</option>
                <option value='nwestern'>North Western</option>
                <option value='ncentral'>North Central</option>
                <option value='nothern'>Nothern</option>
                <option value='eastern'>Eastern</option>
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
              <th scope='col'>Name</th>
              <th scope='col'>Post</th>
              <th scope='col'>Hospital</th>
              <th scope='col'>Contact</th>
              <th scope='col'>Province</th>
            </tr>
          </MDBTableHead>
          <MDBTableBody>
            {nutritionistData.map((data2, key) => (
              <tr key={key}>
                <td>{data2.nutritionistid}</td>
                <td>{data2.name}</td>
                <td>{data2.position}</td>
                <td>{data2.location}</td>
                <td>{data2.phonenumber}</td>
                <td>{data2.province}</td>
              </tr>
            ))}
          </MDBTableBody>
        </MDBTable>
      </MDBContainer>
    </div>
  )
}

export default AdminDashboard