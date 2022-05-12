import React, {useState, useEffect} from 'react';
import './GetStarted.css';
import { MDBContainer, MDBRow, MDBCol, MDBBtn, MDBCheckbox, MDBInput, MDBRadio, MDBBtnGroup } from 'mdb-react-ui-kit';
import Axios from 'axios';
import { Navigate } from "react-router-dom";

function GetStarted() {

  const APIkey = 'XhdfsdftyaDGANLhdfjhj346378ajk';

  const [age, setAge] = useState(0);
  const [weight, setWeight] = useState(0);
  const [height, setHeight] = useState(0);
  const [gender, setGender] = useState("");
  const [primarydiet, setPrimaryDiet] = useState("");
  const [bodyfat, setBodyFat] = useState("");
  const [activity, setActivity] = useState("");
  const [userdataAdded, setUserDataAdded] = useState(false);

  const [allergyinfo, setAllergyInfo] = useState({
    allergens: [],
  });

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

  const ageHandler = event => {
    setAge(event.target.value);
  }

  const weightHandler = event => {
    setWeight(event.target.value);
  }

  const heightHandler = event => {
    setHeight(event.target.value);
  }

  const genderHandler = event => {
    setGender(event.target.value);
  }

  const dietHandler = event => {
    setPrimaryDiet(event.target.value);
  }

  const bodyfatHandler = event => {
    setBodyFat(event.target.value);
  }

  const activityHandler = event => {
    setActivity(event.target.value);
  }


  const addUserData = (e) => {
    e.preventDefault();
    Axios.post(`https://healthyceylon.000webhostapp.com/getstarted_insert.php?APIkey=${APIkey}`, null, {
      params: {
        age: age,
        gender: gender,
        weight: weight,
        height: height,
        diet: primarydiet,
        fat: bodyfat,
        activity: activity,
        allergens: allergyinfo.allergens,
        uid: uid
      }
    })
      .then(
        setUserDataAdded(true)
      )
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

  return (
    <div>
      { 
      userdataAdded
          ? <Navigate to={{ pathname: '/analysis' }} />
          : <></> 
      }
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
        <form className='mealform' onSubmit={addUserData}>

          <MDBRow>
            <MDBCol>
              <MDBInput className='mb-4 inputfields' type='text' id='form1Example2' label='Age' onChange={ageHandler}/>
            </MDBCol>
            <MDBCol>
              <MDBCol>
                <select className='dpdown' onChange={genderHandler} id="genders" defaultValue="Select gender">
                  <option value='0'>Gender</option>
                  <option value='Male'>Male</option>
                  <option value='Female'>Female</option>
                </select>
              </MDBCol>
            </MDBCol>
          </MDBRow>



          <MDBRow>
            <MDBCol>
              <MDBInput className='mb-4 inputfields' type='text' id='form1Example2' label='Weight in Kg' onChange={weightHandler}/>
            </MDBCol>
            <MDBCol>
              <MDBCol>
              <MDBInput className='mb-4 inputfields' type='text' id='form1Example2' label='Heaight in m' onChange={heightHandler}/>
              </MDBCol>
            </MDBCol>
          </MDBRow>

          <MDBRow>
          <MDBCol sm="3">
              <label>Primary Diet </label>
            </MDBCol>
            <MDBCol >
              <MDBRow className='justify-content-right radiorow'>
                <MDBCol>
                  <MDBRadio id='btn-radio' label='Anything' value='Anything' onChange={dietHandler}/>
                </MDBCol>
                <MDBCol>
                  <MDBRadio id='btn-radio' label='Paleo' value='Paleo' onChange={dietHandler}/>
                </MDBCol>
                <MDBCol>
                  <MDBRadio id='btn-radio' label='Vegetarian' value='Vegetarian' onChange={dietHandler}/>
                </MDBCol>
                <MDBCol>
                  <MDBRadio id='btn-radio' label='Vegan' value='Vegan' onChange={dietHandler}/>
                </MDBCol>
              </MDBRow>
            </MDBCol>
          </MDBRow>

          <MDBRow>
            <MDBCol sm="3">
              <label>Body Fat </label>
            </MDBCol>
            <MDBCol >
              <MDBRow className='justify-content-right radiorow'>
                <MDBCol>
                  <MDBRadio id='btn-radio' label='Low' value='low' onChange={bodyfatHandler}/>
                </MDBCol>
                <MDBCol>
                  <MDBRadio id='btn-radio' label='Moderate' value='moderate' onChange={bodyfatHandler}/>
                </MDBCol>
                <MDBCol>
                  <MDBRadio id='btn-radio' label='High' value='high' onChange={bodyfatHandler}/>
                </MDBCol>
                <MDBCol>
                  <MDBRadio id='btn-radio' label='Very High' value='veryhigh' onChange={bodyfatHandler}/>
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
                  <MDBRadio id='btn-radio' label='Light' value='light' onChange={activityHandler}/>
                </MDBCol>
                <MDBCol>
                  <MDBRadio id='btn-radio' label='Moderate' value='moderate' onChange={activityHandler}/>
                </MDBCol>
                <MDBCol>
                  <MDBRadio id='btn-radio' label='Heavy' value='heavy' onChange={activityHandler}/>
                </MDBCol>
                <MDBCol>
                  <MDBRadio id='btn-radio' label='Very Heavy' value='veryheavy' onChange={activityHandler}/>
                </MDBCol>
              </MDBRow>
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

          <MDBBtn type='submit' className='subbtn' block>Next</MDBBtn>
        </form>
      </MDBContainer>
    </div>
  )
}

export default GetStarted