import React, {useState, useEffect} from 'react';
import './MealPlan.css';
import { MDBContainer, MDBRow, MDBCol, MDBTable, MDBTableBody, MDBTableHead, MDBBtn, MDBInput, MDBRadio } from 'mdb-react-ui-kit';
import { Navigate } from 'react-router-dom';
import Axios from 'axios';

function MealPlan() {

  const [breakfastData, setBreakfastData] = useState([]);

  const APIkey = 'XhdfsdftyaDGANLhdfjhj346378ajk';

  useEffect(() => {
    Axios.get(`https://healthyceylon.000webhostapp.com/planner_breakfast.php?APIkey=${APIkey}`)
      .then((res) => {
        setBreakfastData(res.data);
      })
      .catch((err) => {
        console.log(err);
      })

  }, []);

  const [day, setDay] = useState("");
  const [breakfast, setBreakfast] = useState("");
  const [lunch, setLunch] = useState("");
  const [snack, setSnack] = useState("");
  const [dinner, setDinner] = useState("");
  const [dataAdded, setDataAdded] = useState(false);

  const uid = 1

  const dayHandler = event => {
    setDay(event.target.value);
  }

  const breakfastHandler = event => {
    setBreakfast(event.target.value);
  }

  const lunchHandler = event => {
    setLunch(event.target.value);
  }

  const snackHandler = event => {
    setSnack(event.target.value);
  }

  const dinnerHandler = event => {
    setDinner(event.target.value);
  }


  const addData = (e) => {
    e.preventDefault();
    Axios.post(`https://healthyceylon.000webhostapp.com/planner_insert.php?APIkey=${APIkey}`, null, {
      params: {
        uid: uid,
        day: day,
        breakfast: breakfast,
        lunch: lunch,
        snack: snack,
        dinner: dinner
      }
    })
      .then(
        setDataAdded(true)
      )
  }


  return (
    <div>
      { 
      dataAdded
          ? <Navigate to={{ pathname: '/profile' }} />
          : <></> 
      }
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
        <form onSubmit={addData}>
          <MDBRow>
            <MDBCol>
              <h4>Date</h4>
            </MDBCol>
            <MDBCol>
            <select className='dpdown' id="dates" onChange={dayHandler} defaultValue="Select date">
                <option value='0'>Date</option>
                <option value='day1'>Day 01</option>
                <option value='day2'>Day 02</option>
                <option value='day3'>Day 03</option>
                <option value='day4'>Day 04</option>
                <option value='day5'>Day 05</option>
                <option value='day6'>Day 06</option>
                <option value='day7'>Day 07</option>
              </select>
            </MDBCol>
          </MDBRow>

          <h4 className='titletxt'>Breakfast</h4>
          <MDBTable striped>
            <MDBTableBody>
              {breakfastData.map((data, key) => (
              <tr key={key}>
                <th><MDBRadio id='form1Example3' name='breakfastradio' value={data.name} label={data.name} onChange={breakfastHandler}/></th>
                <td><MDBBtn color='success'>Visit Recipe</MDBBtn></td>
              </tr>
            ))}
            </MDBTableBody>
          </MDBTable>

          <h4 className='titletxt'>Lunch</h4>
          <MDBTable striped>
            <MDBTableBody>
              <tr>
                <th><MDBRadio id='form1Example3' name='lunchradio' value='Anything1' label='Anything' onChange={lunchHandler}/></th>
                <td><MDBBtn color='success'>Visit Recipe</MDBBtn></td>
              </tr>
              <tr>
                <th><MDBRadio id='form1Example3' name='lunchradio' value='Anything2' label='Anything' onChange={lunchHandler}/></th>
                <td><MDBBtn color='success'>Visit Recipe</MDBBtn></td>
              </tr>
              <tr>
                <th><MDBRadio id='form1Example3' name='lunchradio' value='Anything3' label='Anything' onChange={lunchHandler}/></th>
                <td><MDBBtn color='success'>Visit Recipe</MDBBtn></td>
              </tr>
            </MDBTableBody>
          </MDBTable>

          <h4 className='titletxt'>Snack</h4>
          <MDBTable striped>
            <MDBTableBody>
              <tr>
                <th><MDBRadio id='form1Example3' name='snackradio' value='Anything1' label='Anything' onChange={snackHandler}/></th>
                <td><MDBBtn color='success'>Visit Recipe</MDBBtn></td>
              </tr>
              <tr>
                <th><MDBRadio id='form1Example3' name='snackradio' value='Anything2' label='Anything' onChange={snackHandler}/></th>
                <td><MDBBtn color='success'>Visit Recipe</MDBBtn></td>
              </tr>
              <tr>
                <th><MDBRadio id='form1Example3' name='snackradio' value='Anything3' label='Anything' onChange={snackHandler}/></th>
                <td><MDBBtn color='success'>Visit Recipe</MDBBtn></td>
              </tr>
            </MDBTableBody>
          </MDBTable>

          <h4 className='titletxt'>Dinner</h4>
          <MDBTable striped>
            <MDBTableBody>
              <tr>
                <th><MDBRadio id='form1Example3' name='dinnerradio' value='Anything1' label='Anything' onChange={dinnerHandler}/></th>
                <td><MDBBtn color='success'>Visit Recipe</MDBBtn></td>
              </tr>
              <tr>
                <th><MDBRadio id='form1Example3' name='dinnerradio' value='Anything2' label='Anything' onChange={dinnerHandler}/></th>
                <td><MDBBtn color='success'>Visit Recipe</MDBBtn></td>
              </tr>
              <tr>
                <th><MDBRadio id='form1Example3' name='dinnerradio' value='Anything3' label='Anything' onChange={dinnerHandler}/></th>
                <td><MDBBtn color='success'>Visit Recipe</MDBBtn></td>
              </tr>
            </MDBTableBody>
          </MDBTable>

          <MDBBtn color='success'>Add</MDBBtn>

        </form>
      </MDBContainer>


    </div>
  )
}

export default MealPlan