import React from 'react';
import './Home.css';
import { MDBContainer, MDBRow, MDBCol, MDBBtn, MDBCarousel, MDBCarouselItem, MDBCardImage, MDBCard, MDBCardBody, MDBCardText, MDBCarouselCaption, MDBCarouselElement, MDBCarouselInner } from 'mdb-react-ui-kit';
import HeaderImage from '../../Assets/Images/HomeImage.png';
import Food2 from '../../Assets/Images/Food2.png';
import Food1 from '../../Assets/Images/Food1.png';
import Food3 from '../../Assets/Images/Food3.png';
import PromoImage from '../../Assets/Images/PromoImage.png';
import PromoImage2 from '../../Assets/Images/PromoImage2.png';
import Diet from '../../Assets/Images/Diet.png';
import Calendar from '../../Assets/Images/timetable.png';
import Medal from '../../Assets/Images/certificate.png';
import Mobile from '../../Assets/Images/smartphone.png';
import { ReactDOM } from 'react-dom';
import Iframe from 'react-iframe'


function Home(props) {
  const {
    iframeSource = '<iframe allowfullscreen id="wallsio-iframe" src="https://my.walls.io/e6vp9?nobackground=1&amp;show_header=0" style="border:0;height:500px;width:100%" loading="lazy" title="My social wall"></iframe>'
  } = props;
  return (
    <div>
      <MDBContainer fluid className='HomeNavImage'>
        <MDBContainer>
          <MDBRow className='headerRow'>
            <MDBCol className='headertext'>
              <h1>Eat Healthy</h1>
              <h1>Live Healthy</h1>
              <MDBBtn className='headerbutton'>Get Started</MDBBtn>
            </MDBCol>
            <MDBCol className='carousalcol justify-content-right'>
              <MDBCarousel showIndicators showControls fade className='headercarousel'>
                <MDBCarouselInner className='headercarouselinner'>
                  <MDBCarouselItem className='active'>
                    <MDBCarouselElement src={Food2} alt='...' />
                  </MDBCarouselItem>

                  <MDBCarouselItem>
                    <MDBCarouselElement src={Food1} alt='...' />
                  </MDBCarouselItem>

                  <MDBCarouselItem>
                    <MDBCarouselElement src={Food3} alt='...' />
                  </MDBCarouselItem>
                </MDBCarouselInner>
              </MDBCarousel>
            </MDBCol>
          </MDBRow>
        </MDBContainer>
      </MDBContainer>

      <MDBContainer fluid className='HomePromoStrip'>
        <MDBRow>
          <MDBCol sm-3 ><img src={PromoImage} className='promoimage' /></MDBCol>
          <MDBCol sm-9 className='promotextcol'>
            <MDBRow className='promorows'>
              <MDBCol sm-8 className='promotxt'><h2>Manage Your Diet!</h2></MDBCol>
              <MDBCol sm-4 ><MDBBtn className='promobtn'>Get Started</MDBBtn></MDBCol>
            </MDBRow >
            <MDBRow className='promotxt2'><h4>Choose the Fastest Way to Become Healthy</h4></MDBRow>
          </MDBCol>
        </MDBRow>
      </MDBContainer>

      <MDBContainer fluid>
        <h2 className='cardsetname'>How We Work...</h2>
        <MDBRow className='cardsetrow'>
          <MDBCol>
            <MDBCard style={{ width: '16rem' }} className="cardset1" >
              <MDBRow className='cardimgrow'>
                <img src={Mobile} className='cardimg'></img>
              </MDBRow>
              <MDBRow>
                <MDBCardBody>
                  <MDBCardText className="cardtxt">
                    Choose the Meals You Love
                  </MDBCardText>
                </MDBCardBody>
              </MDBRow>
            </MDBCard>
          </MDBCol>
          <MDBCol>
            <MDBCard style={{ width: '16rem' }} className="cardset2" >
              <MDBRow className='cardimgrow'>
                <img src={Calendar} className='cardimg'></img>
              </MDBRow>
              <MDBRow>
                <MDBCardBody>
                  <MDBCardText className="cardtxt">
                    Get Your Meals Organized
                  </MDBCardText>
                </MDBCardBody>
              </MDBRow>
            </MDBCard>
          </MDBCol>
          <MDBCol>
            <MDBCard style={{ width: '16rem' }} className="cardset3" >
              <MDBRow className='cardimgrow'>
                <img src={Medal} className='cardimg'></img>
              </MDBRow>
              <MDBRow>
                <MDBCardBody>
                  <MDBCardText className="cardtxt">
                    Stay Consistent With the Plan
                  </MDBCardText>
                </MDBCardBody>
              </MDBRow>
            </MDBCard>
          </MDBCol>
          <MDBCol>
            <MDBCard style={{ width: '16rem' }} className="cardset4" >
              <MDBRow className='cardimgrow'>
                <img src={Diet} className='cardimg'></img>
              </MDBRow>
              <MDBRow>
                <MDBCardBody>
                  <MDBCardText className="cardtxt">
                    Enjoy Your Diet Routine
                  </MDBCardText>
                </MDBCardBody>
              </MDBRow>
            </MDBCard>
          </MDBCol>
        </MDBRow>
      </MDBContainer>

      <MDBContainer fluid className='HomePromoStrip2'>
        <MDBRow>
          <MDBCol sm-9 className='promotextcol2'>
            <MDBRow className='promorows2'>
              <MDBCol sm-8 className='promotxt2'><h2>Meal Recipes!</h2></MDBCol>
              <MDBCol sm-4 ><MDBBtn className='promobtn2'>Go To Blog</MDBBtn></MDBCol>
            </MDBRow >
            <MDBRow className='promotxt22'><h4>Delicious Recipes with Simple Steps</h4></MDBRow>
          </MDBCol>
          <MDBCol sm-3 ><img src={PromoImage2} className='promoimage2' /></MDBCol>
        </MDBRow>
      </MDBContainer>

      <MDBContainer fluid className='TwitterFeed'>
        <h2 className='cardsetname'>Latest Updates from Twitter...</h2>
        <MDBContainer>
        <div className="App" dangerouslySetInnerHTML={{__html: iframeSource}}></div>
        </MDBContainer>
      </MDBContainer>

    </div>
  )
}

export default Home